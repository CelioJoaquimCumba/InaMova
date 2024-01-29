import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { ProgressBar } from "../../components/atoms"
import { QuizForm } from "../../components/molecules"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"
import { Main, Result } from "../../../constants/paths"
import { drivingRuleQuestions } from "../../../constants/consts"
import { getQuiz, submitResult } from "../../api/quizApi"
import { Question } from "../../models/question.model"
import { useLoading } from "../../providers/loadingProvider"
import { useAuth } from "../../providers/UserProvider"
import { getStats } from "../../api/authApi"


type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>
export const Quiz = ({navigation, route}: Props) => {
    const {id} = route.params
    const {user, setUser} = useAuth()
    const [questions, setQuestions] = useState<Question[]>(drivingRuleQuestions)
    const { setLoadingState } = useLoading()
    useEffect(() => {
        const getQuestions = async () => {
            try {
                setLoadingState(true)
                const quizQuestions = await getQuiz(id)
                console.log(quizQuestions)
                setQuestions(quizQuestions)
            } catch(e) {
                console.log(e)
            } finally {
                setLoadingState(false)
            }
        }

        getQuestions()
    },[])




    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [answers, setAnswers] = useState<{id: string, userAnswer: number}[]>([])
    const numberOfQuestions = questions.length
    const quizData = questions[currentQuestion]
    const answer = quizData.options.findIndex(option => option.isCorrect)
    const currentAnswer = answers?.find(answer => answer.id === quizData.id)?.userAnswer

    const handleNext =  async() => {
        if(currentQuestion < numberOfQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else { 
            if(!user) return
            try {
                setLoadingState(true)
                console.log(id, user.id, score, numberOfQuestions)
                await submitResult(id, user.id, score, numberOfQuestions)
                const stats = await getStats(user.id)
                setUser({ id: user.id, username: user.username, stats })
                setLoadingState(true)
                navigation.reset({
                    index: 0,
                    routes: [{name: Main}, { name: Result, params: {score: score, percentageToPass: 70, numberOfQuestions: numberOfQuestions, quizId: id} }],
                });
            }catch(e) {
                console.log(e)
                throw e
            } finally {
                setLoadingState(false)
            }
        }
    }
    const handlePrevious = () => {
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }
    const handleAnswer = (value: number|null) => {
        if(value === null) {
            return
        }
        if(value === answer) {
            setScore(score + 1)
        }
        if( !answers?.find(answer => answer.id === quizData.id.toString())) {
            setAnswers([...answers, {id: quizData.id.toString(), userAnswer: value}])
        }
    }
    return(
        <View className="flex flex-grow h-full self-stretch pt-8">
            {/* header */}
            <View className="flex flex-row px-8 py-3 justify-end items-center self-stretch">
                <Feather onPress={() => navigation.goBack()} name="x" size={24} color="black" />
            </View>
            {/* main */}
            <View className="flex p-4 pt-2 pb-0 flex-col items-start space-y-2 flex-grow self-stretch bg-gray-50">
                <ProgressBar interval={numberOfQuestions} progress={currentQuestion + 1} />
                <QuizForm
                id={quizData.id}
                image={quizData.image}
                question={quizData.content}
                explanation={quizData.explanation}
                options={quizData.options.map((option)=> option.content)}
                answer={answer}
                userAnswer={currentAnswer}
                onAnswer={(answer: number|null) => handleAnswer(answer)}
                onNext={handleNext}
                onPrevious={handlePrevious}
                />
            </View>
        </View>
    )
}
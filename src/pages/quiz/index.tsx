import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Button, ProgressBar } from "../../components/atoms"
import { QuizForm } from "../../components/molecules"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"
import { Main, Result } from "../../../constants/paths"
import { drivingRuleQuestions } from "../../../constants/consts"
type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>
export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [answers, setAnswers] = useState<{id: string, userAnswer: number}[]>([])
    const numberOfQuestions = drivingRuleQuestions.length
    const quizData = drivingRuleQuestions[currentQuestion]
    const currentAnswer = answers?.find(answer => answer.id === quizData.id.toString())?.userAnswer
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleNext = () => {
        if(currentQuestion < numberOfQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            navigation.reset({
                index: 0,
                routes: [{name: Main}, { name: Result, params: {score: score, percentageToPass: 70, numberOfQuestions: numberOfQuestions} }],
            });
        }
    }
    const handlePrevious = () => {
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }
    const handleAnswer = (answer: number|null) => {
        if(answer === null) {
            return
        }
        if(answer === quizData.answer) {
            setScore(score + 1)
        }
        if( !answers?.find(answer => answer.id === quizData.id.toString())) {
            setAnswers([...answers, {id: quizData.id.toString(), userAnswer: answer}])
        }
    }
    return(
        <View className="flex flex-grow h-full self-stretch pt-8">
            {/* header */}
            <View className="flex flex-row px-8 py-3 justify-end items-center self-stretch">
                <Feather name="x" size={24} color="black" />
            </View>
            {/* main */}
            <View className="flex p-4 pt-2 pb-0 flex-col items-start space-y-2 flex-grow self-stretch bg-gray-50">
                <ProgressBar interval={numberOfQuestions} progress={currentQuestion + 1} />
                <QuizForm
                id={quizData.id}
                image="https://media.istockphoto.com/id/1179858968/vector/turn-left-traffic-sign-vector-illustration-traffic-road-sign.jpg?s=612x612&w=0&k=20&c=F-LWEJlLwdG6R3hkgLkh5PGHMrdrkkrOR5S0Ibel4nk="
                question={quizData.question}
                explanation={quizData.explanation}
                options={quizData.options}
                answer={quizData.answer}
                userAnswer={currentAnswer}
                onAnswer={(answer: number|null) => handleAnswer(answer)}
                onNext={handleNext}
                onPrevious={handlePrevious}
                />
            </View>
        </View>
    )
}
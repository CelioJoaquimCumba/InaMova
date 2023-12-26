import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Button, ProgressBar } from "../../components/atoms"
import { QuizForm } from "../../components/molecules"


const drivingRuleQuestions = [
    {
        id: 1,
        image: "traffic_light.jpg",
        question: "What does a yellow traffic light indicate?",
        explanation: "A yellow traffic light indicates that you should proceed with caution.",
        options: ["Stop", "Slow down", "Go faster", "Proceed with caution"],
        answer: 3
    },
    {
        id: 2,
        image: "headlights.jpg",
        question: "When should you use your vehicle's headlights?",
        explanation: "Headlights should be used during fog or rain for better visibility.",
        options: ["Only at night", "During fog or rain", "Anytime you want", "Never"],
        answer: 1
    },
    {
        id: 3,
        image: "yield_sign.jpg",
        question: "What is the purpose of a 'yield' sign?",
        explanation: "A 'yield' sign indicates that you should slow down and be prepared to stop if necessary.",
        options: ["Stop and wait for oncoming traffic", "Slow down and be prepared to stop", "Proceed with caution", "Speed up to merge quickly"],
        answer: 2
    },
    {
        id: 4,
        image: "white_line.jpg",
        question: "What does a solid white line on the road indicate?",
        explanation: "A solid white line indicates that lane changing is not allowed.",
        options: ["Lane changing allowed", "No passing allowed", "Merge ahead", "Speed limit zone"],
        answer: 1
    },
    {
        id: 5,
        image: "parking.jpg",
        question: "In which direction should you turn your wheels when parking uphill without a curb?",
        explanation: "Turn your wheels away from the curb when parking uphill without a curb.",
        options: ["Towards the curb", "Away from the curb", "Parallel to the road", "It doesn't matter"],
        answer: 2
    }
    // Add more questions as needed
];

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [answers, setAnswers] = useState<{id: string, userAnswer: number}[]>([])
    const numberOfQuestions = drivingRuleQuestions.length
    const quizData = drivingRuleQuestions[currentQuestion]
    const currentAnswer = answers?.find(answer => answer.id === quizData.id.toString())?.userAnswer
    

    const handleNext = () => {
        if(currentQuestion < numberOfQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1)
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
            <View className="flex p-8 pt-2 pb-0 flex-col items-start space-y-2 flex-grow self-stretch bg-gray-50">
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
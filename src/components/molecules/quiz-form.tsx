import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { Card } from "../atoms/Card"
import { Button, OptionCard } from "../atoms"

type QuizProps = {
    id: string
    image: string,
    question: string,
    explanation: string,
    options: string[],
    answer: number
    userAnswer?: number,
    onNext: () => void,
    onPrevious: () => void,
    onAnswer: (answer: number|null) => void
}

export const QuizForm = ({ id, question,image, explanation, options, answer,onAnswer, onNext, onPrevious, userAnswer }:QuizProps) => {
    const [currentAnswer, setCurrentAnswer] = React.useState<number|null>(null)
    const isQuestionAnswered = userAnswer || userAnswer === 0 ? true : false
    const handleSelection = (option: number) => {
        setCurrentAnswer(option)
    }
    const handleNext = () => {
        onNext()
        setCurrentAnswer(null)
    }
    const handlePrevious = () => {
        onPrevious()
    }
    const handleAnswer = () => {
        onAnswer(currentAnswer)
    }
    
    return(
        <ScrollView className="flex flex-col self-stretch flex-grow bg-red w-full h-0">
            <Card className="flex flex-col self-stretch p-4 space-x-2 flex-grow">
                <Text className="text-base leading-6 font-normal text-gray-900">{question}</Text>
                <Image source={{uri: image}} className="self-stretch aspect-[3/2] bg-gray-500 rounded object-cover" resizeMode="cover"/>
                <View className="flex flex-col items-start space-y-4 self-stretch">
                    {options.map((option, index) => (
                        <OptionCard selected={currentAnswer === index && !userAnswer}
                        isAnswer={answer === index && isQuestionAnswered ? true : false}
                        isWrong={userAnswer === index && isQuestionAnswered ? true : false}
                        key={option} 
                        option={option} 
                        index={index} 
                        on_click={(index:number) => handleSelection(index)} />
                    ))}
                </View>
                {
                    isQuestionAnswered &&
                    <Card className={`flex flex-col mt-2 self-stretch p-4 rounded-md  space-y-2 border ${answer === userAnswer ? "border-teal-600 bg-teal-100 " : "border-red-600 bg-red-100"} `}>
                        <Text className={`text-base leading-6 font-semibold ${answer === userAnswer ? "text-teal-900" : "text-red-900"}`}>{answer === userAnswer ? "Correct" : "Incorrect"} Answer</Text>
                        <Text className="text-base leading-6 font-normal text-gray-900">{explanation}</Text>
                    </Card>

                }

            </Card>
            {/* footer  */}
            <View className="flex flex-row py-4 justify-between items-center self-stretch">
                <Button className="bg-white" variant={"outline"} onPress={handlePrevious}>
                    <Text className="text-gray-900">Previous</Text>
                </Button>
                {isQuestionAnswered ?
                    <Button onPress={handleNext}>
                        <Text className="text-white">Next</Text>
                    </Button>
                 :
                    <Button onPress={handleAnswer} className={`${!currentAnswer && currentAnswer !== 0 && "bg-gray-500"}`}>
                        <Text className={`${!currentAnswer && currentAnswer !== 0 ? "text-gray-300" : "text-white"}`}>Answer</Text>
                    </Button>
                }
            </View>
        </ScrollView>
    )
}
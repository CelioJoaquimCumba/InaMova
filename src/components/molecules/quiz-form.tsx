import React from "react"
import { Image, Text, View } from "react-native"
import { Card } from "../atoms/Card"
import { OptionCard } from "../atoms"

type QuizProps = {
    image: string,
    question: string,
    explanation: string,
    options: [string, string, string, string],
    answer: number
}

export const QuizForm = ({ question,image, explanation, options, answer }:QuizProps) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return(
        <Card className="flex flex-col self-stretch p-4 space-x-2">
            <Text className="text-base leading-6 font-normal text-gray-900">{question}</Text>
            <Image source={{uri: image}} className="self-stretch aspect-[3/2] bg-gray-500 rounded object-cover" resizeMode="contain"/>
            <View className="flex flex-col items-start space-y-4 self-stretch">
                {options.map((option, index) => (
                    <OptionCard key={option} option={option} index={index} />
                ))}
            </View>

        </Card>
    )
}
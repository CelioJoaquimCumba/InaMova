import React, { useState } from "react"
import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
type Props = {
    answer: string
    question: string
}
export const FaqQuestion = ({answer, question}:Props) => {
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <View className="flex self-stretch p-4 flex-col space-y-2 items-start border-t border-b border-gray-300">
            <View className="flex flex-row justify-between items-center self-stretch">
                <Text className="text-base leading-6 font-normal text-gray-900">
                    {question}
                </Text>
                <Feather name={isOpen ? "x" : "plus"} size={24} color="black" onPress={() => setIsOpen(!isOpen)}/>
            </View>
            { isOpen && 
                <View className="flex items-start space-y-2 self-stretch">
                    <Text className="text-base leading-6 font-normal text-gray-600">
                        {answer}
                    </Text>
                </View>
            }
        </View>
    )
}
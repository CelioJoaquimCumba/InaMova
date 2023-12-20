import { Image, Text, View } from "react-native"
import  GirlWithComputer  from "../../../assets/girl-with-computer.png"
import React from "react"

export const SecondSlide = () => {
    return (
        <View className="h-full flex flex-col justify-center items-center px-8 space-y-4">
            <Image source={GirlWithComputer} className="w-64 h-64" />
            <Text className="text-xl leading-7 font-bold text-center text-teal-700">Precise Test</Text>
            <Text className="text-base leading-6 font-normal text-gray-600 text-center">To make sure that you are prepared for our exams, we take the information from the organization responsible for making them.</Text>
        </View>
    )
}
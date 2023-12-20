import { Image, StatusBar, Text, View } from "react-native"
import icon from "../../assets/logo.png"
import React from 'react';
export const Intro = () => {
    return (
        <View className="bg-teal-900 flex h-full pt-8 px-4">
            <StatusBar barStyle="light-content" />
            <View className="flex flex-grow flex-row space-x-2 justify-center items-center">
                <Image source={icon} className="w-24 h-24"/>
                <Text className="text-white text-3xl leading-9 font-bold text-center">InaMova</Text>
            </View>
            <View className="flex flex-row space-x-2 justify-end items-center">
                <Text className="text-white text-lg leading-7 font-bold">Made by: Wakandians</Text>
            </View>
        </View>
    )
}
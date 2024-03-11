import { Image, Text, View } from "react-native"
import { images } from "../../../constants";
import { Button } from "../../components/atoms/Button"
import React from 'react';

interface SlideProps{
    imageSrc?:any
    title:string
    bodyText:string
    button?:boolean
    onClick?: () => void
}

export const Slide = ({imageSrc,title,bodyText,button=false,onClick}:SlideProps) => {
    return (
        <View className="h-full  flex flex-col justify-center items-center px-8 space-y-4">
            <Image source={imageSrc} className="w-64 h-64" />
            <Text className="text-xl leading-7 font-bold text-center text-teal-700">{title}</Text>
            <Text className="text-base leading-6 font-normal text-gray-600 text-center">{bodyText}</Text>
            {button && (
                <Button onPress={onClick}><Text className="text-white">Get Started</Text></Button>
            )}
        </View>
    )
}
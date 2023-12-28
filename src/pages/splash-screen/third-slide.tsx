import { Image, Text, View } from "react-native"
import { images } from "../../../constants";
import { Button } from "../../components/atoms/Button"
import React from 'react';

type Props = {
    onClick?: () => void
}
export const ThirdSlide = ({onClick}:Props) => {
    return (
        <View className="h-full  flex flex-col justify-center items-center px-8 space-y-4">
            <Image source={images.GirlWithCreditCard} className="w-64 h-64" />
            <Text className="text-xl leading-7 font-bold text-center text-teal-700">Secure Payment</Text>
            <Text className="text-base leading-6 font-normal text-gray-600 text-center">We make sure that your information is always safe, that includes your payment information, we make payment in a easy and secure way.</Text>
            <Button onPress={onClick}><Text className="text-white">Get Started</Text></Button>
        </View>
    )
}
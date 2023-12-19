import { Image, Text, View } from "react-native"
import  GirlWithCreditCard  from "../../../assets/girl-with-credit-card.png"
import { Button } from "../../components/atoms/Button"

export const ThirdSlide = () => {
    return (
        <View className="h-full  flex flex-col justify-center items-center px-8 space-y-4">
            <Image source={GirlWithCreditCard} className="w-64 h-64" />
            <Text className="text-xl leading-7 font-bold text-center text-teal-700">Secure Payment</Text>
            <Text className="text-base leading-6 font-normal text-gray-600 text-center">We make sure that your information is always safe, that includes your payment information, we make payment in a easy and secure way.</Text>
            <Button><Text className="text-white">Get Started</Text></Button>
        </View>
    )
}
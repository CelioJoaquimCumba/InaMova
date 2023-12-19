import { Text, View, Image } from "react-native"
import CarDriving from "../../../assets/car-driving.png"


export const FirstSlide = () => {
    return (
        <View className="h-full flex flex-col justify-center items-center px-8 space-y-4">
            <Image source={CarDriving} className="w-64 h-64" />
            <Text className="text-xl leading-7 font-bold text-center text-teal-700">Welcome to InaMova</Text>
            <Text className="text-base leading-6 font-normal text-gray-600 text-center">Our main mission is to help you get your driving license  as soon as possible, so that you can deslocate yourself wih more ease, making sure that you have the knowladge to.</Text>
        </View>
    )
}
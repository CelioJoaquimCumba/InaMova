import { Image, StatusBar, Text, View } from "react-native"
import icon from "../../assets/logo.png"

export const Intro = () => {
    return (
        <View className="bg-teal-900 flex  w-full h-full pt-8 px-4">
            <StatusBar barStyle="light-content" />
            <View className="flex flex-grow flex-row space-x-2 justify-center items-center w-full">
                <Image source={icon} className="w-24 h-24"/>
                <Text className="text-white text-3xl leading-9 font-bold text-center">InaMova</Text>
            </View>
            <View className="flex flex-row space-x-2 justify-end items-center w-full">
                <Text className="text-white text-lg leading-7 font-bold">Made by: Wakandians</Text>
            </View>
        </View>
    )
}
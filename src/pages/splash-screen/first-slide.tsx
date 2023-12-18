import { Text, View } from "react-native"

export const FirstSlide = () => {
    return (
        <View className="h-full bg-teal-900 flex flex-col justify-center items-center border-2 border-black">
            <Text className="text-white text-3xl leading-9 font-bold text-center">First</Text>
        </View>
    )
}
import { images, icons } from "../../../constants"
import React from "react"
import { View, Image, Text } from "react-native"
import { Button } from "../atoms"
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"
import { Quiz } from "../../../constants/paths"

export const DailyCard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const handlePress = () => {
      navigation.navigate(Quiz, {id: "a59a59a6-a835-4f6d-abd2-37354052d31b"})
    }
    return(
        <View className="flex flex-row justify-center items-center self-stretch border-b-2 p-4 border-gray-300 rounded-xl bg-white space-x-2">
          <View className="flex flex-grow">
            <Image source={images.GirlStudying} className="h-36 aspect-square" />
          </View>
          <View className="flex-grow flex flex-col flex-shrink justify-end self-stretch space-x-2">
            <Text className="text-base leading-6 font-bold text-gray-900">
              Daily questions to prepare for the exam
            </Text>
            <View className="flex flex-row-reverse ">
              <Button className="rounded-full" size={"icon"} onPress={handlePress}>
                <AntDesign name="arrowright" size={20} color="white" />
              </Button>
            </View>
          </View>
        </View>
    )
}
import { images, icons } from "../../../constants"
import React from "react"
import { View, Image, Text } from "react-native"
import { Button } from "../atoms"
import {AntDesign} from "@expo/vector-icons"

export const DailyCard = () => {
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
              <Button className="rounded-full" size={"icon"}>
                <AntDesign name="arrowright" size={20} color="white" />
              </Button>
            </View>
          </View>
        </View>
    )
}
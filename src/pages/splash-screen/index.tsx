import { Pressable, Text, View } from "react-native"
import Carousel from "../../components/organisms/Carrousel"
import { FirstSlide } from "./first-slide"
import { SecondSlide } from "./second-slide"
import { ThirdSlide } from "./third-slide"
import { Button } from "../../components/atoms/Button"
import React from 'react';
import { Entypo } from "@expo/vector-icons"
import { RootStackParamList } from "src/router/stack"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Register as RegisterPath } from "../../../constants/paths"

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>
export const SplashScreen = ({navigation, route}:Props) => {
    return(
        <View className="flex w-full h-full justify-center py-16">
            <View className="flex flex-row justify-end px-4">
                <Button variant={"link"} className="w-24" onPress={() => navigation.navigate(RegisterPath)}>
                    <Text className="text-teal-800 text-base leading-6 font-normal">Skip</Text>
                    <Entypo name="chevron-right" size={20} color={"teal"}/>
                </Button>
            </View>
            <Carousel items={[<FirstSlide/>, <SecondSlide/>, <ThirdSlide onClick={() => navigation.navigate(RegisterPath)}/>]}/>
        </View>
    )
}
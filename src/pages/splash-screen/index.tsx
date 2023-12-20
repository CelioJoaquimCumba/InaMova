import { Pressable, Text, View } from "react-native"
import Carousel from "../../components/organisms/Carrousel"
import { FirstSlide } from "./first-slide"
import { SecondSlide } from "./second-slide"
import { ThirdSlide } from "./third-slide"
import { Button } from "../../components/atoms/Button"
import React from 'react';
export const SplashScreen = () => {
    return(
        <View className="flex w-full h-full justify-center py-16">
            <View className="flex flex-row justify-end px-4">
                <Button variant={"link"} className="w-24">
                    <Text className="text-teal-800 underline text-base leading-6 font-normal">Skip {">"}</Text>
                    {/* <Icon name="chevron-up" size={20} color={"teal"}/> */}
                </Button>
            </View>
            <Carousel items={[<FirstSlide/>, <SecondSlide/>, <ThirdSlide/>]}/>
        </View>
    )
}
import React from 'react';
import { Pressable, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons"

import { Button } from "../../components/atoms/Button"
import Carousel from "../../components/organisms/Carrousel"
import { slides } from "../../../constants/consts"
import { Slide } from "./Slide"
import { images } from "../../../constants"

export const SplashScreen = () => {
    const imagens=[images.CarDriving,images.GirlWithComputer,images.GirlWithCreditCard]
    return(
        <View className="flex w-full h-full justify-center py-16">
            <View className="flex flex-row justify-end px-4">
                <Button variant={"link"} className="w-24">
                    <Text className="text-teal-800 text-base leading-6 font-normal">Skip</Text>
                    <Entypo name="chevron-right" size={20} color={"teal"}/>
                </Button>
            </View>
            <Carousel items={slides.map((slide)=>(
                <Slide imageSrc={imagens[slide.index]} title={slide.title} bodyText={slide.bodyText} key={slide.title} button={slide.button}/>
            ))}/>
        </View>
    )
}
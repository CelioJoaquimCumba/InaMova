import { FlatList, Image, Text, View } from "react-native"
import React from "react"
import { AcquirePremium, TestExamContainer, TopBarContainer } from "../../components/molecules"
import { icons, images } from "../../../constants"
import { Button } from "../../components/atoms"

export const Learn = () => {
    return(
        <View className="w-screen h-screen py-6">
      {/* topBar */}
      <TopBarContainer username="Persona"/>

            {/* acquirePremium */}
            <AcquirePremium />
      


      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text className="font-[600]">Your practice tests</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row   ">
          <TestExamContainer
            imgSrc={images.onlineTest}
            title="Exam Guide"
            btnTitle="Start"
            icon={icons.lock}
          />
          <TestExamContainer
            imgSrc={images.way}
            title="Rules and transgressions"
            btnTitle="Start"
            icon={icons.lock}
          />
        </View>
      </View>
      
      
    </View>
    )
}
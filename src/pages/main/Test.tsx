import React from "react";
import { Image, Text, View } from "react-native";

import { images, icons } from "../../../constants";
import { Button } from "../../components/atoms/Button";
import {
  PremiumCard,
  QuizElement,
  ExploreCard,
  TopBar,
  DailyCard,
} from "../../components/molecules";

export const Test = () => {
  return (
    <View className="w-screen h-full bg-gray-50">
      {/* topBar */}
      <TopBar username="Persona"/>

      <View className="w-full flex flex-column items-center mt-2 h-auto px-8 space-y-2 ">
        {/* Daily Question */}
        <DailyCard/>
        <PremiumCard />
        <View className="w-5/6">
          <Text className="font-[600]">Your practice tests</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row   ">
          <ExploreCard
            image={images.OnlineTest}
            title="25 free questions"
            locked
          />
          <ExploreCard
            image={images.Intersection}
            title="Full test"
          />
        </View>
        <View className="w-5/6">
          <Text className="font-[600]">Your progress</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row justify-between shadow-sm border-b-2 px-3 border-gray-300 pb-1 rounded-xl bg-white">
          <View className=" w-auto basis-1/2">
            <Button variant={"ghost"} size={"icon"} className="w-full">
              <Image source={icons.calculator} className="h-4 w-4" />
              <Text className="font-[600]">Average Score</Text>
            </Button>
          </View>
          <View className=" w-auto basis-1/2 flex flex-row-reverse">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="border-2 border-black rounded-full"
            >
              <Text>75%</Text>
            </Button>
          </View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6 h-auto flex flex-row justify-evenly">
          <QuizElement imgSrc={icons.check} title="Quiz Completed" num={20} />
          <QuizElement
            imgSrc={icons.checkcheck}
            title="Passed Quiz"
            num={25}
            secondaryTheme={true}
          />
        </View>
      </View>
    </View>
  );
};

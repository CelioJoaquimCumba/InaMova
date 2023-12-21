import React from "react";
import { Image, Text, View } from "react-native";

import { images, icons } from "../../../constants";
import { Button } from "../../components/atoms/Button";
import {
  AcquirePremium,
  QuizElement,
  TestExamContainer,
  TopBarContainer,
} from "../../components/molecules";

export const Test = () => {
  return (
    <View className="w-screen h-screen py-6">
      {/* topBar */}
      <TopBarContainer username="Persona"/>

      {/* secondDiv */}
      <View className="w-full flex flex-row items-center justify-center mt-2 h-1/6  ">
        <View className="w-5/6 flex flex-row justify-center items-center shadow-2xl">
          <View className="w-1/2 h-full ">
            <Image source={images.GirlStudying} className="w-38 h-28" />
          </View>
          <View className="w-40  h-full flex flex-col-reverse">
            <View className="flex flex-row-reverse mr-2 ">
              <Button className="rounded-full shadow-xl " size={"icon"}>
                <Image source={icons.arrowright} className="h-4 w-4" />
                {/* <Text className="">Ola</Text> */}
              </Button>
            </View>
            <Text className="text-left text-base font-[600]">
              Daily questions to prepare for the exam
            </Text>
          </View>
        </View>
      </View>

      {/* acquirePremium */}
      <AcquirePremium />

      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text className="font-[600]">Your practice tests</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row   ">
          <TestExamContainer
            imgSrc={images.onlineTest}
            title="25 free questions"
            btnTitle="Start"
          />
          <TestExamContainer
            imgSrc={images.intersection}
            title="Full test"
            btnTitle="Start"
            icon={icons.lock}
          />
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text className="font-[600]">Your progress</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row justify-between shadow-xl">
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

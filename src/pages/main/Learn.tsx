import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import {
  AcquirePremium,
  TestExamContainer,
  TopBarContainer,
} from "../../components/molecules";
import { icons, images } from "../../../constants";
import { Button, LectureVideoCard } from "../../components/atoms";

export const Learn = () => {
  return (
    <View className="w-screen h-full  bg-slate-200">
      {/* topBar */}
      <TopBarContainer username="Persona" />

      {/* acquirePremium */}
      <AcquirePremium />

      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text className="font-[600]">Your practice tests</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row   ">
          <TestExamContainer
            imgSrc={images.OnlineTest}
            title="Exam Guide"
            btnTitle="Start"
            icon={icons.lock}
          />
          <TestExamContainer
            imgSrc={images.Intersection}
            title="Rules and transgressions"
            btnTitle="Start"
            icon={icons.lock}
          />
        </View>
      </View>
      {/* Video Lectures */}
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6 flex flex-row justify-between">
          <Text className="font-[600]">Video Lectures</Text>
          <Text className="underline text-gray-500">view all</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row   ">
          <LectureVideoCard
            imgSrc={images.PinkCar}
            title="#1 Exam Guide"
            icon={icons.greenLock}
          />
          <LectureVideoCard
            imgSrc={images.BlackCarCones}
            title="#2 Traffic Signals"
            icon={icons.greenLock}
          />
          <LectureVideoCard
            imgSrc={images.BlueCarCones}
            title="#3 Traffic Signals"
          />
        </View>
      </View>
      {/* Highway code */}
      <View className="w-full flex flex-column items-center py-2 h-auto ">
        <View className="w-5/6 flex flex-row justify-between">
          <Text className="font-[600]">Highway Code</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row bg-white pl-2 pt-2 pb-2 items-center rounded-2xl mt-1 border-b-2 border-gray-300">
          <Image
            source={images.HighwayCode}
            className="basis-5/6 h-40 rounded-lg "
          />
          <Button className="rounded-full shadow-xl ml-1" size={"icon"}>
            <Image source={icons.arrowright} className="h-4 w-4" />
            {/* <Text className="">Ola</Text> */}
          </Button>
        </View>
      </View>
    </View>
  );
};

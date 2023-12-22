import { FlatList, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import {
  PremiumCard,
  ExploreCard,
  TopBar,
} from "../../components/molecules";
import { icons, images } from "../../../constants";
import { Button, LectureVideoCard } from "../../components/atoms";

export const Learn = () => {
  return (
    <View className="w-screen h-full bg-gray-50 ">
      {/* topBar */}
      <TopBar username="Persona" />

      <View className="w-full flex flex-col items-center flex-grow space-y-2 px-8 ">
        {/* PremiumCard */}
        <PremiumCard />
        <View className="w-5/6">
          <Text className="text-base leading-6 font-bold text-gray-900">Lectures </Text>
        </View>
        <ScrollView horizontal className="flex flex-row space-x-2 gap-2 overflow-auto" >
          <ExploreCard
            image={images.OnlineTest}
            title="Exam Guide"
          />
          <ExploreCard
            image={images.Intersection}
            title="Rules and transgressions"
          />
          <ExploreCard
            image={images.Intersection}
            title="Traffic signs"
          />
        </ScrollView>
        {/* Video Lectures */}
          <View className="flex flex-row self-stretch justify-between">
            <Text className="text-base leading-6 font-bold text-gray-900">Video Lectures</Text>
            <Text className="underline text-gray-500">view all</Text>
          </View>
          <View className="flex flex-row justify-start self-stretch">
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
          <Text className="text-base leading-6 font-bold text-gray-900">Highway Code</Text>
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

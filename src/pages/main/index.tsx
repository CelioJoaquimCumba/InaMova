import React from "react";
import { Image, Text, View } from "react-native";

import { images, icons } from "../../../constants";
import { Button } from "../../components/atoms/Button";
import Footer from "../../components/molecules/footer";

const Main = () => {
  return (
    <View className="w-screen h-screen py-6">
      <View className="w-full flex flex-row justify-between px-3">
        <View className="justify-between">
          <Text className="text-xs text-">Welcome</Text>
          <Text>Celio Cumba</Text>
        </View>

        <View>
          <Text>Placeholder</Text>
        </View>
      </View>
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
            <Text className="text-left text-base font-normal ">
              Daily questions to prepare for the exam
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6 bg-primaryIM h-18 border-2 border-teal-900 bg-teal-200 rounded-2xl flex flex-row">
          <View className="basis-4/6 m-1 mb-2 ">
            <Text className="text-teal-900 font-bold">Get Premium</Text>
            <Text className="text-teal-900 ">
              Get access to all lectures, tests and the highway code
            </Text>
          </View>
          <View className="basis-2/6 justify-center items-center  pr-3">
            <Button className="rounded-lg">
              <Text className="text-white">Purchase</Text>
            </Button>
          </View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text>Your practice tests</Text>
        </View>
        <View className="w-4/6 h-auto flex flex-row justify-between ">
          <View className="basis-3/6  border-2 border-black mr-2 ">
            {/* <Image source={}/> */}
            <Text>25 free questions</Text>
            <Button className="border-2 border-gray-500" variant={"outline"}><Text className="text-black ">Start</Text></Button>
          </View>
          <View className="basis-3/6 border-black border-2 pl-2 h-40 ml-2"></View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto ">
        <View className="w-5/6">
          <Text>Your progress</Text>
        </View>
        <View className="w-5/6 h-auto flex flex-row justify-between ">
          <View className="basis-2/6 bg-teal-900"></View>
          <View className="basis-2/6 bg-teal-900"></View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Main;

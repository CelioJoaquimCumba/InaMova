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
      <View className="w-full flex flex-row items-center justify-center mt-2 h-1/6 ">
        <View className="w-4/6 flex flex-row justify-center items-center">
          <View className="w-1/2 h-full">
            <Image source={images.GirlStudying} className="w-28 h-28" />
          </View>
          <View className="w-40  h-full flex flex-col-reverse">
            <View className="flex flex-row-reverse">
              <Button>
                <Image source={icons.arrowright} className="h-4 w-4" />
                {/* <Text className="">Ola</Text> */}
              </Button>
            </View>
            <Text className="text-left text-base font-normal bg-black">
              Daily questions to prepare for the exam
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto">
        <View className="w-4/6 bg-primaryIM h-16">a</View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-auto">
        <View className="w-full flex px-16">
          <Text>Your practice tests</Text>
        </View>
        <View className="w-4/6 h-auto flex flex-row justify-between ">
          <View className="w-1/2 bg-primaryIM m-1 h-20"></View>
          <View className="w-1/2 bg-primaryIM m-1 h-20"></View>
        </View>
      </View>
      <View className="w-full flex flex-column items-center mt-2 h-2/6">
        <View className="w-full flex px-16">
          <Text>Your progress</Text>
        </View>
        <View className="w-4/6 h-auto flex flex-row justify-between ">
          <View className="w-full bg-primaryIM h-14"></View>
        </View>
        <View className="w-4/6 h-auto flex flex-row justify-between ">
          <View className="w-1/2 bg-primaryIM m-1 h-20"></View>
          <View className="w-1/2 bg-primaryIM m-1 h-20"></View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Main;

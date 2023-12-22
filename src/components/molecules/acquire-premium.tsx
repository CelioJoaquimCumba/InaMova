import React from "react";
import { Text, View } from "react-native";

import { Button } from "../atoms/Button";

export const AcquirePremium = () => {
  return (
    <View className="w-full flex flex-column items-center mt-4 h-auto  ">
      <View className="w-5/6 bg-primaryIM h-18 border-2 border-teal-900 bg-teal-200 rounded-2xl flex flex-row shadow-md">
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
  );
};

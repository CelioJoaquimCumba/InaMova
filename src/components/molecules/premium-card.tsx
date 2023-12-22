import React from "react";
import { Text, View } from "react-native";

import { Button } from "../atoms/Button";

export const PremiumCard = () => {
  return (
      <View className="flex p-2 flex-row justify-between items-center self-stretch rounded-2xl border border-teal-900 bg-teal-100">
        <View className="flex flex-col  flex-grow flex-shrink">
          <Text className="text-base leading-6 font-bold text-teal-900 ">Get Premium</Text>
          <Text className="text-teal-900 ">
            Get access to all lectures, tests and the highway code
          </Text>
        </View>
        <Button className="flex flex-grow rounded-2xl px-4 py-2 self-stretch h-full">
          <Text className="text-white text-base leading-6 font-normal">Purchase</Text>
        </Button>
      </View>
  );
};

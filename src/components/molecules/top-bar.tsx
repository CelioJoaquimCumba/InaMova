import React from "react";
import { Text, View } from "react-native";
import { Select } from "../atoms";

interface TopBarContainerProps {
  username?: string;
  color?:string;
}
export const TopBar = ({ username, color }: TopBarContainerProps) => {
  return (
    <View className={`w-full flex flex-row ${username ? "justify-between" : "justify-end"} items-center px-8 bg-white py-3`}>
      {username && (
        <View className="flex flex-col justify-between">
          <Text className={`text-base leading-6 font-normal ${color?"text-white":"text-gray-600"}`}>Welcome</Text>
          <Text className={`text-base leading-6 font-bold ${color?"text-white":"text-gray-600"} text`}>{username}</Text>
        </View>
      )}
      <Select/>
    </View>
  );
};

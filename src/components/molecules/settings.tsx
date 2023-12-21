import React from "react";
import { Image, Text, View } from "react-native";

interface SettingsProps {
  iconSrc: any;
  bodyText: string;
  bgColor: string;
}
const Settings = ({ iconSrc, bodyText, bgColor }: SettingsProps) => {
  return (
    <View className="w-5/6 rounded-xl bg-white flex flex-row shadow-sm mb-2">
      <View
        className={`w-8 h-8  flex items-center justify-center rounded-full  my-2 mx-2 ${bgColor}`}
      >
        <Image source={iconSrc} className="w-4 h-4 " />
      </View>
      <View className="flex flex-row justify-center items-center object-center h-full">
        <Text>{bodyText}</Text>
      </View>
    </View>
  );
};

export default Settings;

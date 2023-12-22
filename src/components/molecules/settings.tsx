import React from "react";
import { Alert, Image, Text, View } from "react-native";

interface SettingsProps {
  iconSrc?: any;
  bodyText: string;
  bgColor: string;
  correctAnswer?: boolean;
}
export const Settings = ({ iconSrc = false, bodyText, bgColor }: SettingsProps) => {
  let componentColor: string = "bg-white";
  iconSrc ? console.log(componentColor) : (componentColor=bgColor);
  return (
    <View
      className={`w-5/6 rounded-md ${componentColor} flex flex-row shadow-sm mb-2`}
    >
      {iconSrc && (
        <View
          className={`w-8 h-8  flex items-center justify-center rounded-full  my-2 mx-2 ${bgColor}`}
        >
          <Image source={iconSrc} className="w-4 h-4 " />
        </View>
      )}

      <View
        className={
          "flex flex-row justify-center items-center object-center h-full"
        }
      >
        <Text className={iconSrc ? "text-black" :componentColor==="bg-white"?"text-black my-3 mx-3 font-[500]" :"text-white my-3 mx-3"}>
          {bodyText}
        </Text>
      </View>
    </View>
  );
};

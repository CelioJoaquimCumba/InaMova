import React from "react";
import { Image, Text, View } from "react-native";

interface QuestionProps {
  imgSrc: any;
  bodyText: string;
}
export const Question = ({ imgSrc, bodyText }: QuestionProps) => {
  return (
    <View className={`w-5/6 rounded-xl bg-white flex flex-row shadow-sm mb-2`}>
      <View className="w-full py-3 px-3 flex flex-col ">
        <Text className="pt-1 pl-2 pr-2">{bodyText}</Text>
        <View className="w-full flex flex-col items-center py-2 px-2">
          <Image source={imgSrc} className="w-full h-40 rounded-md" />
        </View>
      </View>
    </View>
  );
};

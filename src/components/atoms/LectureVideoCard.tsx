import React from "react";
import { Image, View, Text } from "react-native";

interface LectureVideoCardProps {
  imgSrc: any;
  title: string;
  icon?: any;
}
export const LectureVideoCard = ({
  imgSrc,
  title,
  icon = "",
}: LectureVideoCardProps) => {
  return (
    <View
      className={
        "flex flex-col py-2 my-1 w-60 bg-white mr-2 items-center rounded-lg border-b-2 border-gray-300"
      }
    >
      <Image source={imgSrc} className="w-56 h-32 rounded-lg" />
      <View className="w-full flex flex-row px-2 justify-between">
        {icon !== "" ? (
          <>
            <Text className="mt-2 font-[600]">{title}</Text>
            <Image source={icon} className="w-6 h-6 mt-2" />
          </>
        ) : (
          <>
            <Text className="mt-2 font-[600]">{title}</Text>
          </>
        )}
      </View>
    </View>
  );
};

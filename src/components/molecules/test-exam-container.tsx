import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import { Button } from "../atoms/Button";

interface TestExamProps {
  imgSrc: any;
  title: string;
  btnTitle: string;
  icon?: any;
}

export const TestExamContainer = ({
  imgSrc,
  title,
  btnTitle,
  icon = "",
  
}: TestExamProps) => {
  const secondary = false
  return (
    <View
      className="basis-3/6 px-4  flex bg- bg-white rounded-xl border-b-2 border-gray-300 mr-2 shadow-sm"
    >
      <Image source={imgSrc} className={"w-30 h-36"} />
      <Text className="text-center font-bold text-xs">{title}</Text>
      <Button
        className="border-2 border-gray-500 my-2 flex flex-row "
        variant={"outline"}
      >
        {icon !== "" ? (
          <>
            <Image source={icon} className="w-3 h-3" />
            <Text className="text-black ">{btnTitle}</Text>
          </>
        ) : (
          <Text className="text-black ">{btnTitle}</Text>
        )}
      </Button>
    </View>
  );
};

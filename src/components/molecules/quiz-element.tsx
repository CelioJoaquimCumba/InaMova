import React from "react";
import { Text } from "react-native";
import { Image, View } from "react-native";

interface QuizElementProps {
  imgSrc: any;
  title: string;
  num: number;
  secondaryTheme?: boolean;
}
export const QuizElement = ({
  imgSrc,
  title,
  num,
  secondaryTheme = false,
}: QuizElementProps) => {
  return (
    <>
      <View
        className={
          !secondaryTheme
            ? `basis-3/6  ml-2  flex flex-col  justify-between rounded-lg border-[1px] border-gray-300 bg-white shadow-sm drop-shadow-md`
            : ` rounded-lg basis-3/6 flex flex-col ml-2 justify-between bg-teal-700 drop-shadow-md shadow-sm`
        }
      >
        <View className=" flex flex-row items-center justify-evenly py-3">
          <Image
            source={imgSrc}
            className="w-8 h-8 rounded-full bg-white border-2 border-white"
          />
          <Text
            className={
              !secondaryTheme
                ? `font-bold text-[14px] w-[76px]`
                : `font-bold text-[14px] w-[76px] text-white`
            }
          >
            {title}
          </Text>
        </View>

        <Text
          className={
            !secondaryTheme
              ? `px-4 py-4 font-[600] `
              : `px-4 py-4 font-[600] text-white`
          }
        >
          {num}
        </Text>
      </View>
    </>
  );
};

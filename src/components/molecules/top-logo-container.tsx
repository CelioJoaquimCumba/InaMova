import { icons } from "../../../constants";
import React from "react";
import { View, Image } from "react-native";

const TopLogoContainer = (mainTheme: string) => {
  const defaultColor = "primary";
  return (
    <View className="w-full  h-1/6">
      {mainTheme === defaultColor ? (
        <Image source={icons.primaryIMicon} className={`w-32 ml-6 h-[40px]`} />
      ) : (
        <Image source={icons.secondaryIMicon} className={`w-32 ml-6 h-[40px]`} />
      )}
    </View>
  );
};

export default TopLogoContainer;

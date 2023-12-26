import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"
import { cn } from "../../../src/lib/utils";
type StatProps = {
  title: string;
  value: number;
  doubleChecked?: boolean;
} & React.HTMLAttributes<HTMLDivElement>
export const StatCard = ({
  className,
  title,
  value,
  doubleChecked = false,
  ...props
}: StatProps) => {
  return (

      <View
      className={cn(`flex flex-col flex-grow flex-shrink self-stretch justify-between p-4 space-y-2 rounded-lg border-b-2 border-gray-300 ${doubleChecked ? "bg-teal-900" :"bg-white"}`, className)}
      >
        <View className=" flex flex-row items-center justify-evenly space-x-2">
          <View className={`flex flex-row ${doubleChecked ? "bg-white" : "bg-gray-50"} rounded-full p-2 `}>
            {doubleChecked ? (
              <FontAwesome5 name="check-double" size={24} color="#0D9488" />
            ): (
              <FontAwesome5 name="check" size={24} color="#0D9488" />
            )}
          </View>
          <Text
            className={`text-base leading-6 font-bold ${doubleChecked ? "text-white" : "text-gray-900"}`}
          >
            {title}
          </Text>
        </View>

        <Text
          className={`text-base leading-6 font-bold ${doubleChecked ? "text-white" : "text-gray-900"}`}
        >
          {value}
        </Text>
      </View>

  );
};

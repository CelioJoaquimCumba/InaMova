import React from "react";
import { Image, Text, View } from "react-native";

interface ExplanationProps {
  correct: boolean;
  bodyText: string;
}
export const Explanation = ({ correct = false, bodyText }: ExplanationProps) => {
  const bgColor = ["bg-teal-500", "bg-red-400"];
  return (
    <View
      className={
        correct
          ? `w-5/6 rounded-xl ${bgColor[0]} flex flex-row shadow-sm mb-2`
          : `w-5/6 rounded-xl ${bgColor[1]} flex flex-row shadow-sm mb-2`
      }
    >
      <View className="w-full py-3 px-3 flex flex-col">
          <Text className="text-gray-900 font-bold mb-2">{correct ? "Correct" : "Incorrect"} Answer</Text>
          <Text>{bodyText}</Text>
      </View>
    </View>
  );
};

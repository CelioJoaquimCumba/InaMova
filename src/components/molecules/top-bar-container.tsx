import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "../atoms";
import { icons } from "../../../constants";

interface TopBarContainerProps {
  username?: string;
  evaluation?: boolean;
}
export const TopBarContainer = ({
  username,
  evaluation = false,
}: TopBarContainerProps) => {
  return (
    <View className="w-full flex flex-row justify-between px-3 bg-white pt-4 border-b-2 border-gray-300">
      {username && (
        <View className="justify-between">
          <Text className="text-xs text-">Welcome</Text>
          <Text className="font-[600]">{username}</Text>
        </View>
      )}

      <View></View>
      <View>
        {evaluation ? (
          <Image source={icons.x} className="w-5 h-5 mb-2 mr-5" />
        ) : (
          <Text>Placeholder</Text>
        )}
      </View>
    </View>
  );
};

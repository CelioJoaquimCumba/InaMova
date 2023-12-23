import React from "react";
import { View, Image, Text } from "react-native";
import { icons } from "../../../constants";
import { Button, Input } from "../../components/atoms";

export const Result = () => {
	return (
		<View className="flex p-8 w-full h-full justify-center items-center">
			<View className="flex w-full flex-row items-center justify-between">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>
				<Text className="text-teal-900 font-bold text-xl">X</Text>
			</View>
		</View>
	);
};

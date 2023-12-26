import { Button } from "../components/atoms/Button";
import { Image, Text, View } from "react-native";
import icon from "../../assets/logo.png";
import loading from "../../assets/Spinner.gif";
import React from "react";
import { icons, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
export const Loading = () => {
	return (
		<View className="flex justify-between w-full h-full items-center p-8 bg-teal-900 ">
			<StatusBar style="light"/>
			<View className="w-full flex flex-row items-center space-x-2">
				<Image source={icons.primaryIMlogo} className="w-10 h-10" />
				<Text className="text-white font-bold text-xl">InaMova</Text>
			</View>
			<View className="flex flex-col justify-center items-center space-y-2 flex-grow">
				<Image source={images.Spinner} className="w-24 h-24" />
				<Text className="font-bold text-xl text-white">Loading...</Text>
			</View>
			<View className="flex flex-row justify-center self-stretch bg-teal-100 py-4 rounded-md ">
				<Text className="text-teal-900 text-base leading-6 font-normal text-center">
					Tip #1: Don't drink and drive
				</Text>
			</View>
		</View>
	);
};

import { Button } from "../components/atoms/Button";
import { Image, Text, View } from "react-native";
import icon from "../../assets/logo.png";
import loading from "../../assets/Spinner.gif";
import React from "react";
import { icons, images } from "../../constants";
export const Loading = () => {
	return (
		<View className="flex justify-between w-full h-full items-center py-16 bg-teal-900 ">
			<View className="w-full flex flex-row items-center gap-3 px-5">
				<Image source={icons.primaryIMlogo} className="w-10 h-10" />
				<Text className="text-white font-bold text-xl">InaMova</Text>
			</View>
			<View className="flex items-center gap-3">
				<Image source={images.spinner} className="w-24 h-24" />
				<Text className="font-bold text-xl text-white">Loading...</Text>
			</View>
			<View className="w-80">
				<Button className="bg-teal-100">
					<Text className="text-teal-900">
						Tip #1: Don't drink and drive
					</Text>
				</Button>
			</View>
		</View>
	);
};

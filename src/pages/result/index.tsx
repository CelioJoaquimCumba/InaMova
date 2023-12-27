import React from "react";
import { View, Image, Text } from "react-native";
import { icons, images } from "../../../constants";
import { Button, Input } from "../../components/atoms";


export const Result = () => {
	const passed = false;
	const textColor = passed ? "text-teal-600" : "text-red-500";
	return (
		<View className="flex p-8 w-full h-full justify-center items-center">
			{/* header */}
			<View className="flex w-full flex-row items-center justify-between">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>
				<Image source={icons.x} />
			</View>
			{/* main */}
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2 text-center">
				<Text className="text-black leading-7 font-bold text-2xl">
					{passed ? "Congratulations" : "You failed"}
				</Text>
				<Text className=" text-base leading-6 font-normal text-center">
					{passed
						? ""
						: "Don't worry, you just need to practise a little more"}
				</Text>
				<View className="gap-2 p-2 border border-gray-200 rounded-md">
					<Text>You scored: </Text>
					<Text
						className={`font-bold text-2xl ${textColor} text-center`}
					>
						15/25(55%)
					</Text>
					<Image source={passed ? images.Passed : images.Failed} />
					<View className="flex flex-row justify-between wfu">
						<Button className=" bg-white">
							<Text className="font-semibold">
								Go to HomePage
							</Text>
						</Button>
						<Button className="">
							<Text className="text-white">Try again</Text>
						</Button>
					</View>
				</View>
			</View>
		</View>
	);
};

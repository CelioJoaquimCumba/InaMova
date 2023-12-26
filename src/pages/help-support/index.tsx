import React from "react";
import { View, Image, Text } from "react-native";
import { icons, images } from "../../../constants";
import { Button, Input } from "../../components/atoms";

export const HelpSupport = () => {
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
			<View className="flex flex-col w-full flex-grow justify-start py-4 items-center space-y-2 ">
				<Text className="text-xl font-medium text-left w-full">
					We are here to help
				</Text>
				<View className=" w-full p-2 rounded-md border border-gray-100">
					<Text className="text-teal-600 font-medium text-lg text-center">
						Contact
					</Text>
					<View className="gap-3 p-4">
						<Text className="font-semibold text-gray-600">
							Phone/Whatsapp: 849383897
						</Text>
						<Text className="font-semibold text-gray-600">
							Email: celio.joaquim.cumba@gmail.com
						</Text>
					</View>
				</View>
				<View className="w-full p-2 rounded-md border border-gray-100">
					<Text className="text-teal-600 font-medium text-lg text-center">
						About us
					</Text>
					<Text className="font-semibold text-gray-600 text-justify p-3">
						Unlock your path to a driver's license with Inamova,
						your go-to app for mastering the driving test. We offer
						a seamless blend of interactive lessons, realistic
						simulations, and expert tips to ensure you're not just
						ready but confident on the road
					</Text>
				</View>
			</View>
		</View>
	);
};

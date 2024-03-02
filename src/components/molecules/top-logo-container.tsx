import { icons } from "../../../constants";
import React from "react";
import { View, Image, Text } from "react-native";
import { Button } from "../atoms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import {
	Main as MainPath,
	Register as RegisterPath,
} from "../../../constants/paths";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type TopLogoContainerProps = {
	LeftSide: "" | "Logo" | "Chevron" | string;
	RightSide?: "X" | "GSkip" | "Skip";
};
export const TopLogoContainer = ({
	LeftSide,
	RightSide,
}: TopLogoContainerProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	let LeftSideInfo: any, RightSideInfo: any;
	if (LeftSide.length > 0) {
		switch (LeftSide) {
			case "Logo":
				LeftSideInfo = (
					<View className="flex flex-row items-center space-x-2">
						<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
						<Text className="text-lg leading-7 font-bold text-teal-900">
							InaMova
						</Text>
					</View>
				);
				break;
			case "Chevron":
        		LeftSideInfo = (
					<AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()}/>
				);
				break;
			default:
				LeftSideInfo = (
					<View className="flex flex-row items-center space-x-2">
						<Text className="text-xl leading-7 font-semibold">{LeftSide}</Text>
					</View>
				);
				break;
		}
	} else {
		LeftSideInfo = <>{""}</>;
	}

	if (RightSide && RightSide.length > 0) {
		switch (RightSide) {
			case "X":
				RightSideInfo = (
					<Feather
						onPress={() => navigation.goBack()}
						name="x"
						size={24}
						color="black"
					/>
				);
				break;
			case "GSkip":
				RightSideInfo = (
					<Button
						variant={"link"}
						className="w-24"
						onPress={() => navigation.navigate(RegisterPath)}>
						<Text className="text-teal-800 text-base leading-6 font-normal">
							Skip
						</Text>
						<Entypo name="chevron-right" size={20} color={"teal"} />
					</Button>
				);
				break;
			case "Skip":
				RightSideInfo = (
					<Button
						variant={"outline"}
						className="w-24"
						onPress={() => navigation.navigate(MainPath)}>
						<Text className=" text-base leading-6 font-normal">Skip</Text>
						<Entypo name="chevron-right" size={20} color={"teal"} />
					</Button>
				);
				break;
			default:
				RightSideInfo = <>{""}</>;
				break;
		}
	} else {
		RightSideInfo = <>{""}</>;
	}
	return (
			<View className="flex w-full flex-row items-center justify-between px-8 py-3">
			{LeftSideInfo}

			<View>{""}</View>

			{RightSideInfo}
		</View>
	);
};

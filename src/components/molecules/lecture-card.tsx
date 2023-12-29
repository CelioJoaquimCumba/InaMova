import { images } from "../../../constants";
import React from "react";
import { Image, Text, View } from "react-native";

interface LectureCardProps {
	id: string;
	title: string;
	category: string;
	readTime: number;
	imageSrc: any;
	onPress?: () => void;
}
export const LectureCard = ({
	id,
	title,
	category,
	readTime,
	imageSrc,
	onPress,
}: LectureCardProps) => {
	return (
		<View className="flex flex-row justify-start items-center border-b-2 p-4 border-gray-300 space-x-2 h-auto">
			<View className="flex flex-col pb-0 h-full space-y-10 bg-white w-auto">
				<View className="flex flex-row">
					<Text className="text-sm leading-6 font-medium">{title}</Text>
				</View>
				<View className="flex flex-row space-x-2 items-center">
					<View className="px-3 py-1 rounded-2xl bg-teal-100">
						<Text>{category}</Text>
					</View>
					<Text className="text-sm leading-5 font-light">
						{readTime} min read
					</Text>
				</View>
			</View>
			<View className="flex w-full justify-center flex-col">
				<Image source={imageSrc} className="self-stretch h-24 aspect-square rounded-2xl" />
			</View>
		</View>
	);
};

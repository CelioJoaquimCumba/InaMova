import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
interface ExploreVideoCardProps {
	image: any;
	id: string;
	title: string;
	locked?: boolean;
	onPress?: () => void;
}
export const ExploreVideoCard = ({
	image,
	id,
	title,
	locked = false,
	onPress
}: ExploreVideoCardProps) => {
	return (
		<View
			className={
				"flex flex-col p-4 bg-white mx-2 items-center rounded-lg border-b-2 border-gray-300"
			}>
			<Image source={image} className="h-48 aspect-[3/2] rounded-lg" />
			<View className="flex flex-row flex-grow self-stretch p-2 justify-between  items-center space-x-2">
				<Text className="text-base leading-6 font-bold gray-700">
					#{id} {title}
				</Text>
				{locked && (
					<View className="bg-gray-200 rounded-full p-1">
						<Feather name="lock" size={16} />
					</View>
				)}
			</View>
		</View>
	);
};

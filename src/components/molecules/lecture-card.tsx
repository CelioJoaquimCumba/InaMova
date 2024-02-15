import { useNavigation } from "@react-navigation/native";
import { images } from "../../../constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { useLoading } from "../../providers/loadingProvider";
import { ArticlePage } from "../../../constants/paths";

interface LectureCardProps {
	id: string;
	title: string;
	category: string;
	readTime: number;
	imageSrc?: any;
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
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const {setLoadingState} = useLoading()
  const handlePress = () => {
      setLoadingState(true)
      navigation.navigate(ArticlePage, {id:id})
  }
	return (
		<TouchableOpacity onPress={handlePress} className="flex flex-row flex-wrap justify-between items-center border-b-2 p-4 border-gray-300 space-x-2 h-auto">
			<View className="flex flex-col  pb-0 h-full space-y-10 bg-white w-auto ">
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
			<View className="flex flex-col">
				<Image source={imageSrc} className="self-stretch aspect-[3/2] rounded-2xl" />
			</View>
		</TouchableOpacity>
	);
};

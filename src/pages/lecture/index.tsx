import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { images } from "../../../constants";
import { DailyCard, StatCard, LectureCard } from "../../components/molecules";
import {
	lectureCardsTrafficRules,
	practiceTests,
} from "../../../constants/consts";
import { RootStackParamList } from "../../router/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Lecture">;
export const Lecture = ({navigation}:Props) => {
	const imagens = [
		images.LightSignal,
		images.RecklessDriving,
		images.HighwayIntersection,
		images.YellowSign,
	];
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-screen h-full bg-white">
				<View className="flex w-full flex-row items-center justify-between px-8 pb-3 bg-white">
					<View className="flex flex-row items-center space-x-2">
						<Text className="text-xl leading-7 font-semibold">
							Rules and Transgressions
						</Text>
					</View>

					<Feather name="x" size={24} color="black" onPress={() => navigation.goBack()} />
				</View>

				<View className="p-2">
					<ScrollView className="flex flex-row mt-2 px-4 pb-0  border-2 border-gray-200 border-t-0 bg-white w-auto h-auto">
						{lectureCardsTrafficRules.map((item)=>(
							<LectureCard
							id={item.id+""}
							title={item.title}
							category={item.category}
							readTime={item.readTime}
							imageSrc={imagens[item.id]}
							key={item.id}
							onPress={()=>{}}/>
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

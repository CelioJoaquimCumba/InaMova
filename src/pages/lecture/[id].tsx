import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { images } from "../../../constants";
import { DailyCard, StatCard, LectureCard, TopLogoContainer } from "../../components/molecules";
import {
	lectureCardsTrafficRules,
	practiceTests,
} from "../../../constants/consts";
import { RootStackParamList } from "../../../src/router/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Lecture">;
export const Lecture = () => {
	
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-screen h-full bg-gray-50">
				<TopLogoContainer LeftSide="Rules and Transgressions" RightSide="X"/>

				<View className="p-2">
					<ScrollView className="mt-2 px-4 pb-0  border-2 border-gray-200 border-t-0 bg-white w-auto h-auto">
						{/* Daily Question */}
						{lectureCardsTrafficRules.map((item)=>(
							<LectureCard
							id={item.id+""}
							title={item.title}
							category={item.category}
							readTime={item.readTime}
							imageSrc={item.img}
							key={item.id}
							onPress={()=>{}}/>
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images, icons } from "../../../constants";
import { Button } from "../../components/atoms/Button";
import {
	PremiumCard,
	ExploreCard,
	TopBar,
	DailyCard,
	StatCard,
} from "../../components/molecules";
import { practiceTests } from "../../../constants/consts";


import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"

type Props = NativeStackScreenProps<RootStackParamList, 'SubscriptionPlan'>
export const SubscriptionPlan = () => {
	return (
		<View className="w-screen h-full bg-gray-50 pb-4">
			{/* topBar */}
			<TopBar username="Persona" />

			<ScrollView className="w-full flex flex-column mt-2 h-auto px-8">
				{/* Daily Question */}
				{/* <DailyCard /> */}
				
			</ScrollView>
		</View>
	);
}
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons } from "../../../constants";
import { Feather } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { SubscriptionCard } from "../../components/molecules";

type Props = NativeStackScreenProps<RootStackParamList, "SubscriptionPlan">;
export const SubscriptionPlan = () => {
	return (
		<View className="w-screen h-full bg-gray-50 p-8 pb-4">
			{/* topBar */}
			<View className="flex w-full flex-row items-center justify-between pb-3">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>
				<Feather name="x" size={24} color="black" />
			</View>

			<View className="flex flex-row justify-between self-stretch mt-2">
				<Text className="text-base leading-6 font-bold text-gray-900">
					Choose your plan
				</Text>
			</View>
			<ScrollView className="w-full h-auto flex flex-col space-y-8 " showsVerticalScrollIndicator={false}>
				<SubscriptionCard title="Basic" nmbrQuestions={1000} duration={1} value={100} borderColor="border-gray-400"/>
				<SubscriptionCard title="Pro" nmbrQuestions={1000} duration={3} value={250} borderColor="border-teal-600"/>
			</ScrollView>
		</View>
	);
};

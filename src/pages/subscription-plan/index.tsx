import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons } from "../../../constants";
import { Feather } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { SubscriptionCard, TopLogoContainer } from "../../components/molecules";

type Props = NativeStackScreenProps<RootStackParamList, "SubscriptionPlan">;
export const SubscriptionPlan = ({navigation, route}:Props) => {
	return (
		<View className="w-screen h-full bg-gray-50 py-8 pb-4">
			{/* topBar */}
			<TopLogoContainer LeftSide="Logo" RightSide="X"/>

			<View className="flex flex-row justify-between self-stretch mt-2 px-8">
				<Text className="text-base leading-6 font-bold text-gray-900">
					Escolha o seu plano
				</Text>
			</View>
			<ScrollView className="w-full h-auto flex flex-col space-y-8 px-8" showsVerticalScrollIndicator={false}>
				<SubscriptionCard title="Básico" nmbrQuestions={1000} duration={1} value={100} borderColor="border-gray-400"/>
				<SubscriptionCard title="Pro" nmbrQuestions={1000} duration={3} value={250} borderColor="border-teal-600"/>
			</ScrollView>
		</View>
	);
};

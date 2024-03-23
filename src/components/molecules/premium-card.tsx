import React from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { SubscriptionPlan } from "../../../constants/paths";
import { Button } from "../atoms/Button";

export const PremiumCard = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const handlePress = () => {
		navigation.navigate(SubscriptionPlan);
	};
	return (
		<View className="flex p-2 flex-row justify-between items-center self-stretch rounded-2xl border border-teal-900 bg-teal-100 mt-2">
			<View className="flex flex-col  flex-grow flex-shrink">
				<Text className="text-base leading-6 font-bold text-teal-900 ">
					Seja Premium
				</Text>
				<Text className="text-teal-900 ">
					Tenha acesso a todas as aulas, provas e ao código da estrada
				</Text>
			</View>
			<Button
				className="flex flex-grow rounded-2xl px-4 py-2 self-stretch h-full"
				onPress={handlePress}
			>
				<Text className="text-white text-base leading-6 font-normal">
					Comprar
				</Text>
			</Button>
		</View>
	);
};

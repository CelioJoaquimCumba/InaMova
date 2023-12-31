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
import { useAuth } from "../../providers/UserProvider";

export const Test = () => {
	const { user } = useAuth()
	return (
		<View className="w-screen h-full bg-gray-50 pb-4">
			{/* topBar */}
			<TopBar username={user?.username} />

			<ScrollView className="w-full flex flex-column mt-2 h-auto px-4">
				{/* Daily Question */}
				<DailyCard />
				{/* Premium Card */}
				<PremiumCard />
				<View className="flex self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Your practice tests
					</Text>
				</View>
				<ScrollView
					horizontal
					className="flex flex-row self-stretch"
					// showsHorizontalScrollIndicator={false}>
				>
					{practiceTests.map((item) => (
						<ExploreCard
							id={item.id.toString()}
							image={item.image}
							title={item.title}
							locked={item.locked}
							type={item.type==="test"?"test":"learn"}
							key={item.title}
						/>
					))}
				</ScrollView>
				<View className="flex flex-grow self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Your progress
					</Text>
				</View>
				<View className="flex flex-row self-stretch p-4 justify-between items-center shadow-sm border-b-2  border-gray-300 rounded-xl bg-white">
					<View className=" flex flex-row flex-grow justify-start flex-shrink">
						<View className="flex flex-row flex-grow justify-start items-center">
							<Ionicons name="calculator-outline" size={32} color={"#0D9488"} />
							<Text className="text-base leading-6 font-bold">
								Average Score
							</Text>
						</View>
					</View>
					<View className=" flex flex-row justify-end rounded-full border-2 border-teal-600 p-2">
						<Text>75%</Text>
					</View>
				</View>
				<View className="w-full flex flex-column items-center mt-2 ">
					<View className="flex flex-row">
						<StatCard title="Quiz Completed" value={20} className="mr-1" />
						<StatCard
							doubleChecked
							title="Passed Quiz"
							value={25}
							className="ml-1"
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

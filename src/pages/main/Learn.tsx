import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
	PremiumCard,
	ExploreCard,
	ExploreVideoCard,
	TopBar,
} from "../../components/molecules";
import { images } from "../../../constants";
import { Button } from "../../components/atoms";
import { lectures, videoLectures } from "../../../constants/consts";

export const Learn = () => {
	const lectureImagens = [
		images.OnlineTest,
		images.Intersection,
		images.Intersection,
	];
	const videoLectureImagens = [
		images.PinkCar,
		images.BlackCarCones,
		images.PedestrianCrossing,
	];
	return (
		<View className="w-screen h-full bg-gray-50 pb-2 ">
			{/* topBar */}
			<TopBar username="Persona" />

			<ScrollView className="w-full flex flex-col flex-grow space-y-2 px-8 ">
				{/* PremiumCard */}
				<PremiumCard />
				<View className="flex flex-row justify-start self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Lectures{" "}
					</Text>
				</View>
				<ScrollView
					horizontal
					className="flex flex-row space-x-2 gap-2 overflow-auto"
					showsHorizontalScrollIndicator={false}>
					{lectures.map((item) => (
						<ExploreCard
							image={lectureImagens[item.index]}
							title={item.title}
							key={item.title}
							locked={item.locked}
							route={item.route}
						/>
					))}
				</ScrollView>
				{/* Video Lectures */}
				<View className="flex flex-row self-stretch justify-between items-end">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Video Lectures
					</Text>
					<Text className="text-base leading-6 font-normal text-gray-900 underline">
						View all
					</Text>
				</View>
				<ScrollView
					horizontal
					className="flex flex-row self-stretch"
					showsHorizontalScrollIndicator={false}>
					{videoLectures.map((item) => (
						<ExploreVideoCard
							image={videoLectureImagens[item.index]}
							index={item.index + 1}
							title={item.title}
							key={item.title}
							locked={item.locked}
							route={item.route}
						/>
					))}
				</ScrollView>
				{/* Highway code */}
				<View className="flex flex-row justify-between self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Highway Code
					</Text>
				</View>
				<View className="flex flex-row self-stretch bg-white pl-2 pt-2 pb-2 items-center rounded-2xl mt-1 border-b-2 border-gray-300">
					<Image
						source={images.HighwayCode}
						className="self-stretch w-64 aspect-square rounded-lg "
					/>
					<Button className="rounded-full shadow-xl ml-1" size={"icon"}>
						<AntDesign name="arrowright" size={20} color="white" />
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};

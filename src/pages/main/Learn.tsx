import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
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
import { useAuth } from "../../providers/UserProvider";
import { Subject } from "../../models";
import { useLoading } from "../../providers/loadingProvider";
import { getSubjects } from "../../api/subjectApi";
import * as OpenAnything from "react-native-openanything";

export const Learn = () => {
	const [subjects, setSubjects] = useState<Subject[]>(lectures);
	const { setLoadingState } = useLoading();

	useEffect(() => {
		const storeSubjects = async () => {
			try {
				setLoadingState(true);
				const subjects = await getSubjects();
				// console.log(subjects);
				setSubjects(subjects);
			} catch (e) {
				console.log(e);
				throw e;
			} finally {
				setLoadingState(false);
			}
		};

		storeSubjects();
	}, []);

	const { user } = useAuth();
	return (
		<View className="w-screen h-full bg-gray-50 pb-2 ">
			{/* topBar */}
			<TopBar username={user?.username} />

			<ScrollView className="w-full flex flex-col flex-grow space-y-2 px-4 ">
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
					{subjects.map((item) => (
						<ExploreCard
							id={item.id + ""}
							image={item.thumbnail}
							title={item.title}
							type={"learn"}
							key={item.id}
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
							image={item.img}
							id={item.id + 1 + ""}
							title={item.title}
							key={item.title}
							locked={item.locked}
						/>
					))}
				</ScrollView>
				{/* Highway code */}
				<View className="flex flex-row justify-between self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Highway Code
					</Text>
				</View>
				<View className="flex flex-col self-stretch bg-white p-2 items-center rounded-2xl mt-1 border-b-2 border-gray-300">
					<Image
						source={images.HighwayCode}
						className="self-center h-[228px] aspect-[3/2] rounded-lg "
					/>
					<Button
						className="shadow-xl mt-1 my-2"
						onPress={() =>
							OpenAnything.Pdf(
								"https://www.inatter.gov.mz/wp-content/uploads/2020/06/CODIGO-DA-ESTRADA-REPUBLICA%C3%87%C3%83O.pdf"
							)
						}>
						<AntDesign name="arrowright" size={20} color="white" />
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};

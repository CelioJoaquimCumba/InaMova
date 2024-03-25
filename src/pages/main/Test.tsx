import React, { useEffect, useState } from "react";
import {  Image, ScrollView, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
	PremiumCard,
	ExploreCard,
	TopBar,
	DailyCard,
	StatCard,
} from "../../components/molecules";
import { useAuth } from "../../providers/UserProvider";
import { getQuizzes } from "../../api/quizApi";
import { Quiz } from "../../models/quiz.model";
import { useLoading } from "../../providers/loadingProvider";
import { Button } from "../../components/atoms/Button";
import { images } from "../../../constants";
import * as OpenAnything from "react-native-openanything";

export const Test = () => {
	const { user } = useAuth()
	const [tests, setTests] = useState<Quiz[]>([])
	const {setLoadingState} = useLoading()
	const [stats, setStats] = useState<{made: number, passed: number}>({made:0,passed:0})

	useEffect(() => {
		const storeQuizzes = async () => {
			const quizzes = await getQuizzes(setLoadingState)
			// console.log(quizzes)
			setTests(quizzes)
		}
		if( user && user.stats)
		setStats(user?.stats)
		storeQuizzes()
	},[])
	return (
		<View className="w-screen h-full bg-gray-50 pb-4">
			{/* topBar */}
			<TopBar username={user?.username} />

			<ScrollView className="w-full flex flex-column mt-2 h-auto px-4">
				{/* Daily Question */}
				<DailyCard />

				{/* Premium Card */}
				{/* <PremiumCard /> */}
				<View className="flex self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Seus testes
					</Text>
				</View>
				<ScrollView
					horizontal
					className="flex flex-row self-stretch"
					showsHorizontalScrollIndicator={false}
				>
					{tests.map((item) => (
						<ExploreCard
							id={item.id.toString()}
							image={item.thumbnail}
							title={item.title}
							locked={false}
							type={"test"}
							key={item.id}
						/>
					))}
				</ScrollView>
				<View className="flex flex-grow self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Seu progresso
					</Text>
				</View>
				<View className="flex flex-row self-stretch p-4 justify-between items-center shadow-sm border-b-2  border-gray-300 rounded-xl bg-white">
					<View className=" flex flex-row flex-grow justify-start flex-shrink">
						<View className="flex flex-row flex-grow justify-start items-center">
							<Ionicons
								name="calculator-outline"
								size={32}
								color={"#0D9488"}
							/>
							<Text className="text-base leading-6 font-bold">
								Taxa de aprovação
							</Text>
						</View>
					</View>
					<View className=" flex flex-row justify-end rounded-full border-2 border-teal-600 p-2">
						<Text>
							{stats.passed
								? Math.round(
										((stats.passed * 100) / stats.made) * 10
								  ) / 10
								: 0}
							%
						</Text>
					</View>
				</View>
				<View className="w-full flex flex-column items-center mt-2 ">
					<View className="flex flex-row">
						<StatCard
							title="Testes concluídos"
							value={stats.made}
							className="mr-1"
						/>
						<StatCard
							doubleChecked
							title="Quizes passados"
							value={stats.passed}
							className="ml-1"
						/>
					</View>
				</View>
				<View className="flex flex-row justify-between self-stretch">
					<Text className="text-base leading-6 font-bold text-gray-900">
						Código de estrada
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

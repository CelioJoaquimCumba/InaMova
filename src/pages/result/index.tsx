import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "src/router/stack";
import { images } from "../../../constants";
import { Main, Quiz } from "../../../constants/paths";
import { Button } from "../../components/atoms";
import { TopLogoContainer } from "../../components/molecules";
type Props = NativeStackScreenProps<RootStackParamList, "Result">;
export const Result = ({ route, navigation }: Props) => {
	const { score, percentageToPass, numberOfQuestions, quizId } = route.params;
	const percentage = (score / numberOfQuestions) * 100;
	const passed = percentage >= percentageToPass;
	console.log(percentage, score, numberOfQuestions, passed);
	const textColor = passed ? "text-teal-600" : "text-red-500";

	return (
		<View className="flex pt-8 w-full h-full justify-center items-center">
			{/* header */}
			<TopLogoContainer LeftSide="Logo" RightSide="X" />
			{/* main */}
			<View className="flex flex-col w-full flex-grow self-stretch justify-center items-center space-y-2 text-center px-4">
				<Text className="text-black leading-7 font-bold text-2xl">
					{passed ? "Parabens🥳" : "Tente de novo"}
				</Text>
				<Text className=" text-base leading-6 font-normal text-center">
					{passed
						? ""
						: "Não se preocupe, você só precisa praticar um pouco mais"}
				</Text>
				<View className="gap-2 p-2 border border-gray-200 rounded-md">
					<Text>Você pontuou: </Text>
					<Text
						className={`font-bold text-2xl ${textColor} text-center`}
					>
						{`${score}/${numberOfQuestions}(${percentage}%)`}
					</Text>
					<Image source={passed ? images.Passed : images.Failed} />
					<View className="flex flex-row justify-between wfu">
						<Button className=" bg-white">
							<Text
								className="font-semibold"
								onPress={() => navigation.navigate(Main)}
							>
								Voltar para a página inicial
							</Text>
						</Button>
						<Button
							className=""
							onPress={() =>
								navigation.reset({
									index: 0,
									routes: [
										{ name: Main },
										{ name: Quiz, params: { id: quizId } },
									],
								})
							}
						>
							<Text className="text-white">Tente de novo</Text>
						</Button>
					</View>
				</View>
			</View>
		</View>
	);
};

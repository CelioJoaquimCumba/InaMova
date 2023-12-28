import React from "react";
import { Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Button } from "../../components/atoms/Button";
import Carousel from "../../components/organisms/Carrousel";
import { slides } from "../../../constants/consts";
import { Slide } from "./Slide";
import { images } from "../../../constants";

import { RootStackParamList } from "src/router/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Register as RegisterPath } from "../../../constants/paths";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
export const SplashScreen = ({ navigation, route }: Props) => {
	const imagens = [
		images.CarDriving,
		images.GirlWithComputer,
		images.GirlWithCreditCard,
	];
	const onClickActions = [
		() => {},
		() => {},
		() => navigation.navigate(RegisterPath),
	];
	return (
		<View className="flex w-full h-full justify-center py-16">
			<View className="flex flex-row justify-end px-4">
				<Button
					variant={"link"}
					className="w-24"
					onPress={() => navigation.navigate(RegisterPath)}>
					<Text className="text-teal-800 text-base leading-6 font-normal">
						Skip
					</Text>
					<Entypo name="chevron-right" size={20} color={"teal"} />
				</Button>
			</View>
			<Carousel
				items={slides.map((slide) => (
					<Slide
						imageSrc={imagens[slide.index]}
						title={slide.title}
						bodyText={slide.bodyText}
						key={slide.title}
						button={slide.button}
						onClick={onClickActions[slide.index]}
					/>
				))}
			/>
			{/* <Carousel items={[<FirstSlide/>, <SecondSlide/>, <ThirdSlide onClick={() => navigation.navigate(RegisterPath)}/>]}/> */}
		</View>
	);
};

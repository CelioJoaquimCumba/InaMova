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
import { TopLogoContainer } from "../../components/molecules";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
export const SplashScreen = ({ navigation, route }: Props) => {
	const onClickActions = [
		() => {},
		() => {},
		() => navigation.navigate(RegisterPath),
	];
	return (
		<View className="flex w-full h-full justify-center py-16">
			<TopLogoContainer LeftSide="" RightSide="GSkip"/>
			<Carousel
				items={slides.map((slide) => (
					<Slide
						imageSrc={slide.img}
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

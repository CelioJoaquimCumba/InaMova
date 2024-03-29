import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { icons } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { FaqQuestion } from "../../components/atoms";
import { TopLogoContainer } from "../../components/molecules";
import { faq } from "../../../constants/consts";

type Props = NativeStackScreenProps<RootStackParamList, "HelpSupport">;
export const HelpSupport = ({ navigation }: Props) => {
	return (
		<View className="flex py-8 bg-gray-50 flex-grow self-stretch h-screen">
			<TopLogoContainer LeftSide="Logo" RightSide="X" />

			<ScrollView
				className="w-full h-auto flex flex-col space-y-2 px-8 mt-2 bg-gray-50"
				showsVerticalScrollIndicator={false}>
				<Text className="text-xl font-semibold leading-7">
					Wew’re here to help you with anything and everthing on Inamova
				</Text>
				<Text className="text-base leading-5 font-normal text-gray-600">
					Welcome to Inamova, your starting point for driving success! Whether
					you have test questions, need lesson assistance, or seek learning
					guidance, we've got you covered at every turn!
				</Text>

				{/* FAQ */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Frequently Asked Questions
				</Text>
				<View className="flex flex-col items-start self-stretch">
					{faq.map((item, index) => (
						<FaqQuestion
							key={item.id}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</View>
				{/* Contact Us */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Contact Us
				</Text>
				<Text className="text-base leading-5 font-normal text-gray-600">
					If you have any inquiries, get in touch with us. We’ll be happy to
					help you.
				</Text>
				<View className="flex flex-col items-start space-y-2">
					{/* phone */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="phone" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Phone
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								You can call, text or whatsapp us on below numbers.{" "}
							</Text>
						</View>
						<Text className="text-base leading-6 font-medium text-teal-900">
							+258 84 938 3897
						</Text>
					</View>
					{/* email */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="mail" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Email
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								We respond in within a week
							</Text>
						</View>
						<Text className="text-base leading-6 font-medium text-teal-900">
							wakandians@gmail.com
						</Text>
					</View>
					{/* social media */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="users" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Socials
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								Follow us on our socials to get notified with updates and
								exciting offers.
							</Text>
						</View>
						<View className="flex flex-row flex-wrap self-stretch space-x-2">
							{[
								<Feather name="facebook" size={24} color="white" />,
								<Feather name="instagram" size={24} color="white" />,
								<Feather name="youtube" size={24} color="white" />,
								<Feather name="linkedin" size={24} color="white" />,
							].map((item, index) => (
								<View
									key={index}
									className="flex flex-row p-1 items-start rounded-full bg-teal-600">
									{item}
								</View>
							))}
						</View>
					</View>
				</View>
				{/* About us */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					About Inamova
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					At Inamova, we are dedicated to revolutionizing the driving education
					experience. Our mission is to simplify and optimize the learning
					process, equipping students with the essential skills needed to excel
					as responsible drivers.
				</Text>

				{/* Our Founders */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Our Founders
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					Inamova was brought to life by a dynamic team of three informatic
					engineering students from ISUTC—Celio Cumba, Martins D'uamba, and
					Claudio Tomas. United by a shared vision, we set out to create an app
					that goes beyond conventional driving education, blending efficiency
					with effectiveness.
				</Text>

				{/* Our Vision */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Our Vision
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					Driven by a passion for innovation, Inamova aims to be a catalyst for
					positive change in driver training. We believe that by combining
					technology and education, we can empower individuals to navigate the
					roads confidently and responsibly.
				</Text>

				{/* Join Us on the Road to Driving Success */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Join Us on the Road to Driving Success
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					Embark on your driving journey with Inamova, where expertise meets
					innovation. Trust us to guide you towards becoming a skilled and
					conscientious driver.
				</Text>
			</ScrollView>
		</View>
	);
};

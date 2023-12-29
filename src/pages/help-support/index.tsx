import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { icons } from "../../../constants";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { FaqQuestion } from "../../components/atoms";

const faq = [
  {
    id: 1,
    question: "What is Inamova?",
    answer: "Inamova is an innovative driving education app designed to simplify the learning process and equip students with essential skills to become responsible drivers."
  },
  {
    id: 2,
    question: "What methods of payment does Inamova support?",
    answer: "Inamova currently supports a variety of payment methods, including credit/debit cards and popular digital wallets. We strive to provide convenient options for our users."
  },
  {
    id: 3,
    question: "What are the benefits of Inamova?",
    answer: "Inamova offers a range of benefits, including interactive driving tests, comprehensive lessons, and personalized learning experiences. Our app is designed to make the journey to obtaining a driver's license efficient, effective, and enjoyable."
  },
  {
    id: 4,
    question: "Are the tests in Inamova similar to those of Inatter (the examining entity)?",
    answer: "Inamova's tests are designed to simulate real-world scenarios and assess your driving knowledge. While they may cover similar topics, Inamova's tests are tailored to provide a unique and comprehensive learning experience."
  },
  // Feel free to add more questions and answers as needed
];



type Props = NativeStackScreenProps<RootStackParamList, 'HelpSupport'>
export const HelpSupport = ({navigation}:Props) => {
	return (
		<View className="flex pt-8 bg-gray-50 h-full">
			<View className="flex flex-row px-8 py-3 justify-between items-center self-stretch">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>
                <Feather onPress={() => navigation.goBack()} name="x" size={24} color="black" />
			</View>
			<ScrollView className="flex flex-col self-stretch flex-grow px-8 pt-2  space-y-2 bg-gray-50">
				<Text className="text-xl font-semibold leading-7">
					Wew’re here to help you with anything and everthing on Inamova
				</Text>
				<Text className="text-base leading-6 font-normal text-gray-600">
					Welcome to Inamova, your starting point for driving success! Whether you have test questions, need lesson assistance, or seek learning guidance, we've got you covered at every turn!
				</Text>

				<Text className="text-lg leading-7 font-medium text-teal-900">
					Frequently Asked Questions
				</Text>
				<View className="flex flex-col items-start self-stretch">
					{faq.map((item, index) => (
						<FaqQuestion key={item.id} question={item.question} answer={item.answer}/>
					))}

				</View>
				<View className=" w-full p-2 rounded border border-gray-200">
					<Text className="text-teal-600 font-medium text-lg text-center">
						Contact
					</Text>
					<View className="gap-3 p-4">
						<Text className="font-semibold text-gray-600">
							Phone/Whatsapp: 849383897
						</Text>
						<Text className="font-semibold text-gray-600">
							Email: celio.joaquim.cumba@gmail.com
						</Text>
					</View>
				</View>
				<View className=" w-full p-2 rounded border border-gray-200">
					<Text className="text-teal-600 font-medium text-lg text-center">
						About us
					</Text>
					<View className="gap-3 p-4">
						<Text className="font-semibold text-gray-600 text-justify">
							Unlock your path to a driver's license with Inamova,
							your go-to app for mastering the driving test. We
							offer a seamless blend of interactive lessons,
							realistic simulations, and expert tips to ensure
							you're not just ready but confident on the road
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

/**
 * <View className="flex p-8 w-full h-full justify-center items-center">
			
			<View className="flex w-full flex-row items-center justify-between border">
				
				<Image source={icons.x} />
			</View>
			
			<View className="flex flex-col w-full flex-grow justify-start py-4 items-center space-y-2 border">
				<Text className="text-xl font-medium text-left w-full">
					We are here to help
				</Text>
				<View className=" w-full p-2 rounded-md border border-gray-100">
					<Text className="text-teal-600 font-medium text-lg text-center">
						Contact
					</Text>
					<View className="gap-3 p-4">
						<Text className="font-semibold text-gray-600">
							Phone/Whatsapp: 849383897
						</Text>
						<Text className="font-semibold text-gray-600">
							Email: celio.joaquim.cumba@gmail.com
						</Text>
					</View>
				</View>
				<View className="w-full p-2 rounded-md border border-gray-100">
					<Text className="text-teal-600 font-medium text-lg text-center">
						About us
					</Text>
					<Text className="font-semibold text-gray-600 text-justify p-3">
						Unlock your path to a driver's license with Inamova,
						your go-to app for mastering the driving test. We offer
						a seamless blend of interactive lessons, realistic
						simulations, and expert tips to ensure you're not just
						ready but confident on the road
					</Text>
				</View>
			</View>
		</View>
 */

import { images, icons } from "../../../constants"
import React from "react"
import { View, Image, Text } from "react-native"
import { Button } from "../atoms"
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"
import { Quiz } from "../../../constants/paths"
import { useLoading } from "../../providers/loadingProvider"

interface DailyCardProps{
  id:string;
}
export const DailyCard = () => {
  // export const DailyCard = ({id}:DailyCardProps) => {
	const { setLoadingState } = useLoading();
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const handlePress = () => {
      setLoadingState(true)
      navigation.navigate(Quiz,{id:"b470bd1d-4b89-4e61-b7cc-2478ccefb9af"})
    }
    return (
		<View className="flex flex-row justify-center items-center self-stretch border-b-2 p-4 border-gray-300 rounded-xl bg-white space-x-2">
			<View className="flex flex-grow">
				<Image
					source={images.GirlStudying}
					className="h-36 aspect-square"
				/>
			</View>
			<View className="flex-grow flex flex-col flex-shrink justify-end self-stretch space-x-2">
				<Text className="text-base leading-6 font-bold text-gray-900">
					Perguntas diárias para se preparar para o exame
					{/* {id} */}
				</Text>
				<View className="flex flex-row-reverse ">
					<Button className="rounded-full" size={"icon"} onPress={handlePress}>
						<AntDesign name="arrowright" size={20} color="white" />
					</Button>
				</View>
			</View>
		</View>
	);
}
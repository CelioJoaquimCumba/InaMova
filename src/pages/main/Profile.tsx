import { Image, Text, View } from "react-native";
import React from "react";
import {
  PremiumCard,
  TopBar,
} from "../../components/molecules";
import { images } from "../../../constants";
import { Card } from "../../components/atoms/Card";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { useAuth } from "../../providers/UserProvider";
import { removeToken } from "../../utils/TokenManager";
import { removeUsername } from "../../utils/UserManager";

export const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { user, setUser } = useAuth()

  const handleLogOut = async () => {
    await removeUsername()
    await removeToken()
    setUser(null)
  }
  return (
		<View className="w-screen h-screen  bg-gray-50">
			{/* topBar */}
			<TopBar username={user?.username} color="true" />

			{/* acquirePremium */}

			<View className="flex flex-col justify-center items-center p-4 space-y-2 pt-0">
				{/* <PremiumCard /> */}
				<Image
					source={images.BlackCarCones}
					className="h-24 w-24 my-2 rounded-full"
				/>
				<Text className="text-base leading-6 font-bold text-gray-900">
					{user?.username}
				</Text>
				{/* Payment and subscription */}
				<Card
					className="flex flex-row p-2 items-center space-x-3 self-stretch"
					onPress={() => navigation.navigate("SubscriptionPlan")}
				>
					<View className="flex p-2 bg-teal-100 rounded-full">
						<FontAwesome name="money" size={24} color={"#000000"} />
					</View>
					<Text className="text-base leading-6 font-normal text-gray-900">
						Pagamento e Assinatura
					</Text>
				</Card>
				{/* Help and support */}
				<Card
					className="flex flex-row p-2 items-center space-x-3 self-stretch"
					onPress={() => navigation.navigate("HelpSupport")}
				>
					<View className="flex p-2 bg-blue-200 rounded-full">
						<Feather
							name="help-circle"
							size={24}
							color={"#000000"}
						/>
					</View>
					<Text className="text-base leading-6 font-normal text-gray-900">
						Ajuda e suporte
					</Text>
				</Card>
				{/* Logout */}
				<Card
					className="flex flex-row p-2 items-center space-x-3 self-stretch"
					onPress={handleLogOut}
				>
					<View className="flex p-2 bg-red-200 rounded-full">
						<AntDesign name="logout" size={24} color={"#000000"} />
					</View>
					<Text className="text-base leading-6 font-normal text-gray-900">
						Sair
					</Text>
				</Card>
			</View>
		</View>
  );
};

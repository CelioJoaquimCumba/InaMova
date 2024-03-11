import React from "react"
import { Modal, Text, View } from "react-native"
import { Button } from "../atoms"
import { Card } from "../atoms/Card"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"

type Props = {
    isVisible :boolean
    toggleModal : () => void
}
export const ModalGetPremium = ({isVisible, toggleModal}:Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={isVisible}
			onRequestClose={toggleModal}
		>
			<View
				className="flex p-8 h-full w-full items-center justify-center"
				style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
			>
				<Card className="flex flex-col items-start space-y-4 self-stretch p-6">
					<View className="flex flex-col items-start space-y-2 self-stretch">
						<Text className="text-lg leading-7 font-medium">
							Atualize para desbloquear{" "}
							<Text className="text-teal-600">Premium</Text>{" "}
							Recursos e testes de acesso!
						</Text>
						<Text className="text-sm leading-5 font-normal text-gray-500">
							Parece que o seu plano atual não suporta o nosso
							teste de direção exclusivo. Atualize para nosso
							premium plano de assinatura para desfrutar de uma
							ampla variedade de questionários e desbloquear
							recursos adicionais. Eleve o seu experiência de
							aprendizado e atualize hoje mesmo para obter acesso
							ao nosso conteúdo envolvente!
						</Text>
					</View>
					<View className="flex flex-row justify-between items-center self-stretch">
						<Button variant={"outline"} onPress={toggleModal}>
							<Text className="text-gray-900">Cancelar</Text>
						</Button>
						<Button
							onPress={() =>
								navigation.navigate("SubscriptionPlan")
							}
						>
							<Text className="text-white">Actualizar plano</Text>
						</Button>
					</View>
				</Card>
			</View>
		</Modal>
	);
}
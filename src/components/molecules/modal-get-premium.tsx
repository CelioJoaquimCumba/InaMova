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
            <View className="flex p-8 h-full w-full items-center justify-center" style={{backgroundColor:"rgba(0,0,0,0.8)"}}>
                <Card className="flex flex-col items-start space-y-4 self-stretch p-6">
                    <View className="flex flex-col items-start space-y-2 self-stretch">
                        <Text className="text-lg leading-7 font-medium">Upgrade to Unlock <Text className="text-teal-600">Premium</Text> Features and Access Quizzes!</Text>
                        <Text className="text-sm leading-5 font-normal text-gray-500">It seems like your current plan doesn't support our exclusive driving quiz. Upgrade to our premium subscription plan to enjoy a wide range of quizzes and unlock additional features. Elevate your learning experience and upgrade today for full access to our engaging content!</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center self-stretch">
                        <Button variant={"outline"} onPress={toggleModal}><Text className="text-gray-900">Cancel</Text></Button>
                        <Button onPress={() => navigation.navigate("SubscriptionPlan")}><Text className="text-white">Upgrade Plan</Text></Button>
                    </View>
                </Card>
            </View>
        </Modal>
    )
}
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"
import { RootStackParamList } from "src/router/stack"

type Props = NativeStackScreenProps<RootStackParamList, 'SubscriptionPlan'>
export const SubscriptionPlan = () => {
    return (
        <View>
            <Text>Subscription Plan</Text>
        </View>
    )
}
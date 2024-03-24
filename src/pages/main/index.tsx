import {  View } from "react-native"
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Learn } from "./Learn";
import { Test } from "./Test";
import { Profile } from "./Profile";
import { Feather, Octicons, Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>

const Tab = createBottomTabNavigator()
export const Main = ({navigation, route}:Props) => {
    

    return(
        <View className="flex w-full h-full">
            <Tab.Navigator initialRouteName="Test" screenOptions={{ tabBarStyle: {paddingBottom: 4, height: 60},headerShown: false, tabBarActiveTintColor: "#14B8A6", tabBarInactiveTintColor: "#6B7280"}}>
                {/* <Tab.Screen name="Learn" component={Learn} options={{tabBarLabel: "Lições", tabBarIcon: ({color}) => <Feather name="book-open" size={24} color={color}/>}} /> */}
                <Tab.Screen name="Test" component={Test} options={{tabBarLabel: "Teste", tabBarLabelStyle: {fontSize: 16}, tabBarIcon: ({color}) => <Octicons name="pencil" size={24} color={color}/>}} />
                <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: "Perfil", tabBarLabelStyle: {fontSize: 16}, tabBarIcon: ({color}) => <Ionicons name="person-outline" size={24} color={color}/>}}/>
            </Tab.Navigator>
        </View>
    )
}

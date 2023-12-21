import { Text, View } from "react-native"
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Login } from "../login";
import { Register } from "../register";
import { Learn } from "./Learn";
import { Test } from "./Test";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator()
export const Main = () => {
    return(
        <View className="flex w-full h-full">
            <Test/>
            <Tab.Navigator initialRouteName="Test">
                <Tab.Screen name="Learn" component={Learn} />
                <Tab.Screen name="Test" component={Test} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </View>
    )
}

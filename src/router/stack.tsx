import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { Login, Lecture, Main, Quiz, Recover, Register, SplashScreen, Result, ChangePassword, SubscriptionPlan } from "../pages";

export type RootStackParamList = {
    ChangePassword: undefined
    Learn: undefined;
    Lecture: undefined;
    Login: undefined;
    Register: undefined;
    Main: undefined;
    Quiz: undefined;
    Recover: undefined;
    Result: {score: number, percentageToPass: number, numberOfQuestions: number};
    SplashScreen: undefined;
    SubscriptionPlan: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* User logged */}
            <Stack.Screen name="Lecture" component={Lecture} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Quiz" component={Quiz}/>
            <Stack.Screen name="Result" component={Result}/>
            <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan}/>
            {/* User not logged */}
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recover" component={Recover}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />


        </Stack.Navigator>
    )
}
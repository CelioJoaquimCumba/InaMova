import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { Article,Login, Lecture, Main, Quiz, Recover, Register, SplashScreen, Result, ChangePassword, SubscriptionPlan, HelpSupport } from "../pages";

export type RootStackParamList = {
    ChangePassword: undefined
    Login: undefined;
    Register: undefined;
    Main: undefined;
    Quiz: undefined;
    Recover: undefined;
    Result: {score: number, percentageToPass: number, numberOfQuestions: number};
    SplashScreen: undefined;
    SubscriptionPlan: undefined
    HelpSupport: undefined
    Article:undefined
    Lecture: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainStack = () => {
    const user = true
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* User logged */}
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Quiz" component={Quiz}/>
            <Stack.Screen name="Result" component={Result}/>
            <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan}/>
            <Stack.Screen name="HelpSupport" component={HelpSupport}/>
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Lecture" component={Lecture} />
            {/* User not logged */}
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recover" component={Recover}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    )
}
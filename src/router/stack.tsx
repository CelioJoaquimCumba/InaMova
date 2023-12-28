import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { Login, Main, Quiz, Recover, Register, SplashScreen, Result, ChangePassword } from "../pages";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Quiz: undefined;
    Learn: undefined;
    Recover: undefined;
    Result: {score: number, percentageToPass: number, numberOfQuestions: number};
    SplashScreen: undefined;
    Main: undefined;
    ChangePassword: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* User logged */}
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Quiz" component={Quiz}/>
            <Stack.Screen name="Result" component={Result}/>
            {/* User not logged */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Recover" component={Recover}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>


        </Stack.Navigator>
    )
}
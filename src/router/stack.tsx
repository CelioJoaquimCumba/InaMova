import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import { Login, Main, Quiz, Recover, Register, SplashScreen, Result } from "../pages";
const Stack = createStackNavigator()

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register}/>
            <Stack.Screen name="quiz" component={Quiz}/>
            <Stack.Screen name="recover" component={Recover}/>
            <Stack.Screen name="result" component={Result}/>
            <Stack.Screen name="splash-screen" component={SplashScreen} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    )
}
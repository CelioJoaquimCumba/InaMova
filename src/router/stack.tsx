import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react"
import { Article,Login, Lecture, Main, Quiz, Recover, Register, SplashScreen, Result, ChangePassword, SubscriptionPlan, HelpSupport } from "../pages";
import { useAuth } from "../providers/UserProvider";
import { getToken, validateToken } from "../utils/TokenManager";
import { getUsername } from "../utils/UserNameManager";

export type RootStackParamList = {
    Article:undefined
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
    HelpSupport: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()


export const MainStack = () => {
    const { user, setUser } = useAuth()
    const [token, setToken] = useState<string>()

    const collectToken = async () => {
        const tokenResponse = await getToken()
        if(!tokenResponse) return null
        setToken(tokenResponse)
        return token

    }
    useEffect(() => {
        collectToken()
    }, [])

    if (token
        && typeof(token) === "string" 
        && validateToken(token)
                .then((token) => (token))
                .catch((error) => console.log(error)) !== null) {

        getUsername().then((username) =>
        {
            if(username) setUser({username})
        }
            ).catch((error) => console.log(error))
    } else {
        setUser(null)
    }
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            { user ?
                // User logged
                (<>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="Quiz" component={Quiz}/>
                    <Stack.Screen name="Result" component={Result}/>
                    <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan}/>
                    <Stack.Screen name="HelpSupport" component={HelpSupport}/>
                    <Stack.Screen name="Article" component={Article} />
                    <Stack.Screen name="Lecture" component={Lecture} />
                </>)
            :
                //User not logged
                (<>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register}/>
                    <Stack.Screen name="Recover" component={Recover}/>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword}/>
                </>)
            }
        </Stack.Navigator>
    )
}
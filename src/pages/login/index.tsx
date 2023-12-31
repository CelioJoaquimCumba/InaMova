import { View, Text, Image, TextInput } from "react-native"
import React from 'react'
import { icons } from "../../../constants"
import { Button,Input } from "../../components/atoms"
import { useFormik } from "formik"
import { LoginValidation } from "../../form-validations/login-validation"
import { RootStackParamList } from "src/router/stack"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>
export const Login = ({navigation, route}:Props) => {
    const formik = useFormik(LoginValidation())
    return(
        <View className="flex p-8 w-full h-full justify-center items-center ">
            {/* header */}
            <View className="flex w-full flex-row items-center justify-between">
                <View className="flex flex-row items-center space-x-2">
                    <Image source={icons.secondaryIMlogo} className="w-8 h-8" />
                    <Text className="text-lg leading-7 font-bold text-teal-900">InaMova</Text>
                </View>

                {/* <Button variant={"outline"}><Text className="text-black">Skip</Text></Button> */}
            </View>
            {/* main */}
            <View className="flex flex-col w-full flex-grow justify-center items-center space-y-2">
                <Text className="text-teal-900 text-lg leading-7 font-bold w-full">
                    Login to account
                </Text>
                <Text className="text-teal-900 text-base leading-6 font-normal">
                    Fill with your credentials for us to start where we left.
                </Text>
                <Input label="Email" placeholder="celio.joaquim.cumba@gmail.com" onChangeText={formik.handleChange('email')} value={formik.values.email}  isInvalid={formik.touched.email && formik.errors.email ? true : false} hint={formik.errors.email}/>
                <Input type="password" label="Password" placeholder="********" onChangeText={formik.handleChange('password')} value={formik.values.password}  isInvalid={formik.touched.password && formik.errors.password ? true : false} hint={formik.errors.password}/>
                <View className="flex w-full flex-row justify-end ">
                    <Text className="text-sm leading-6 font-medium text-teal-900 underline" onPress={() => navigation.navigate('Recover')}>
                        Forgot Password?
                    </Text>
                </View>
                <Button className="w-full" onPress={formik.handleSubmit}>
                    <Text className="text-white">Login</Text>
                </Button>
                <View className="flex flex-row w-full space-x-2 justify-center items-center ">
                    <Text className="text-gray-500 text-sm leading-5 font-medium ">Don’t have an account?</Text>
                    <Text className="text-teal-900 text-sm leading-5 font-medium underline" onPress={() => navigation.navigate('Register')}>Register</Text>
                </View>

            </View>
        </View>
    )
}
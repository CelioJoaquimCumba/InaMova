import { View, Text, Image, TextInput } from "react-native"
import React from 'react'
import { icons } from "../../../constants"
import { Button } from "../../components/atoms/Button"
import { Input } from "../../components/atoms/Input"
import { useFormik } from "formik"
import { RegisterValidation } from "../../form-validations"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>
export const Register = ({navigation, route}:Props) => {
    const formik = useFormik(RegisterValidation())
    return(
        <View className="flex p-8 w-full h-full justify-center items-center">
            {/* header */}
            <View className="flex w-full flex-row items-center justify-between">
                <View className="flex flex-row items-center space-x-2">
                    <Image source={icons.secondaryIMlogo} className="w-8 h-8" />
                    <Text className="text-lg leading-7 font-bold text-teal-900">InaMova</Text>
                </View>

                {/* <Button variant={"outline"}><Text className="text-black">Skip</Text></Button> */}
            </View>
            <View className="flex flex-col w-full flex-grow justify-center items-center space-y-2">
                <Text className="text-teal-900 text-lg leading-7 font-bold w-full">
                    Create an account
                </Text>
                <Text className="text-teal-900 text-base leading-6 font-normal">
                    Be able to store your score, your progress to help us help you.
                </Text>
                <Input  label="Name"  placeholder="Celio Cumba" onChangeText={formik.handleChange('name')} value={formik.values.name}  isInvalid={formik.touched.name && formik.errors.name ? true : false} hint={formik.errors.name}/>
                <Input  label="Email" placeholder="celio.joaquim.cumba@gmail.com" onChangeText={formik.handleChange('email')} value={formik.values.email}  isInvalid={formik.touched.email && formik.errors.email ? true : false} hint={formik.errors.email}/>
                <Input  label="Phone Number" placeholder="849383897" onChangeText={formik.handleChange('phone')} value={formik.values.phone}  isInvalid={formik.touched.phone && formik.errors.phone ? true : false} hint={formik.errors.phone}/>
                <Input type="password"  label="Password" placeholder="********" onChangeText={formik.handleChange('password')} value={formik.values.password}  isInvalid={formik.touched.password && formik.errors.password ? true : false} hint={formik.errors.password}/>

                <Button className="w-full" onPress={formik.handleSubmit}>
                    <Text className="text-white">Register</Text>
                </Button>
                <View className="flex flex-row w-full space-x-2 justify-center items-center ">
                    <Text className="text-gray-500 text-sm leading-5 font-medium "> Already have an account?</Text>
                    <Text className="text-teal-900 text-sm leading-5 font-medium underline" onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>

            </View>
        </View>
    )
}
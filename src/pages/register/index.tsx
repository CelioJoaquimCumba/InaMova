import { View, Text, Image, TextInput } from "react-native"
import React from 'react'
import { icons } from "../../../constants"
import { Button } from "../../components/atoms/Button"
import { Input } from "../../components/atoms/Input"

export const Register = () => {
    return(
        <View className="flex p-8 w-full h-full justify-center items-center">
            {/* header */}
            <View className="flex w-full flex-row items-center justify-between">
                <View className="flex flex-row items-center space-x-2">
                    <Image source={icons.secondaryIMlogo} className="w-8 h-8" />
                    <Text className="text-lg leading-7 font-bold text-teal-900">InaMova</Text>
                </View>

                <Button variant={"outline"}><Text className="text-black">Skip</Text></Button>
            </View>
            <View className="flex flex-col w-full flex-grow justify-center items-center space-y-2">
                <Text className="text-teal-900 text-lg leading-7 font-bold w-full">
                    Create an account
                </Text>
                <Text className="text-teal-900 text-base leading-6 font-normal">
                    Be able to store your score, your progress to help us help you.
                </Text>
                <Input type="email" label="Email" placeholder="celio.joaquim.cumba@gmail.com" isInvalid={false} hint="Please enter a valid email"/>
                <Input type="number" label="Phone Number" placeholder="849383897" isInvalid={false} hint="Please enter a valid phone number"/>
                <Input type="password" label="Password" placeholder="********" isInvalid={false} hint="Please enter a valid password"/>
                <Button className="w-full">
                    <Text className="text-white">Register</Text>
                </Button>
                <View className="flex flex-row w-full space-x-2 justify-center items-center ">
                    <Text className="text-gray-500 text-sm leading-5 font-medium "> Already have an account?</Text>
                    <Text className="text-teal-900 text-sm leading-5 font-medium underline">Login</Text>
                </View>

            </View>
        </View>
    )
}
import { View, Text, Image, TextInput } from "react-native"
import React, { useState } from 'react'
import { icons, images } from "../../../constants"
import { Button } from "../../components/atoms/Button"
import { Input } from "../../components/atoms/Input"
import { useFormik } from "formik"
import { RegisterValidation } from "../../form-validations"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "src/router/stack"
import { useAuth } from "../../providers/UserProvider"
import { register } from "../../api/authApi"
import { storeToken, getToken } from "../../utils/TokenManager"
import { storeUserId, storeUsername } from "../../utils/UserManager"
import { TopLogoContainer } from "../../components/molecules"

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>
export const Register = ({navigation, route}:Props) => {
    const { setUser } = useAuth()
    const [ errorMessage, setErrorMessage ]  = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    let handleSubmit = async () => {
        try {
            setErrorMessage("")
            setLoading(true)
            const {username, token, id} = await register(formik.values.name,formik.values.email, formik.values.password, formik.values.phone)
            if (!username || !token || !id) return
            await storeToken(token)
            await storeUsername(username)
            await storeUserId(id)
            setUser({username, id})
        } catch (error) {
            const message = error.response.data.message
            console.log(message)
            setErrorMessage(message)
        } finally {
            setLoading(false)
        }
    }
    const formik = useFormik(RegisterValidation({onSubmit: handleSubmit}))
    return(
        <View className="flex py-8 w-full h-full justify-center items-center">
            {/* header */}
            <TopLogoContainer LeftSide="Logo" />
            <View className="flex flex-col w-full flex-grow justify-center items-center space-y-2 px-8">
                <Text className="text-teal-900 text-lg leading-7 font-bold w-full">
                    Create an account
                </Text>
                <Text className="text-teal-900 text-base leading-6 font-normal">
                    Be able to store your score, your progress to help us help you.
                </Text>
                <Input  label="Name"  placeholder="Celio Cumba" onChangeText={formik.handleChange('name')} value={formik.values.name}  isInvalid={formik.touched.name && formik.errors.name ? true : false} hint={formik.errors.name}/>
                <Input  label="Email" placeholder="wakandians@gmail.com" onChangeText={formik.handleChange('email')} value={formik.values.email}  isInvalid={formik.touched.email && formik.errors.email ? true : false} hint={formik.errors.email}/>
                <Input  label="Phone Number" placeholder="841235679" onChangeText={formik.handleChange('phone')} value={formik.values.phone}  isInvalid={formik.touched.phone && formik.errors.phone ? true : false} hint={formik.errors.phone}/>
                <Input type="password"  label="Password" placeholder="********" onChangeText={formik.handleChange('password')} value={formik.values.password}  isInvalid={formik.touched.password && formik.errors.password ? true : false} hint={formik.errors.password}/>

                <Button className="w-full" onPress={formik.handleSubmit}>
                    <Text className="text-white">Register</Text>
                    {loading && <Image source={images.Spinner} className="h-4 w-4" />}
                </Button>
                <View className="flex flex-row w-full space-x-2 justify-center items-center ">
                    <Text className="text-gray-500 text-sm leading-5 font-medium "> Already have an account?</Text>
                    <Text className="text-teal-900 text-sm leading-5 font-medium underline" onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>

            </View>
        </View>
    )
}
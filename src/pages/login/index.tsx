import { View, Text, Image, TextInput } from "react-native"
import React, { useState } from 'react'
import { icons, images } from "../../../constants"
import { Button,Input } from "../../components/atoms"
import { useFormik } from "formik"
import { LoginValidation } from "../../form-validations/login-validation"
import { RootStackParamList } from "src/router/stack"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useAuth } from "../../providers/UserProvider"
import { login } from "../../api/authApi"
import { storeToken, getToken } from "../../utils/TokenManager"
import { storeUserId, storeUsername } from "../../utils/UserManager"
import Toast from "react-native-root-toast"
import { TopLogoContainer } from "../../components/molecules"

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>
export const Login = ({navigation, route}:Props) => {
    const { setUser } = useAuth()
    const [ errorMessage, setErrorMessage ]  = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    let handleSubmit = async () => {
        try {
            setErrorMessage("")
            setLoading(true)
            const {username, token, id} = await login(formik.values.email, formik.values.password)
            if (!username || !token || !id) throw new Error("Invalid credentials")
            console.log("here")
            await storeToken(token)
            await storeUsername(username)
            await storeUserId(id)
            setUser({username, id})
            Toast.show("Voce esta logado", {
                duration: Toast.durations.LONG,
			});

        } catch (error) {
            const message = error.response.data.message
            console.log(message)
            setErrorMessage(message)
        } finally {
            setLoading(false)
        }
    }
    const formik = useFormik(LoginValidation({onSubmit: handleSubmit}))
    return (
		<View className="flex py-8 w-full h-full justify-center items-center ">
			{/* header */}
			<TopLogoContainer LeftSide="Logo" />
			{/* main */}
			<View className="flex flex-col w-full flex-grow justify-center items-start space-y-2 px-8">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Entrar
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal">
					Preencha com suas credenciais para começarmos de onde
					saímos.
				</Text>
				<Input
					label="Email"
					placeholder="Insira o seu email"
					onChangeText={formik.handleChange("email")}
					value={formik.values.email}
					isInvalid={
						formik.touched.email && formik.errors.email
							? true
							: false
					}
					hint={formik.errors.email}
				/>
				<Input
					type="password"
					label="Password"
					placeholder="Insira a sua palavra passe"
					onChangeText={formik.handleChange("password")}
					value={formik.values.password}
					isInvalid={
						formik.touched.password && formik.errors.password
							? true
							: false
					}
					hint={formik.errors.password}
				/>
				<View className="flex w-full flex-row justify-end ">
					<Text
						className="text-sm leading-6 font-medium text-teal-900 underline"
						onPress={() => navigation.navigate("Recover")}
					>
						Esqueceu-se da senha?
					</Text>
				</View>
				<Button
					className="w-full"
					disabled={loading}
					onPress={formik.handleSubmit}
				>
					<Text className="text-white">Entrar</Text>
					{loading && (
						<Image source={images.Spinner} className="h-4 w-4" />
					)}
				</Button>
				{errorMessage && (
					<Text className="text-red-500 text-sm text-normal leading-5">
						{errorMessage}
					</Text>
				)}
				<View className="flex flex-row w-full space-x-2 justify-center items-center ">
					<Text className="text-gray-500 text-sm leading-5 font-medium ">
						Não tem uma conta?
					</Text>
					<Text
						className="text-teal-900 text-sm leading-5 font-medium underline"
						onPress={() => navigation.navigate("Register")}
					>
						Registar
					</Text>
				</View>
			</View>
		</View>
	);
}
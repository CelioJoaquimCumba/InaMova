import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { icons, images } from "../../../constants";
import { Button, Input } from "../../components/atoms";
import { useFormik } from "formik";
import { RecoverPasswordValidation } from "../../form-validations/recover-password-validation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { TopLogoContainer } from "../../components/molecules";
import { forgotPassword } from "../../api/authApi";
import Toast from "react-native-root-toast";


type Props = NativeStackScreenProps<RootStackParamList, 'Recover'>
export const Recover = ({navigation, route}:Props) => {

	const [errorMessage, setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const handleSubmit = async () => {
		try {
			setLoading(true)
			const response = await forgotPassword(formik.values.email)
			Toast.show(response, {
				duration: Toast.durations.LONG,
			});
			setSuccess(true)
			navigation.navigate("RecoverCode", {email: formik.values.email})
		} catch(e) {
			const message = e.response.data.message
            console.log(message)
			setErrorMessage(message)
		} finally {
			setLoading(false)
		}
	}
	const formik = useFormik(RecoverPasswordValidation({onSubmit: handleSubmit}))


	return (
		<View className="flex py-8 w-full h-full justify-center items-center">
			<TopLogoContainer LeftSide="Logo" />
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2 px-8">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Recuperar senha
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal w-full">
					Preencha seu e-mail para que enviemos um link para alterar a
					sua senha
				</Text>
				<Input
					type="email"
					label="Email"
					placeholder="Insira seu e-mail"
					onChangeText={formik.handleChange("email")}
					value={formik.values.email}
					isInvalid={
						formik.touched.email && formik.errors.email
							? true
							: false
					}
					hint={formik.errors.email}
				/>
				<Button className="w-full" onPress={formik.handleSubmit}>
					<Text className="text-white">Enviar</Text>
					{loading && (
						<Image source={images.Spinner} className="h-4 w-4" />
					)}
				</Button>
				<Button
					className="w-full bg-white"
					onPress={() => navigation.goBack()}
				>
					<Text className="text-teal-900">Cancelar</Text>
				</Button>
				{errorMessage && (
					<Text className="text-red-500 text-sm text-normal leading-5">
						{errorMessage}
					</Text>
				)}

				<View className="w-full flex justify-center items-center self-stretch">
					{success && (
						<Text className="text-gray-500 text-sm italic text-normal leading-5">
							E-mail enviado para o seu e-mail. Verifique sua
							caixa de entrada
						</Text>
					)}
				</View>
			</View>
		</View>
	);
};

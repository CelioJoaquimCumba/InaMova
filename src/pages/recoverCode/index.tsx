import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { icons, images } from "../../../constants";
import { Button, Input } from "../../components/atoms";
import { useFormik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { TopLogoContainer } from "../../components/molecules";
import { checkPasswordToken } from "../../api/authApi";
import Toast from "react-native-root-toast";
import { RecoverCodedValidation } from "../../form-validations/recover-code-validation";


type Props = NativeStackScreenProps<RootStackParamList, 'RecoverCode'>
export const RecoverCode = ({navigation, route}:Props) => {

	const { email } = route.params;
	const [errorMessage, setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const handleSubmit = async () => {
		try {
			setLoading(true)
			const response = await checkPasswordToken(email, formik.values.code)
			Toast.show(response, {
				duration: Toast.durations.LONG,
			});
			navigation.navigate("ChangePassword", {email: email, token: formik.values.code})
			setSuccess(true)
		} catch(e) {
			const message = e.response.data.message
            console.log(message)
			setErrorMessage(message)
		} finally {
			setLoading(false)
		}
	}
	const formik = useFormik(RecoverCodedValidation({onSubmit: handleSubmit}))


	return (
		<View className="flex py-8 w-full h-full justify-center items-center">
			<TopLogoContainer LeftSide="Logo" />
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2 px-8">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Inserir código
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal w-full">
					Preencha o código que recebeu no seu email
				</Text>
				<Input
					type="text"
					label="Código "
					placeholder="Insere o código"
					onChangeText={formik.handleChange("code")}
					value={formik.values.code}
					isInvalid={
						formik.touched.code && formik.errors.code
							? true
							: false
					}
					hint={formik.errors.code}
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
					<Text className="text-teal-900">Editar Email</Text>
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

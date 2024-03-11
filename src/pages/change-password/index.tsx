import React, { useState } from "react";

import { View, Image, Text } from "react-native";
import { icons, images } from "../../../constants";
import { Button, Input } from "../../components/atoms";
import { useFormik } from "formik";
import { ChangePasswordValidation } from "../../form-validations/change-password-validation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { TopLogoContainer } from "../../components/molecules";
import { changePassword } from "../../api/authApi";
import Toast from "react-native-root-toast";

type Props = NativeStackScreenProps<RootStackParamList, "ChangePassword">;
export const ChangePassword = ({ route, navigation }: Props) => {
	const { email, token } = route.params;
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const handleSubmit = async () => {
		try {
			setLoading((true))
			await changePassword(email,formik.values.password, token);
			Toast.show("Senha modificada com sucesso", {
				duration: Toast.durations.LONG,
			});
			navigation.navigate("Login");
		} catch (e) {
			const message = e.response.data.message;
			console.log(message);
			setErrorMessage(message);
		} finally {
			setLoading(false)
		}
	};
	const formik = useFormik(
		ChangePasswordValidation({ onSubmit: handleSubmit })
	);
	return (
		<View className="flex py-8 w-full h-full justify-center items-center">
			<TopLogoContainer LeftSide="Logo"  />
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2 px-8">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Mudar senha
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal w-full">
					Insira a nova senha
				</Text>
				<Input
					type="password"
					label="Password"
					placeholder="********"
					onChangeText={formik.handleChange("password")}
					value={formik.values.password}
					isInvalid={
						formik.touched.password && formik.errors.password ? true : false
					}
					hint={formik.errors.password}
				/>
				<Input
					type="password"
					label="Confirme a senha"
					placeholder="********"
					onChangeText={formik.handleChange("passwordConfirmation")}
					value={formik.values.passwordConfirmation}
					isInvalid={
						formik.touched.passwordConfirmation &&
						formik.errors.passwordConfirmation
							? true
							: false
					}
					hint={formik.errors.passwordConfirmation}
				/>
				<Button className="w-full" onPress={formik.handleSubmit}>
					<Text className="text-white">Mudar senha</Text>
					{loading && <Image source={images.Spinner} className="h-4 w-4" />}
				</Button>
				{errorMessage && <Text className="text-red-500 text-sm text-normal leading-5">{errorMessage}</Text>}
				<Button className="w-full bg-white" onPress={() => navigation.navigate('Login')}>
					<Text className="text-teal-900">Cancelar</Text>
				</Button>
			</View>
		</View>
	);
};

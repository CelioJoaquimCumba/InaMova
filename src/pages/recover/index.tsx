import React from "react";
import { View, Image, Text } from "react-native";
import { icons } from "../../../constants";
import { Button, Input } from "../../components/atoms";
import { useFormik } from "formik";
import { RecoverPasswordValidation } from "../../form-validations/recover-password-validation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";


type Props = NativeStackScreenProps<RootStackParamList, 'Recover'>
export const Recover = ({navigation, route}:Props) => {
	const formik = useFormik(RecoverPasswordValidation())


	return (
		<View className="flex p-8 w-full h-full justify-center items-center">
			<View className="flex w-full flex-row items-center justify-between">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>

				{/* <Button variant={"outline"}>
					<Text className="text-black">Skip</Text>
				</Button> */}
			</View>
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Recover Password
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal w-full">
					Fill your email for us to send a link to change your
					password
				</Text>
				<Input
					type="email"
					label="Email"
					placeholder="celio.joaquim.cumba@gmail.com"
					onChangeText={formik.handleChange('email')}
					value={formik.values.email}
					isInvalid={formik.touched.email && formik.errors.email ? true : false}
					hint={formik.errors.email}
				/>
				<Button className="w-full" onPress={formik.handleSubmit}>
					<Text className="text-white">Send</Text>
				</Button>
				<Button className="w-full bg-white" onPress={() => navigation.goBack()}>
					<Text className="text-teal-900">Cancel</Text>
				</Button>
			</View>
		</View>
	);
};

import React from "react";

import { View, Image, Text } from "react-native";
import { icons } from "../../../constants";
import { Button, Input } from "../../components/atoms";
import { useFormik } from "formik";
import { ChangePasswordValidation } from "../../form-validations/change-password-validation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";

type Props = NativeStackScreenProps<RootStackParamList, 'ChangePassword'>
export const ChangePassword = ({route, navigation}:Props) => {
	const formik = useFormik(ChangePasswordValidation())
	return (
		<View className="flex p-8 w-full h-full justify-center items-center">
			<View className="flex w-full flex-row items-center justify-between">
				<View className="flex flex-row items-center space-x-2">
					<Image source={icons.secondaryIMlogo} className="w-8 h-8" />
					<Text className="text-lg leading-7 font-bold text-teal-900">
						InaMova
					</Text>
				</View>

				<Button variant={"outline"}>
					<Text className="text-black">Skip</Text>
				</Button>
			</View>
			<View className="flex flex-col w-full flex-grow justify-center items-center space-y-2">
				<Text className="text-teal-900 text-lg leading-7 font-bold w-full">
					Change Password
				</Text>
				<Text className="text-teal-900 text-base leading-6 font-normal w-full">
					Insert new password
				</Text>
				<Input
					type="password"
					label="Password"
					placeholder="********"
					onChangeText={formik.handleChange('password')}
					value={formik.values.password}
					isInvalid={formik.touched.password && formik.errors.password ? true : false}
					hint={formik.errors.password}
				/>
				<Input
					type="password"
					label="Confirm Password"
					placeholder="********"
					onChangeText={formik.handleChange('passwordConfirmation')}
					value={formik.values.passwordConfirmation}
					isInvalid={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? true : false}
					hint={formik.errors.passwordConfirmation}
				/>
				<Button className="w-full" onPress={formik.handleSubmit}>
					<Text className="text-white">Change password</Text>
				</Button>
				<Button className="w-full bg-white">
					<Text className="text-teal-900">Cancel</Text>
				</Button>
			</View>
		</View>
	);
};

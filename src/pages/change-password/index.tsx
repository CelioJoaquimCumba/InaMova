import React from "react";

import { View, Image, Text } from "react-native";
import { icons } from "../../../constants";
import { Button, Input } from "../../components/atoms";

export const ChangePassoword = () => {
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
					isInvalid={false}
					hint="Please enter a valid password"
				/>
				<Input
					type="password"
					label="Confirm Password"
					placeholder="********"
					isInvalid={false}
					hint="Please enter a valid password"
				/>
				<Button className="w-full">
					<Text className="text-white">Change password</Text>
				</Button>
				<Button className="w-full bg-white">
					<Text className="text-teal-900">Cancel</Text>
				</Button>
			</View>
		</View>
	);
};

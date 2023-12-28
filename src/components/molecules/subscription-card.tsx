import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../atoms'
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface SubscriptionCardProps{
    title:string;
    nmbrQuestions:number;
    value:number;
    duration:number;
    borderColor:string;
    onPress?:()=>void
}
export const SubscriptionCard = ({title,nmbrQuestions,value,duration,borderColor,onPress}:SubscriptionCardProps) => {
  return (
    <View className={`flex flex-col self-stretch bg-white py-4 items-center rounded-2xl mt-1 border-2 ${borderColor} space-y-[10px]`}>
					<View className="rounded-full bg-teal-100 h-auto w-auto p-2">
						<Ionicons name="car" size={24} />
					</View>
					<Text className="text-base leading-6 font-semibold">{title}</Text>
					<View className="flex flex-col space-y-[10px]">
						<Text className="text-base leading-6 font-normal flex flex-row">
							<View className="rounded-full bg-teal-300 h-auto w-auto">
								<Feather name="check" size={16} color={"black"} />
							</View>
							{"  "}+{nmbrQuestions} Questions
						</Text>
						<Text className="text-base leading-6 font-normal flex flex-row">
							<View className="rounded-full bg-teal-300 h-auto w-auto">
								<Feather name="check" size={16} color={"black"} />
							</View>
							{"  "}Highway Code
						</Text>
						<Text className="text-base leading-6 font-normal flex flex-row">
							<View className="rounded-full bg-teal-300 h-auto w-auto">
								<Feather name="check" size={16} color={"black"} />
							</View>
							{"  "}Video Lessons
						</Text>
						<Text className="text-base leading-6 font-normal flex flex-row">
							<View className="rounded-full bg-teal-300 h-auto w-auto">
								<Feather name="check" size={16} color={"black"} />
							</View>
							{"  "}Duration: {duration} month
						</Text>
					</View>
					<Text className="text-lg font-semibold leading-7 text-teal-600">
						{value} MZN
					</Text>
					<View>
						<Button>
							<Text className="text-white">Purchase</Text>
						</Button>
					</View>
				</View>
  )
}

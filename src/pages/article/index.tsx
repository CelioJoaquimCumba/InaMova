import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TopLogoContainer } from "../../components/molecules";
import { images } from "../../../constants";
import { Button } from "../../components/atoms";
import { Feather } from "@expo/vector-icons";


export const Article = () => {
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-full h-full bg-gray-50 px-8">
				<TopLogoContainer LeftSide="Chevron" />

				<ScrollView className="space-y-2 flex flex-col  mt-2 w-full h-auto mb-6">
					<View className=" bg-gray-50 flex flex-col items-center flex-grow">
						<Image source={{uri: "https://file.fomille.site/1552537707180355586/1669627503962169346.webp"}} className="h-[166px] aspect-video rounded-3xl" />
					</View>
					{/* <Image source={images.CarDriving} className='w-42'/> */}
					<Text className="text-xl leading-7 font-semibold">
						Traffic Lights
					</Text>
					<Text className="text-base leading-6 font-normal text-gray-500">
						Lorem ipsum dolor sit amet consectetur. Commodo mollis quam dui ac.
					</Text>
					<View className=" flex flex-row justify-between">
						<Button variant={"outline"} className="rounded-3xl">
							<Text className="text-gray-600">14 min read</Text>
						</Button>
						<Button className="rounded-3xl flex flex-row">
							<Text className="text-white ">Share <Feather
						
						name="share-2"
						size={18}
						color="white"
					/></Text>
						</Button>
					</View>
					<Text className="text-lg leading-7 font-medium">Traffic Lights</Text>
					<Text className="text-base leading-6 font-normal">
						Traffic lights are an integral part of modern urban infrastructure, playing a crucial role in regulating vehicular and pedestrian traffic at intersections. These signal systems use a combination of colors—typically red, yellow (or amber), and green to convey specific instructions to road users.
					</Text>
					<Text className="text-base leading-7 font-medium">Red Light</Text>
					<Text>
						Red Light: The red light instructs drivers to come to a complete stop. It is positioned at the top of the traffic light and is universally understood as a signal to halt. In most places, it is illegal to proceed through an intersection when the light is red.
					</Text>
					<Text className="text-base leading-7 font-medium">Yellow Light</Text>
					<Text>
						Yellow/Amber Light: The yellow or amber light serves as a transition signal, indicating that the light is about to change. It warns drivers to slow down and prepare to stop. In some places, it is permissible to proceed through an intersection during the yellow phase if it is safe to do so.
					</Text>
					<Text className="text-base leading-7 font-medium">Green Light</Text>
					<Text>
						Green Light: The green light signals that it is safe for vehicles to proceed through the intersection. It typically follows the amber light and allows traffic to flow in the direction indicated by road markings.
					</Text>
					<Text className="text-base leading-7 font-medium">Conclusion</Text>
					<Text className="text-base leading-6 font-normal">traffic lights are a fundamental component of urban transportation systems, contributing to the orderly and safe movement of vehicles and pedestrians at intersections. Advances in technology continue to improve the efficiency and adaptability of these systems, playing a vital role in modern traffic management.</Text>
          <View className=" bg-gray-50 flex flex-col items-center flex-grow ">
						<Image source={{uri:"https://media-blog.zutobi.com/wp-content/uploads/sites/2/2021/02/03115540/image-65.jpeg?w=2560&auto=format&ixlib=next&fit=max"}} className="h-[166px] aspect-video rounded-3xl" />
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

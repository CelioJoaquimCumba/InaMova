import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TopLogoContainer } from "../../components/molecules";
import { images } from "../../../constants";
import { Button } from "../../components/atoms";
import { Feather } from "@expo/vector-icons";


export const Article = () => {
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-full h-full bg-gray-50">
				<TopLogoContainer LeftSide="Chevron" RightSide="Skip" />

				<ScrollView className="space-y-2 flex flex-col px-8 mt-2 w-full h-auto mb-6">
					<View className=" bg-gray-50 flex flex-col items-center flex-grow">
						<Image source={images.BlackCarCones} className="h-[166px] aspect-video rounded-3xl" />
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
						Lorem ipsum dolor sit amet consectetur. Ultricies cursus non ornare
						sed quam purus pretium donec ultricies. Fermentum gravida nisl
						pharetra cras dictumst consectetur. Aliquet mauris a nulla mi a
						vulputate facilisi id integer. Aenean morbi lacus molestie felis
						tellus orci mollis. Est venenatis sociis sociis a erat nulla augue
						amet. Facilisi erat et egestas adipiscing. Urna fusce sapien ipsum
						mi semper nulla fusce sed volutpat. Mauris a justo nibh eget. Enim
						euismod sem enim sed elementum mus enim lorem. Sagittis posuere
						habitasse odio euismod. Diam eu arcu auctor blandit praesent.
					</Text>
          <View className=" bg-gray-50 flex flex-col items-center flex-grow ">
						<Image source={images.BlackCarCones} className="h-[166px] aspect-video rounded-3xl" />
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

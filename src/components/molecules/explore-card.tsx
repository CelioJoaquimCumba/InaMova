import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";
import { useNavigation } from "@react-navigation/native";
import { Learn, Quiz } from "../../../constants/paths";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { ModalGetPremium } from "./modal-get-premium";

interface TestExamProps {
  id: string
  image: any;
  type: "test" | "learn"
  title: string;
  locked?: boolean;
  onPress?: () => void;
	image: any;
	title: string;
	locked?: boolean;
	route?: string;
}

export const ExploreCard = ({
	image,
	title,
	locked = false,
	route,
  id,
  image,
  title,
  type,
  locked = false,
}: TestExamProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const secondary = false
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const handlePress = () => {
    if(locked){
      setModalVisible(true)
      return
    }
    if(type === "test"){
      navigation.navigate(Quiz)
    }else {
      navigation.navigate(Learn)
    }
  }

  return (
      <Card className=" p-4 space-y-2 shadow mx-2 border-b-2 border-gray-300">
        <Image source={image} className={"h-36 aspect-square"} />
        <Text className="text-base leading-6 font-bold">{title}</Text>
        <Button
          onPress={handlePress}
          className="border border-gray-500 my-2 flex flex-row "
          variant={"outline"}
        >
          {locked && <Feather name="lock" size={16} color="black" />}
          <Text className="text-black ">Start</Text>
        </Button>
        <ModalGetPremium isVisible={modalVisible} toggleModal={() => setModalVisible(!modalVisible)}/>
      </Card>
  );
	const secondary = false;
	return (
		<Card className=" p-4 space-y-2 shadow mx-2 border-b-2 border-gray-300">
			<Image source={image} className={"h-36 aspect-square"} />
			<Text className="text-base leading-6 font-bold">{title}</Text>
			<Button
				className="border border-gray-500 my-2 flex flex-row "
				variant={"outline"}>
				{locked && <Feather name="lock" size={16} color="black" />}
				<Text className="text-black ">Start</Text>
			</Button>
		</Card>
	);
};

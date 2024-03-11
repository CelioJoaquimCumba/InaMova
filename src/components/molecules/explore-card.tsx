import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";
import { useNavigation } from "@react-navigation/native";
import { Lecture, Quiz } from "../../../constants/paths";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/router/stack";
import { ModalGetPremium } from "./modal-get-premium";
import { useLoading } from "../../providers/loadingProvider";

interface TestExamProps {
  id: string
  image: string;
  type: "test" | "learn"
  title: string;
  locked?: boolean;
  onPress?: () => void;
}

export const ExploreCard = ({
  id,
	image,
  type,
	title,
	locked = false,
  onPress
}: TestExamProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const {setLoadingState} = useLoading()
  const handlePress = () => {
    if(locked){
      setModalVisible(true)
      return
    }

    if(type === "test"){
      setLoadingState(true)
      navigation.navigate(Quiz, {id: id})
    }else {
      setLoadingState(true)
      navigation.navigate(Lecture, {id:id})
    }
  }

  return (
      <Card className=" p-4 space-y-2 shadow mx-2 border-b-2 border-gray-300">
        <Image source={{uri:image}} className={"h-36 aspect-square"} resizeMode="contain" />
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
};

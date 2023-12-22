import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import {
  AcquirePremium,
  TestExamContainer,
  TopBarContainer,
} from "../../components/molecules";
import { Explanation, Settings, Progress,Question } from "../../components/molecules";
import { images } from "../../../constants";

export const Evaluation = () => {
  return (
    <View className="w-screen h-screen  bg-slate-200">
      {/* topBar */}
      <TopBarContainer evaluation={true} />

{/* Progress */}
<Progress stepNmbr={10}/>

      {/* Question */}
      <View className="flex mt-2 w-full items-center">
        <Question
          imgSrc={images.BlackCarCones}
          bodyText="Lorem ipsum dolor sit amet consectetur"
        />
      </View>
      <View className="flex flex-col w-full  items-center mt-1">
        <Settings bgColor="bg-teal-600" bodyText="A.lorem ipsum" />
        <Settings bgColor="bg-red-500" bodyText="B.lorem ipsum" />
        <Settings bgColor="bg-white" bodyText="C.lorem ipsum" />
        <Settings bgColor="bg-white" bodyText="D.lorem ipsum" />
      </View>
      <View className="flex mt-2 w-full items-center">
        <Explanation
          correct={true}
          bodyText="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
        />
      </View>
    </View>
  );
};

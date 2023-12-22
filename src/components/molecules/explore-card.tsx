import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";

interface TestExamProps {
  image: any;
  title: string;
  locked?: boolean;
}

export const ExploreCard = ({
  image,
  title,
  locked = false,
}: TestExamProps) => {
  const secondary = false
  return (
      <Card className=" p-4 space-y-2 shadow mx-2">
        <Image source={image} className={"w-36 aspect-square"} />
        <Text className="text-center font-bold text-xs">{title}</Text>
        <Button
          className="border border-gray-500 my-2 flex flex-row "
          variant={"outline"}
        >
          {locked && <Feather name="lock" size={16} color="black" />} 
          <Text className="text-black ">Start</Text>
        </Button>
      </Card>
  );
};

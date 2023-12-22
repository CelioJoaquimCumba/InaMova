import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import {
  AcquirePremium,
  Settings,
  TopBarContainer,
} from "../../components/molecules";
import { icons, images } from "../../../constants";

export const Profile = () => {
  return (
    <View className="w-screen h-screen  bg-slate-200">
      {/* topBar */}
      <TopBarContainer evaluation={false}/>

      {/* acquirePremium */}
      <AcquirePremium />
      <View className="flex flex-col justify-center items-center">
        <Image
          source={images.BlackCarCones}
          className="h-20 w-20 my-2 rounded-full"
        />
        <Text className="font-[600] mb-3">Celio Cumba</Text>
      </View>
      <View className="flex flex-col w-full  items-center">
        <Settings iconSrc={icons.banknote} bgColor="bg-teal-300" bodyText="Payment and subscription"/>
        <Settings iconSrc={icons.helpCircle} bgColor="bg-blue-300" bodyText="Payment and subscription"/>
        <Settings iconSrc={icons.logOut} bgColor="bg-pink-300" bodyText="Payment and subscription"/>
      </View>
    </View>
  );
};

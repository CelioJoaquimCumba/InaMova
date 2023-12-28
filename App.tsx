import 'react-native-gesture-handler';
import { SafeAreaView,Text,View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { useColorScheme } from 'nativewind'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router/stack';


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const handleClick = () => {
    toggleColorScheme();
  };
  return (
    <NavigationContainer>
      {/* <SafeAreaView>
        <View className=" w-screen h-screen min-h-full flex pt-4"> */}
          <MainStack/>
        {/* </View>
      </SafeAreaView> */}
    </NavigationContainer>
  );
}

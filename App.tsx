import { SafeAreaView,View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { useColorScheme } from 'nativewind'
import React from 'react';
import { Login } from './src/pages/login';
import { NavigationContainer } from '@react-navigation/native';


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const handleClick = () => {
    toggleColorScheme();
  }
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View className=" w-screen h-screen min-h-full flex pt-4">
          <Login/>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}


import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { styled, useColorScheme } from 'nativewind'
import { SplashScreen } from './src/pages/splash-screen';
import React from 'react';
import Main from './src/pages/main';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const handleClick = () => {
    toggleColorScheme();
  }
  return (
      <SafeAreaView>
        <View className=" w-screen h-screen min-h-full flex pt-4">
          <Main />
        </View>
      </SafeAreaView>
  );
}


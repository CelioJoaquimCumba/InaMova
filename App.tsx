import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { styled, useColorScheme } from 'nativewind'
import { SplashScreen } from './src/pages/splash-screen';
import React from 'react';
import { Login } from './src/pages/login';
import { Main } from './src/pages/main';
import { NavigationContainer } from '@react-navigation/native';
import { Test } from './src/pages/main/Test';
import { Learn } from './src/pages/main/Learn';
import { Profile } from './src/pages/main/Profile';
import { Loading } from './src/pages/Loading';
import { Quiz, Register } from './src/pages';


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


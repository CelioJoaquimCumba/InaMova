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
import { Quiz } from './src/pages';
import { HelpSupport } from './src/pages/help-support';
import { ChangePassoword } from './src/pages/change-password';
import { Result } from './src/pages/result';


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
          {/* <ChangePassoword /> */}
          {/* <Result result={0}/> */}
          <HelpSupport/>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}


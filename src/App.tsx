import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { styled, useColorScheme } from 'nativewind'
import { Intro } from './pages/intro';
import { ChipsContainer } from './components/molecules/chips-container';
import Carousel from './components/organisms/Carrousel';
import { SplashScreen } from './pages/splash-screen';

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
          <SplashScreen />
        </View>
      </SafeAreaView>
  );
}


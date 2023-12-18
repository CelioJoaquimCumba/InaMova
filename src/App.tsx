import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { styled, useColorScheme } from 'nativewind'
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const handleClick = () => {
    toggleColorScheme();
  }
  return (
    <View className="bg-white dark:bg-black w-full h-full flex justify-center items-center space-y-4">
      <Text className="text-black dark:text-white">Open up App.js to start working on your app!</Text>
      <Pressable className="bg-black dark:bg-white p-4 rounded-md" onPress={handleClick}><Text className='text-white dark:text-black'>{colorScheme === "light" ? "Change to dark mode" : "Change to light mode"}</Text></Pressable>
    </View>
  );
}


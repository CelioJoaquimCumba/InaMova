import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="bg-black w-full flex justify-center items-center">
      <Text className="text-white">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


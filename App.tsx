import 'react-native-gesture-handler';
import { SafeAreaView,Text,View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { useColorScheme } from 'nativewind'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/router/stack';
import { UserProvider } from './src/providers/UserProvider';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LoadingProvider } from './src/providers/loadingProvider';


NativeWindStyleSheet.setOutput({
  default: "native",
});

const linking={
  prefixes:['exp://192.168.46.63:8081/--/inamova'],
  config:{
    screens:{
      Login:{
        path:"Login"
      },
      Recover:{
        path:"Recover"
      },
      ChangePassword:{
        path:"ChangePassword"
      }
    }
  }
}

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const handleClick = () => {
    toggleColorScheme();
  };
  return (
    <NavigationContainer linking={linking}>
      {/* <SafeAreaView>
        <View className=" w-screen h-screen min-h-full flex pt-4"> */}
        <RootSiblingParent>
          <UserProvider>
            <LoadingProvider>
              <MainStack/>
            </LoadingProvider>
          </UserProvider>
        </RootSiblingParent>
        {/* </View>
      </SafeAreaView> */}
    </NavigationContainer>
  );
}

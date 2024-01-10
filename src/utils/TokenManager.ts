import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store';

export const storeToken = async (token: string) => {
    try {
        if (!token) {
            throw new Error("No token provided");
        }
        // await AsyncStorage.setItem("token", token);
        await SecureStore.setItemAsync("token", token);
    } catch (e) {
        console.log(e);
    }
}



export const getToken = async () => {
    try {
        // const token = await AsyncStorage.getItem("token").then(token => token);
        const token = await SecureStore.getItemAsync("token").then(token => token);
        if(!token) {
            return null;
        }
        return token;
    } catch (e) {
        console.log(e);
    }
}

export const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync("token");
    } catch (e) {
        console.log(e);
    }
}
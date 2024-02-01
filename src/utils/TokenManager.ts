import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store';
import { axiosInstance } from "../api/axiosInstance";

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
        const token = await SecureStore.getItemAsync("token").then(token => token).catch(e => console.log(e));
        if(!token) {
            return null;
        }
        return token;
    } catch (e) {
        console.log(e.response.data.message);
        throw e
    }
}

export const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync("token");
    } catch (e) {
        console.log(e);
    }
}

export const validateToken = async (token: string): Promise<boolean> => {
    try {
        return await axiosInstance.post("user/validate-token", {token})
    } catch(e) {
        console.log(e.message)
        throw e
    }
}
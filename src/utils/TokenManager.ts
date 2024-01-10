import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeToken = async (token: string) => {
    try {
        if (!token) {
            throw new Error("No token provided");
        }
        await AsyncStorage.setItem("token", token);
    } catch (e) {
        console.log(e);
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        return token;
    } catch (e) {
        console.log(e);
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem("token");
    } catch (e) {
        console.log(e);
    }
}
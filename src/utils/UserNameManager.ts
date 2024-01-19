import * as SecureStore from 'expo-secure-store';

export const storeUsername = async (username: string) => {
    try {
        if (!username) {
            throw new Error("No username provided");
        }
        // await AsyncStorage.setItem("username", username);
        await SecureStore.setItemAsync("username", username);
    } catch (e) {
        console.log(e);
    }
}



export const getUsername = async () => {
    try {
        // const username = await AsyncStorage.getItem("username").then(username => username);
        const username = await SecureStore.getItemAsync("username").then(username => username).catch(e => console.log(e));
        if(!username) {
            return null;
        }
        return username;
    } catch (e) {
        console.log(e);
    }
}

export const removeUsername = async () => {
    try {
        await SecureStore.deleteItemAsync("username");
    } catch (e) {
        console.log(e);
    }
}
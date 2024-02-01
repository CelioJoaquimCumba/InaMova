import * as SecureStore from 'expo-secure-store';


const ID_KEY = "userId"
const USERNAME_KEY = "username"
const STATS_KEY = "stats"

export const storeUsername = async (username: string) => {
    try {
        if (!username) {
            throw new Error("No username provided");
        }
        // await AsyncStorage.setItem(USERNAME_KEY, username);
        await SecureStore.setItemAsync(USERNAME_KEY, username);
    } catch (e) {
        console.log(e);
    }
}

export const getUsername = async () => {
    try {
        // const username = await AsyncStorage.getItem(USERNAME_KEY).then(username => username);
        const username = await SecureStore.getItemAsync(USERNAME_KEY).then(username => username).catch(e => console.log(e));
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
        await SecureStore.deleteItemAsync(USERNAME_KEY);
    } catch (e) {
        console.log(e);
    }
}

export const storeUserId = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("No userId provided");
    }
    await SecureStore.setItemAsync(ID_KEY, userId);
  } catch (e) {
    console.error(e);
  }
}

export const getUserId = async () => {
  try {
    const userId = await SecureStore.getItemAsync(ID_KEY).then(userId => userId).catch(e => console.error(e));
    if (!userId) {
      return null;
    }
    return userId;
  } catch (e) {
    console.error(e);
  }
}

export const removeUserId = async () => {
  try {
    await SecureStore.deleteItemAsync(ID_KEY);
  } catch (e) {
    console.error(e);
  }
}

// Store stats object
export const storeStats = async (stats: object) => {
  try {
    const statsString = JSON.stringify(stats);
    await SecureStore.setItemAsync(STATS_KEY, statsString);
  } catch (e) {
    console.error(e);
  }
}

// Retrieve stats object
export const getStats = async () => {
  try {
    const statsString = await SecureStore.getItemAsync(STATS_KEY);
    if (!statsString) {
      return null;
    }
    const stats = JSON.parse(statsString);
    return stats;
  } catch (e) {
    console.error(e);
  }
}

// Delete stats
export const deleteStats = async () => {
  try {
    await SecureStore.deleteItemAsync(STATS_KEY);
  } catch (e) {
    console.error(e);
  }
}
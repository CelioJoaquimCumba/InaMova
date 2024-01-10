import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = "http://10.0.2.2:3000/";


const getToken = async ()  => {
    return await AsyncStorage.getItem("token");
}
const token = getToken()

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        // "Authorization": "Bearer " + token,
    },
})
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../utils/TokenManager';

// const BASE_URL = "http://10.0.2.2:3000/";
// const BASE_URL = "http://192.168.100.11:3000/";
const BASE_URL = "https://inamova.onrender.com"




export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    },
})




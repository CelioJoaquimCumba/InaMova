import { getToken } from "../utils/TokenManager";
import { Quiz } from "../models/index.js"
import { axiosInstance } from "./axiosInstance"

// Add a request interceptor to set the Authorization header
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (!token) return config;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const getQuizzes = async (): Promise<Quiz[]> => {
    try {
        const response = await axiosInstance.get("quiz/all")
        return response.data
    } catch(e) {
        console.log(e.response.data)
        throw e
    }
}
import { axiosInstance } from "./axiosInstance";
import { getToken } from "../utils/TokenManager";
import { Article } from "../models";

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

export const getArticles = async (id: string): Promise<Article[]> => {
  try {
    const response = await axiosInstance.get(`article/all/`, {params: {id: id}})
    return response.data;
  } catch(error) {
    console.error("Error fetching articles:", error);
    throw error;
  } 
}

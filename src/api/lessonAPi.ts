import { axiosInstance } from "./axiosInstance";
import { getToken } from "../utils/TokenManager";
import { Lesson } from "../models/lesson.model";

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

export const getLessons = async (id: string): Promise<Lesson[]> => {
  try {
    const response = await axiosInstance.get(`lesson/all/`, {params: {id: id}})
    return response.data;
  } catch(error) {
    console.error("Error fetching lessons:", error);
    throw error;
  } 
}

export const getLesson = async (id: string): Promise<Lesson> => {
  try {
    const response = await axiosInstance.get("lesson", { params: { id: id } });
    return response.data;
  } catch (error) {
    console.error(`Error fetching lesson with id ${id}:`, error);
    throw error;
  }
};

import { axiosInstance } from "./axiosInstance";
import { getToken } from "../utils/TokenManager";
import { Subject } from "../models/subject.model";

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

export const getSubjects = async (setLoading: (value:boolean)=> void): Promise<Subject[]> => {
    try {
        setLoading(true)
        const response = await axiosInstance.get("subject/all")
        return response.data
    } catch(e) {
        console.log(e.response.data)
        throw e
    } finally{
      setLoading(false)
    }
}

export const getSubject = async (id: string): Promise<Subject[]> => {
    try {
        const response = await axiosInstance.get("subject/", {params: {id: id}})
        return response.data
    } catch(e) {
        console.log(e.response.data)
        console.log("get subject error")
        throw e
    } 
}
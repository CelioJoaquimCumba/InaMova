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

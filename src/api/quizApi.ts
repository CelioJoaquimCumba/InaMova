import { getToken } from "../utils/TokenManager";
import { Question, Quiz } from "../models/index.js"
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
export const getQuizzes = async (setLoading: (value:boolean)=> void): Promise<Quiz[]> => {
    try {
        setLoading(true)
        const response = await axiosInstance.get("quiz/all")
        return response.data
    } catch(e) {
        console.log(e.response.data)
        throw e
    } finally{
      setLoading(false)
    }
}

export const getQuiz = async (id: string): Promise<Array<Question>> => {
    try {
        const response = await axiosInstance.get("quiz/", {params: {id: id}})
        return response.data
    } catch(e) {
        console.log(e.response.data)
        console.log("get quiz error")
        throw e
    } 
}
export const submitResult = async(quizId:string, userId:string, score:number, total:number) => {
  try {
    await axiosInstance.post("quiz/submit", {quizId,userId,score,total})
  } catch(e){
    console.log(e.response.data)
    throw e
  }
}
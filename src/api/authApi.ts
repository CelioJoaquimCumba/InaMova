import axios from "axios";
import { axiosInstance } from "./axiosInstance"; // Assuming api.ts is in the same directory

export const login = async (email: string, password: string): Promise<{token: string, username: string}> => {
    try {
        const response = await axiosInstance.post("user/login", {email, password});
        
        // Assuming the server returns a token in the response
        const token: string = response.data.token;
        const username: string = response.data.username
        console.log(response.data)

        return {token, username};
    } catch (e) {
        console.log(e.response.data);
        throw e; // Re-throw the error so that the caller can handle it
    }
};
export const register = async (name: string, email: string, password: string, phone: string): Promise<{token: string, username: string}> => {
    try {
        const response = await axiosInstance.post("user/register", {name, email, password, phone});
        const token: string = response.data.token;
        const username: string = response.data.username;
        return {token, username};
    } catch (e) {
        console.log(e.response.data);
        throw e; // Re-throw the error so that the caller can handle it
    }
}
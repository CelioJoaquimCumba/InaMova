import axios from "axios";
import { axiosInstance } from "./axiosInstance"; // Assuming api.ts is in the same directory

export const login = async (
	email: string,
	password: string
): Promise<{ token: string; username: string; id: string }> => {
	try {
		const response = await axiosInstance.post("user/login", {
			email,
			password,
		});

		// Assuming the server returns a token in the response
		const token: string = response.data.token;
		const username: string = response.data.username;
		const id: string = response.data.id;
		return { token, username, id };
	} catch (e) {
		console.log(e.response.data);
		throw e; // Re-throw the error so that the caller can handle it
	}
};
export const register = async (
	name: string,
	email: string,
	password: string,
	phone: string
): Promise<{ token: string; username: string; id: string }> => {
	try {
		const response = await axiosInstance.post("user/register", {
			name,
			email,
			password,
			phone,
		});
		const token: string = response.data.token;
		const username: string = response.data.username;
		const id: string = response.data.id;
		return { token, username, id };
	} catch (e) {
		console.log(e.response.data);
		throw e; // Re-throw the error so that the caller can handle it
	}
};

export const forgotPassword = async (email: string): Promise<string> => {
	try {
		const response = await axiosInstance.post("user/forgot-password", {
			email,
		});
		return response.data.message;
	} catch (e) {
		console.log(e.response.data);
		throw e;
	}
};

export const changePassword = async (
	email: string,
	password: string,
	token: string
): Promise<string> => {
	try {
		const response = await axiosInstance.post("user/change-password", {
			email,token,password,
		});
		return response.data.message+"here";
	} catch (e) {
		console.log(e.response.data);
		throw e;
	}
};

export const getStats = async (
	id: string
): Promise<{ made: number; passed: number }> => {
	try {
		const response = await axiosInstance.get("user/stats", {
			params: { id: id },
		});
		return response.data;
	} catch (e) {
		console.log(e.response);
		throw e;
	}
};

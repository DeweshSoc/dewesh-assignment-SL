import { API_ENDPOINTS } from "../_constants";
import { sendGetRequestAuth, sendPostRequest } from "./httpRequests";
import isEmail from "validator/lib/isEmail";

export async function signupService(
    email: string,
    password: string
): Promise<any> {
    try {
        if (!isEmail(email)) {
            throw new Error("Invalid Email");
        }
        const body = JSON.stringify({
            email,
            password,
        });

        return await sendPostRequest(API_ENDPOINTS.POST_CREATE, {
            body,
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function loginService(
    email: string,
    password: string
): Promise<any> {
    try {
        if (!isEmail(email)) {
            throw new Error("Invalid Email");
        }

        const body = JSON.stringify({
            email,
            password,
        });

        return await sendPostRequest(API_ENDPOINTS.POST_LOGIN, {
            body,
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function logoutService(token: string) {
    try {
        if (!token) {
            throw new Error("Token not provided");
        }

        return await sendGetRequestAuth(API_ENDPOINTS.GET_LOGOUT, {
            token,
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

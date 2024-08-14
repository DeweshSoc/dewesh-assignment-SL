import { API_ENDPOINTS } from "../_constants";
import { sendPostRequest } from "./httpRequests";
import isEmail from "validator/lib/isEmail";


export async function signupService(email:string, password:string) : Promise<void>{
    try {
        if (!isEmail(email)) {
            throw new Error("Invalid Email")
        }
        const body = JSON.stringify({
            email,
            password,
        });

        await sendPostRequest(API_ENDPOINTS.POST_CREATE_USER, {
            method: "post",
            body,
            headers: {
                Accept: "application/json",
            },
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function loginService(email: string, password: string): Promise<void> {
    try {
        if (!isEmail(email)) {
            alert("Invalid Email");
            return;
        }
        const body = JSON.stringify({
            email,
            password,
        });

        await sendPostRequest(API_ENDPOINTS.POST_LOGIN_USER, {
            method: "post",
            body,
            headers: {
                Accept: "application/json",
            },
        });
    } catch (err) {
        console.error(err);
        alert("Something went wrong, check console");
    }
}

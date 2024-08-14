"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SyntheticEvent, useState } from "react";

import styles from "./AuthForm.module.css";
import { signupService, loginService } from "@/app/lib/authServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function LoginForm() {
    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentPath = usePathname();
    const router = useRouter();

    // handlers

    async function handleSignup(e : SyntheticEvent) {
        try{    
            e.preventDefault();
            const response = await signupService(email,password);
            toast.success(`${response?.message || 'Signup successful'}`);
            router.push("/");
        }catch(err:any){
            console.error(err);
            toast.error(err.message);
        }
    }

    async function handleLogin(e: SyntheticEvent) {
        try {
            e.preventDefault();
            const response = await loginService(email, password);
            toast.success(`${response?.message || "Login successful"}`);
            router.push("/dashboard");
        } catch (err: any) {
            console.error(err);
            toast.error(err.message);
        }   
    }

    const loginBtn = (
        <input
            className={styles.loginBtn}
            type="submit"
            value="Login"
            onClick={handleLogin}
        />
    );

    const signUpBtn = (
        <input
            className={styles.loginBtn}
            type="submit"
            value="SignUp"
            onClick={(e) => handleSignup(e)}
        />
    );

    return (
        <form className={styles.loginForm}>
            <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            {currentPath === "/" ? (
                <>
                    <div className={styles.sessionHelp}>
                        <span>
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </span>
                        <Link className="link" href="#">
                            Forgot password?
                        </Link>
                    </div>
                    {loginBtn}
                    <div className={styles.baredOr}>
                        <div className={styles.bar}></div>
                        or
                        <div className={styles.bar}></div>
                    </div>
                    <Link className={styles.signupBtn} href="/signup">
                        SignUp
                    </Link>
                </>
            ) : (
                <></>
            )}

            {currentPath === "/signup" ? signUpBtn : <></>}
        </form>
    );
}

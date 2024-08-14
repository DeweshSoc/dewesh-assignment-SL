"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { usePathname } from "next/navigation";

export function LoginForm() {
    const currentPath = usePathname();

    const signupLink = (
        <Link className={styles.signupBtn} href="/signup">
            SignUp
        </Link>
    );

    const baredOr = (
        <div className={styles.baredOr}>
            <div className={styles.bar}></div>
            or
            <div className={styles.bar}></div>
        </div>
    );

    const sessionHelp = (
        <div className={styles.sessionHelp}>
            <span>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </span>
            <Link className="link" href="#">
                Forgot password?
            </Link>
        </div>
    );

    const loginBtn = (
        <input className={styles.loginBtn} type="submit" value="Login" />
    );

    const signUpBtn = (
        <input className={styles.loginBtn} type="submit" value="SignUp" />
    );

    return (
        <form className={styles.loginForm}>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            {currentPath === "/" ? (
                <>
                    {sessionHelp}
                    {loginBtn}
                    {baredOr}
                    {signupLink}
                </>
            ) : (
                <></>
            )}

            {currentPath === "/signup" ? signUpBtn : <></>}
        </form>
    );
}

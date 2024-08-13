import Image from "next/image";
import styles from "./login.module.css";
import { LoginForm } from "./loginForm";

import logoIconPurple from "@/public/logo_icon_purple.svg";

export function Login() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBanner}>
                <Image src={logoIconPurple} alt="brand logo" priority={true} />
                <p>
                    Welcome to <br /> <span>Ques.AI</span>
                </p>
            </div>
            <LoginForm/>
        </div>
    );
}

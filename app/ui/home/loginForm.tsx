import Image from "next/image";
import Link from "next/link";
import styles from "./login-form.module.css";

export function LoginForm() {
    return (
        <form className={styles.loginForm}>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <div className={styles.sessionHelp}>
                <span>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </span>
                <Link className="link" href="#">
                    Forgot password?
                </Link>
            </div>
            <input className={styles.loginBtn} type="submit" value="Login" />
        </form>
    );
}

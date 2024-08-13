import Image from "next/image"
import styles from "./Welcome.module.css"

import logoIconWhite from "@/public/logo_icon_white.svg";
import logoText from "@/public/logo_text.svg";


export function Welcome(){
    return (
        <>
            <div
                className={`${styles.page} ${styles.bgGradient} ${styles.yourClass}`}
            >
                <div className={styles.logoGroup}>
                    <Image
                        src={logoIconWhite}
                        alt="brand logo"
                        priority={true}
                    />
                    <Image src={logoText} alt="brand logo text" />
                </div>
                <div className={styles.header}>
                    <h1>
                        Your podcast <br /> will no longer <br /> be just a
                        hobby.
                    </h1>
                    <h2>
                        Supercharge Your Distribution <br />
                        using our AI assistant!
                    </h2>
                </div>
            </div>
        </>
    );
}
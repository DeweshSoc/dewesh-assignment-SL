"use client";

import Image from "next/image";
import styles from "./account.module.css";
import backIcon from "@/public/back.svg";
import propic from "@/public/propic2.svg";

export default function Page() {
    return (
        <div className={styles.outlet}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <Image src={backIcon} alt="back"></Image>
                    <h1>Account Settings</h1>
                </div>
            </div>

            <div className={styles.settings}>
                <Image src={propic} alt="profile pic"></Image>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value="username"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        disabled
                        type="text"
                        name="email"
                        id="email"
                        value="username@gmail.com"
                    />
                </div>
            </div>
            <h1>Subscriptions</h1>
            <div className={styles.banner}>
                <p>
                    Oops! You don’t have any active plans.{" "}
                    <strong>Upgrade now!</strong>
                </p>
                <button className={`${styles.upgradeBtn} btn btn-primary`}>
                    Upgrade
                </button>
            </div>
        </div>
    );
}

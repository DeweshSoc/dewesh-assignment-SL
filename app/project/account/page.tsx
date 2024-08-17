"use client";

import Image from "next/image";
import styles from "./account.module.css";
import backIcon from "@/public/back.svg";
import propic from "@/public/propic2.svg";
import useAuth from "@/app/lib/userContext";
import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateUserService } from "@/app/lib/dataServices";

export default function Page() {
    const { user, logout, isAuthenticated, updateUsername } = useAuth();
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState(user?.username);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/");
        }
    });

    function handleUsernameChange(e: SyntheticEvent) {
        setUsername((e.target as HTMLInputElement).value);
        setEditing(true);
    }

    async function handleSubmit() {
        try {
            if (!username) {
                toast.error("Username cannot be empty");
                setUsername(user?.username);
                return;
            }

            const response = await updateUserService(
                username,
                user?.token as string
            );
            const { username: usrName } = response.data;
            updateUsername(username);
            toast.success("Username updated");
        } catch (err: any) {
            if (err.status === 403) {
                await logout();
            }
            console.error(err);
        }
    }

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
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => {
                            handleUsernameChange(e);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        disabled
                        type="text"
                        name="email"
                        id="email"
                        value={user?.email}
                    />
                </div>
                {editing ? (
                    <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
                ) : (
                    <></>
                )}
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

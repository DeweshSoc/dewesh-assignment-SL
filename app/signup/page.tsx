"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Login } from "../ui/home";

export default function Page() {
    return (
        <main className={styles.main}>
            <Login></Login>
        </main>
    );
}

"use client"

import { useRouter } from "next/navigation";
import styles from "./create.module.css"
import Image from "next/image";

import backIcon from "@/public/back.svg"

export default function Page() {
    const router = useRouter();

    return (
        <div className={styles.outlet}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <Image
                        src={backIcon}
                        alt="back"
                        onClick={() => router.back()}
                    ></Image>
                    <h1>Create and Repurpose</h1>
                </div>
            </div>
        </div>
    );
}

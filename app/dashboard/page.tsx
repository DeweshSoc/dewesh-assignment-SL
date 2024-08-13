import Image from "next/image";
import { Nav } from "../ui/dashboard/nav";
import styles from "./page.module.css";

import podcast from "@/public/podcast.svg";
import plusIcon from "@/public/plus-btn.svg";

export default async function Page() {
    return (
        <main>
            <Nav />
            <div className={styles.content}>
                <h1>Create a New Project</h1>
                <Image src={podcast} alt="podcast image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                </p>
                <div className={styles.contentBtn}>
                    <Image src={plusIcon} alt="plus-btn" />
                    <span>Create New Project</span>
                </div>
            </div>
        </main>
    );
}

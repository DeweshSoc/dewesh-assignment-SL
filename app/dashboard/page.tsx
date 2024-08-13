"use client";

import Image from "next/image";
import styles from "./page.module.css";
import CreateProjectModal from "../ui/dashboard/createModal";
import CreateProjectBtn from "../ui/common/createProjectBtn";

import podcast from "@/public/podcast.svg";
import { useState } from "react";

export default function Page() {
    const [modalOn, setModalOn] = useState(false);

     document.documentElement.style.overflowY = "auto";

    function toggleModal() {
        setModalOn((modalState) => !modalState);
    }

    return (
        <main>
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
                <CreateProjectBtn onModalToggle={toggleModal} />
            </div>
            {modalOn ? (
                <CreateProjectModal onModalCancel={toggleModal} />
            ) : (
                <></>
            )}
        </main>
    );
}

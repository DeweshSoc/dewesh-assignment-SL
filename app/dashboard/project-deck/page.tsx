"use client";

import CreateProjectBtn from "@/app/ui/common/CreateProjectBtn";
import CreateProjectModal from "@/app/ui/dashboard/CreateModal";
import Project from "@/app/ui/dashboard/Project";
import styles from "./project-deck.module.css";

import { useState } from "react";

export default function Page() {
    const [modalOn, setModalOn] = useState(false);

    if(typeof window !== "undefined"){
        document.documentElement.style.overflowY = "auto";
    }

    function toggleModal() {
        setModalOn((modalState) => !modalState);
    }

    return (
        <>
            <div className={styles.deckContainer}>
                <div className={styles.headerBar}>
                    <h2>Projects</h2>
                    <CreateProjectBtn onModalToggle={toggleModal} />
                </div>

                <div className={styles.deck}>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
            {modalOn ? (
                <CreateProjectModal onModalCancel={toggleModal} />
            ) : (
                <></>
            )}
        </>
    );
}

"use client";

import CreateProjectBtn from "@/app/ui/common/createProjectBtn";
import CreateProjectModal from "@/app/ui/dashboard/createModal";
import Project from "@/app/ui/dashboard/project";
import styles from "./projectDeck.module.css";

import { useState } from "react";

export default function Page() {
    const [modalOn, setModalOn] = useState(false);

    document.documentElement.style.overflowY = "auto";

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

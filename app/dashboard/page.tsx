"use client";

import Image from "next/image";
import styles from "./page.module.css";
import CreateProjectModal from "../ui/dashboard/CreateModal";
import CreateProjectBtn from "../ui/common/CreateProjectBtn";

import podcast from "@/public/podcast.svg";
import { useEffect, useState } from "react";
import { IUser } from "../lib/userContext";
import { useRouter } from "next/navigation";
import useAuth from "../lib/userContext";

export default function Page() {
    const [modalOn, setModalOn] = useState(false);
    const {isAuthenticated, user} = useAuth();
    const {hasProject} = user as IUser;
    const router = useRouter()
    
    useEffect(()=>{
        if(!isAuthenticated()) router.push("/");
        if(hasProject){
            router.push("/dashboard/project-deck");
        }
    },[hasProject,router])

    
    if (typeof window !== "undefined") {
        document.documentElement.style.overflowY = "auto";
    }
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

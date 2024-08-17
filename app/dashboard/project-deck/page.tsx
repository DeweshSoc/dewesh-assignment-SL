"use client";

import CreateProjectBtn from "@/app/ui/common/CreateProjectBtn";
import CreateProjectModal from "@/app/ui/dashboard/CreateModal";
import Project from "@/app/ui/dashboard/Project";
import styles from "./project-deck.module.css";
import { fetchProjectService } from "@/app/lib/dataServices";
import { useEffect, useState } from "react";
import useAuth from "@/app/lib/userContext";
import { useRouter } from "next/navigation";

export default function Page() {
    const [projects, setProjects] = useState<any[]>([]);
    const [modalOn, setModalOn] = useState(false);
    const [triggerFetch, setTriggerFetch] = useState(true);
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) router.push("/");
    }, []);

    useEffect(() => {
        async function getPageData() {
            try {
                const response = await fetchProjectService(
                    user?.token as string
                );
                setProjects(response.data.projects);
            } catch (err: any) {
                if (err.status === 403) {
                    await logout();
                }
            }
        }
        if (!user?.token) return;
        if (triggerFetch) {
            getPageData();
            setTriggerFetch(false);
        }
    }, [triggerFetch]);

    if (typeof window !== "undefined") {
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
                    {projects.map((project) => {
                        return <Project data={project} key={project._id} />;
                    })}
                </div>
            </div>
            {modalOn ? (
                <CreateProjectModal
                    onModalCancel={toggleModal}
                    triggerFetch={() => {
                        setTriggerFetch(true);
                    }}
                />
            ) : (
                <></>
            )}
        </>
    );
}

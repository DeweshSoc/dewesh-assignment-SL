"use client";

import CreateProjectBtn from "@/app/ui/common/CreateProjectBtn";
import CreateProjectModal from "@/app/ui/dashboard/CreateModal";
import Project from "@/app/ui/dashboard/Project";
import styles from "./project-deck.module.css";
import { fetchProjectService } from "@/app/lib/dataServices";
import { useEffect, useState } from "react";



export default function Page() {
    const [modalOn, setModalOn] = useState(false);
    const [projects, setProjects] = useState<any[]>([]);
    const [fetchData, setFetchData] = useState(true);

    useEffect(()=>{
        async function getPageData(){
            const response = await fetchProjectService();
            setProjects(response.data.projects);
        }
        if(fetchData){
            getPageData();
            setFetchData(false);
        }
    },[fetchData])



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
                    {
                        projects.map((project) => {
                            return(
                                <Project data={project} key={project._id}/>
                            )
                        })
                    }
                </div>
            </div>
            {modalOn ? (
                <CreateProjectModal onModalCancel={toggleModal} onCreation = {()=>{setFetchData(true)}} />
            ) : (
                <></>
            )}
        </>
    );
}

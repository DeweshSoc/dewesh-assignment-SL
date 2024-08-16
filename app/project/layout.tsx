"use client"

import SideBar from "@/app/ui/project/SideBar";
import styles from "./page.module.css"
import Nav from "../ui/project/Nav";
import useProject, { ProjectProvider } from "../lib/projectContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../lib/userContext";
export default function Layout({ children }: { children: React.ReactNode }) {
    const {isAuthenticated} = useAuth();
    const {project} = useProject();
    const router = useRouter();


    useEffect(()=>{
        if (!isAuthenticated()) router.push("/");
        if(!project){
            router.push("/dashboard/project-deck");
            return;
        }
    },[project,router]);

    return (
        
            <main className={styles.main}>
                <SideBar />
                <div className={styles.outlet}>
                    <Nav
                        projectTitle={project?.title || "" }
                        currentOption="Add your padcast"
                    ></Nav>
                    {children}
                </div>
            </main>
    );
}

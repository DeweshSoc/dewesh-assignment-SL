"use client"

import SideBar from "@/app/ui/project/SideBar";
import styles from "./page.module.css"
import Nav from "../ui/project/Nav";
import useProject, { ProjectProvider } from "../lib/projectContext";
import { useRouter } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
    const {project} = useProject();
    const router = useRouter();

    if(!project){
        router.push("/dashboard/project-deck");
        return;
    }

    return (
        
            <main className={styles.main}>
                <SideBar />
                <div className={styles.outlet}>
                    <Nav
                        projectTitle={project.title}
                        currentOption="Add your padcast"
                    ></Nav>
                    {children}
                </div>
            </main>
    );
}

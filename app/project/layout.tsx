"use client";

import SideBar from "@/app/ui/project/SideBar";
import styles from "./page.module.css";
import Nav from "../ui/project/Nav";
import * as allSvg from "@/public/customSvgs";
import useProject, { ProjectProvider } from "../lib/projectContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../lib/userContext";

const options = [
    {
        text: "Add your Podcast(s)",
        icon: allSvg.plussign,
        activeIcon: allSvg.plussignActive,
        altText: "option to add podcast",
        href: "/project",
        activeOn: ["/project", "/project/edit"],
        id: 1,
    },
    {
        text: "Create & Repurpose",
        icon: allSvg.pencil,
        activeIcon: allSvg.penclActive,
        altText: "option to create",
        href: "/project/create",
        id: 2,
        activeOn: ["/project/create"],
    },
    {
        text: "Podcast Widget",
        icon: allSvg.widget,
        activeIcon: allSvg.widgetActive,
        altText: "Podcast Widget",
        href: "/project/podcast",
        id: 3,
        activeOn: ["/project/podcast"],
    },
    {
        text: "Upgrade",
        icon: allSvg.diamond,
        activeIcon: allSvg.diamondActive,
        altText: "Upgrade",
        href: "/project/upgrade",
        id: 4,
        activeOn: ["/project/upgrade"],
    },
];

const helpOption = {
    text: "Help",
    altText: "help btn",
    icon: allSvg.gear2,
    activeIcon: allSvg.gear2Active,
    href: "/project/account",
    id: 5,
    activeOn: ["/project/account"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const { project } = useProject();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        if (!isAuthenticated()) router.push("/");
        if (!project) {
            router.push("/dashboard/project-deck");
            return;
        }
    }, [project, router]);

    function getCurrentOption() {
        const allOptions = [...options, helpOption];
        return allOptions.filter((op) => op.activeOn.includes(pathName))[0];
    }

    return (
        <main className={styles.main}>
            <SideBar options={options} helpOption={helpOption} />
            <div className={styles.outlet}>
                <Nav
                    projectTitle={project?.title || ""}
                    currentOption={getCurrentOption().text}
                ></Nav>
                {children}
            </div>
        </main>
    );
}

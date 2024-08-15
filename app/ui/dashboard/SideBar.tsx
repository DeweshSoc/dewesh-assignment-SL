"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./SideBar.module.css";

import quesLogo from "@/public/ques-logo.svg";
import profileIcon from "@/public/propic1.svg";

import * as allSvg from "@/public/customSvgs";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface ISidebarOption {
    altText: string;
    text: string;
    icon: any;
    activeIcon: any;
    href: string;
    id: number;
}

const options: ISidebarOption[] = [
    {
        text: "Add your Podcast(s)",
        icon: allSvg.plussign,
        activeIcon: allSvg.plussignActive,
        altText: "option to add podcast",
        href: "/project",
        id: 1,
    },
    {
        text: "Create & Repurpose",
        icon: allSvg.pencil,
        activeIcon: allSvg.penclActive,
        altText: "option to create",
        href: "/project/create",
        id: 2,
    },
    {
        text: "Podcast Widget",
        icon: allSvg.widget,
        activeIcon: allSvg.widgetActive,
        altText: "Podcast Widget",
        href: "/project/podcast",
        id: 3,
    },
    {
        text: "Upgrade",
        icon: allSvg.diamond,
        activeIcon: allSvg.diamondActive,
        altText: "Upgrade",
        href: "/project/diamond",
        id: 4,
    },
];

const helpOption: ISidebarOption = {
    text: "Help",
    altText: "help btn",
    icon: allSvg.gear2,
    activeIcon: allSvg.gear2Active,
    href: "#",
    id: 5,
};

function SideBarOption({
    data,
    active,
}: {
    data: ISidebarOption;
    active: boolean;
}) {


    return (
        <div
            className={active ? `${styles.active} ${styles.sideBarOption}` : `${styles.sideBarOption}`}
        >
            {active ? <span>{data.activeIcon}</span> : <span>{data.icon}</span>}
            <Link href={data.href}>{data.text}</Link>
        </div>
    );
}

export default function SideBar() {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className={styles.sideBar}>
            {/* <plusIcon></plusIcon> */}
            <div className={styles.brand}>
                <Image src={quesLogo} alt="logo"></Image>
            </div>
            <div className={styles.options}>
                {options.map((option) => {
                    const isActive = option.href === pathName;
                    return (
                        <SideBarOption
                            key={option.id}
                            data={option}
                            active={isActive}
                        />
                    );
                })}
            </div>
            <div className="bar"></div>
            <div className={styles.lowerOptions}>
                <div className={styles.footer}>
                    <SideBarOption
                        data={helpOption}
                        active={helpOption.href === pathName}
                    />
                </div>
                <div className="bar"></div>
                <div className={styles.user}>
                    <Image src={profileIcon} alt="profil pic"></Image>
                    <div className={styles.userInfo}>
                        <p>Username</p>
                        <p className={styles.email}>username@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

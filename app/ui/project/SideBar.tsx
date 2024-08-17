"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SideBar.module.css";

import quesLogo from "@/public/ques-logo.svg";
import profileIcon from "@/public/propic1.svg";

import { usePathname } from "next/navigation";
import { useState } from "react";
import useAuth from "@/app/lib/userContext";

interface ISidebarOption {
    altText: string;
    text: string;
    icon: any;
    activeIcon: any;
    href: string;
    id: number;
    activeOn: string[];
}

function SideBarOption({
    data,
    active,
}: {
    data: ISidebarOption;
    active: boolean;
}) {
    return (
        <div
            className={
                active
                    ? `${styles.active} ${styles.sideBarOption}`
                    : `${styles.sideBarOption}`
            }
        >
            {active ? <span>{data.activeIcon}</span> : <span>{data.icon}</span>}
            <Link href={data.href}>{data.text}</Link>
        </div>
    );
}

export default function SideBar({
    options,
    helpOption,
}: {
    options: ISidebarOption[];
    helpOption: ISidebarOption;
}) {
    const { user } = useAuth();

    const pathName = usePathname();
    return (
        <div className={styles.sideBar}>
            {/* <plusIcon></plusIcon> */}
            <div className={styles.brand}>
                <Image className={styles.logo} src={quesLogo} alt="logo"></Image>
            </div>
            <div className={styles.options}>
                {options.map((option) => {
                    const isActive = option.activeOn.includes(pathName);
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
                        <p>{user?.username}</p>
                        <p className={styles.email}>{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

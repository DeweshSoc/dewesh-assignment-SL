import Image from "next/image";
import styles from "./Nav.module.css";

import bellIcon from "@/public/bell2.svg";
import logoutIcon from "@/public/logout.svg";
import * as allSvgs from "@/public/customSvgs";
import useAuth from "@/app/lib/userContext";

export default function Nav({
    projectTitle,
    currentOption,
}: {
    projectTitle: string;
    currentOption: string;
}) {
    const { logout } = useAuth();

    return (
        <div className={styles.outerContainer}>
            <div className={styles.breadCrumb}>
                <span>
                    {allSvgs.home} Home Page / &nbsp;{projectTitle} /
                    <span className={styles.option}>&nbsp;{currentOption}</span>
                </span>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    <Image src={bellIcon} alt="notification"></Image>
                </div>
                <div className={styles.button} onClick={() => logout()}>
                    <Image src={logoutIcon} alt="logout button"></Image>
                </div>
            </div>
        </div>
    );
}

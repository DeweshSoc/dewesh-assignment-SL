import Image from "next/image";
import Link from "next/link";

import quesLogo from "@/public/ques-logo.svg";
import bellIcon from "@/public/bell.svg";
import gearIcon from "@/public/gear.svg";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.brand}>
                <Image src={quesLogo} alt="ques-logo" />
            </div>
            <div className={styles.options}>
                <Link href="/settings">
                    {" "}
                    <Image src={gearIcon} alt="settings-icon" />
                </Link>
                <Link href="/notifications">
                    {" "}
                    <Image src={bellIcon} alt="notification-icon" />
                </Link>
            </div>
        </div>
    );
}

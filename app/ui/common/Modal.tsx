import Image from "next/image";
import styles from "./Modal.module.css";

import yt2 from "@/public/yt2.svg"

export function Modal({
    modalTitle,
    icon,
    children,
}: {
    modalTitle: string;
    icon?:any;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.modalContainer}>
                <div className={styles.header}>
                    {icon ? <Image src={yt2} alt="yt"></Image> : <></>}
                    <h1>{modalTitle}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}

import Image from "next/image";
import plusIcon from "@/public/plus-btn.svg";
import { MouseEventHandler } from "react";
import styles from "./createProjectBtn.module.css"

export default function CreateProjectBtn({
    onModalToggle,
}: {
    onModalToggle: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div className={styles.contentBtn} onClick={onModalToggle}>
            <Image src={plusIcon} alt="plus-btn" />
            <span>Create New Project</span>
        </div>
    );
}

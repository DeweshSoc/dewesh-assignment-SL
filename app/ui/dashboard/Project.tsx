import { parseDiffFromNow } from "@/app/lib/utils";
import styles from "./Project.module.css";
import { useRouter } from "next/navigation";
import useProject from "@/app/lib/projectContext";

export default function Project({ data }: { data: any }) {
    const { updateProject } = useProject();
    const router = useRouter();
    console.log(data);
    const { duration, unit } = parseDiffFromNow(data.updatedAt);
    function onProjectSelection() {
        updateProject(data._id, data.title, data.episodes.length > 0, "");
        router.push(`/project`);
    }
    return (
        <div onClick={onProjectSelection} className={styles.projectContainer}>
            <div
                className={styles.avatar}
                style={{ backgroundColor: `${data.colorHex || "#f8a01d"}` }}
            >
                {data.initials.toUpperCase()}
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.projectTitle}>{data.title}</p>
                    <p>{data.episodes.length} Episodes</p>
                </div>
                <p className={`${styles.updatedAt} text-stale`}>
                    Last edited {`${duration} ${unit}`} ago
                </p>
            </div>
        </div>
    );
}

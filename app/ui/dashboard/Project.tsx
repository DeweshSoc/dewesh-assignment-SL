import { parseDiffFromNow } from "@/app/lib/utils";
import styles from "./Project.module.css";


export default function Project({data}:{data:any}) {

    const {duration, unit} = parseDiffFromNow(data.updatedAt);
    return (
        <div className={styles.projectContainer}>
            <div className={styles.avatar} style={{ backgroundColor: `${data.colorHex || "#f8a01d"}` }}>
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

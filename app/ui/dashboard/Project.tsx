import styles from "./Project.module.css";

export default function Project() {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.avatar}>SP</div>
            <div className={styles.details}>
                <div>
                    <p className={styles.projectTitle}>Sample Project</p>
                    <p>4 Episodes</p>
                </div>
                <p className={`${styles.updatedAt} text-stale`}>Last edited a week ago</p>
            </div>
        </div>
    );
}

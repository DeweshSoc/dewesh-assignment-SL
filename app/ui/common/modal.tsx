import styles from "./modal.module.css"

export function Modal({
    modalTitle,
    children
}: {
    modalTitle: string;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.modalContainer}>
                <h1>{modalTitle}</h1>
                {children}
            </div>
        </div>
    );
}

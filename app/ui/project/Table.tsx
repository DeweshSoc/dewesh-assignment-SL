import Image from "next/image";
import styles from "./Table.module.css"
import shareIcon from "@/public/share.svg";

interface Header{
    title:string;
    width:5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 65 | 70 | 80 ;
}

interface Row{
    data:string;
    width:5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 65 | 70 | 80 ;
}

export default function Table() {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}> 
                <div className={`${styles.cell} ${styles.tableCell10}`}>No</div>
                <div className={`${styles.cell} ${styles.tableCell30}`}>Name</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>Upload Date & Time</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>Status</div>
                <div className={`${styles.cell} ${styles.tableCell15}`}>Action</div>
                <div className={`${styles.cell} ${styles.tableCell5}`}></div>
            </div>
            <div className={styles.tableRow}>
                <div className={`${styles.cell} ${styles.tableCell10}`} >1</div>
                <div className={`${styles.cell} ${styles.tableCell30}`}>THE SIDEPOD S2 EPISODE 15</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>25 Oct 23 | 09:04</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>
                    <button className="btn btn-round btn-pending">
                        In Progress
                    </button>
                </div>
                <div className={`${styles.cell} ${styles.tableCell15}`}>
                    <div className={styles.action}>
                        <div className={styles.buttons}>
                            <button>View</button>
                            <button className="btn-cancel">Delete</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.cell} ${styles.tableCell5}`}>
                        <Image src={shareIcon} alt="share icon" />
                </div>
            </div>
        </div>
    );
}

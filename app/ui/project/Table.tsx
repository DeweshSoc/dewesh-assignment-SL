import Image from "next/image";
import styles from "./Table.module.css";
import shareIcon from "@/public/share.svg";
import { useRouter } from "next/navigation";
import useAuth from "@/app/lib/userContext";
import useProject from "@/app/lib/projectContext";
import {toast  } from "react-toastify"
import { deleteEpisodeService } from "@/app/lib/dataServices";

export interface Header {
    title: string;
    width: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 65 | 70 | 80;
    id: number;
}

interface RowCell {
    data: any;
    width: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 65 | 70 | 80;
    id: number;
    field: string;
}

export interface Row {
    metaData: any;
    id: number;
    cells: RowCell[];
}

export default function Table({
    headers,
    rows,
    triggerReload
}: {
    headers: Header[];
    rows: Row[];
    triggerReload:Function
}) {
    const router = useRouter();
    const {user, logout} = useAuth();
    const { project, updateProject } = useProject();

    function handleView(metaData: any) {
        updateProject(
            project?._id as string,
            project?.title as string,
            project?.hasEpisodes as boolean,
            metaData._id
        );
        router.push("/project/edit");
    }

    async function handleDelete(metaData:any){
        try {
            if (!metaData || !metaData._id) {
                toast.error("No Episode");
                router.push("/project");
                return;
            }
            
            const response = await deleteEpisodeService(
                metaData._id,
                project?._id as string,
                user?.token as string
            );
            toast.success(`${response?.message}`);
            triggerReload();
        } catch (err: any) {
            if (err.status === 403) {
                await logout();
            }
            console.error(err);
            toast.error(err.message);
        } 
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
                {headers.map((header) => {
                    return (
                        <div
                            key={header.id}
                            className={`${styles.cell} ${
                                styles[`tableCell${header.width}`]
                            }`}
                        >
                            {header.title}
                        </div>
                    );
                })}
            </div>

            {rows.map((row) => {
                return (
                    <div key={row.id} className={styles.tableRow}>
                        {row.cells.map((cell) => {
                            return (
                                <div
                                    key={cell.id}
                                    className={`${styles.cell} ${
                                        styles[`tableCell${cell.width}`]
                                    }`}
                                >
                                    {cell.field === "status" ? (
                                        <button
                                            className={`btn btn-round btn-${cell.data.toLowerCase()}`}
                                        >
                                            {cell.data}
                                        </button>
                                    ) : (
                                        cell.data
                                    )}
                                </div>
                            );
                        })}
                        <div className={`${styles.cell} ${styles.tableCell15}`}>
                            <div className={styles.action}>
                                <div className={styles.buttons}>
                                    <button
                                        onClick={() => {
                                            handleView(row.metaData);
                                        }}
                                    >
                                        View
                                    </button>
                                    <button className="btn-cancel" onClick={()=>{
                                        handleDelete(row.metaData);
                                    }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.cell} ${styles.tableCell5}`}>
                            <Image src={shareIcon} alt="share icon" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

{
    /* 
            <div className={`${styles.cell} ${styles.tableCell10}`}>1</div>
            <div className={`${styles.cell} ${styles.tableCell30}`}>
            THE SIDEPOD S2 EPISODE 15
            </div>
            <div className={`${styles.cell} ${styles.tableCell20}`}>
            25 Oct 23 | 09:04
            </div>

            <div
                className={`${styles.cell} ${styles.tableCell20}`}
            >
                <button className="btn btn-round btn-pending">
                    In Progress
                </button>
            </div>
 */
}

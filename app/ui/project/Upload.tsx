import Image from "next/image";
import Table from "./Table";
import moment from "moment";

import styles from "./Upload.module.css";
import cloudIcon from "@/public/cloud.svg";

import { Header, Row } from "./Table";

export default function Upload({
    episodes,
    trigger,
}: {
    episodes: any[];
    trigger: Function;
}) {
    const headers: Header[] = [
        { title: "No", width: 10, id: 1 },
        { title: "Name", width: 30, id: 2 },
        { title: "Upload Date & Time", width: 20, id: 3 },
        { title: "Status", width: 20, id: 4 },
        { title: "Action", width: 15, id: 5 },
        { title: "", width: 5, id: 6 },
    ];

    const rows = episodes.map((ep, epIdx) => {
        const metaData = ep;
        const cells = [];
        cells.push({
            data: epIdx + 1,
            width: 10,
            id: Number(`1${epIdx}`),
            field: "no",
        });
        cells.push({
            data: ep.title,
            width: 30,
            id: Number(`2${epIdx}`),
            field: "name",
        });
        cells.push({
            data: moment(ep.uploadedAt).format("DD MMM yy | hh:mm"),
            width: 20,
            id: Number(`3${epIdx}`),
            field: "uploadedAt",
        });
        cells.push({
            data: ep.status,
            width: 20,
            id: Number(`4${epIdx}`),
            field: "status",
        });
        return {
            metaData,
            cells,
            id: epIdx,
        };
    });

    const noUploads = (
        <div className={styles.uploadContainer}>
            <Image src={cloudIcon} alt="upload dock" />
            <p className={styles.title}>
                Select a file or drag and drop here (Podcast Media or
                Transcription Text)
            </p>
            <p className={styles.subtitle}>
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
            </p>
            <button> Select File</button>
        </div>
    );

    return (
        <>
            {episodes.length === 0 ? (
                noUploads
            ) : (
                <>
                    <div className={styles.banner}>
                        1 file(s) are in progress, you would get an email on
                        tom@giftkart.app once the transcription is complete.
                    </div>
                    <div className={styles.fileContainer}>
                        <h2>Your Files</h2>
                        <Table
                            headers={headers}
                            rows={rows as Row[]}
                            triggerReload={() => trigger()}
                        ></Table>
                    </div>
                </>
            )}
        </>
    );
}

{
    /* 
                <div className={`${styles.cell} ${styles.tableCell10}`}>No</div>
                <div className={`${styles.cell} ${styles.tableCell30}`}>Name</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>Upload Date & Time</div>
                <div className={`${styles.cell} ${styles.tableCell20}`}>Status</div>
                <div className={`${styles.cell} ${styles.tableCell15}`}>Action</div>
                <div className={`${styles.cell} ${styles.tableCell5}`}></div> */
}

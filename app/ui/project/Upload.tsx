import Image from "next/image";
import Table from "./Table"

import styles from "./Upload.module.css";
import cloudIcon from "@/public/cloud.svg";



export default function Upload() {
    const episodes = 0;

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
            {!episodes ? (
                noUploads
            ) : (
                <>
                    <div className={styles.banner}>
                        1 file(s) are in progress, you would get an email on
                        tom@giftkart.app once the transcription is complete.
                    </div>
                    <div className={styles.fileContainer}>
                        <h2>Your Files</h2>
                        <Table></Table>
                    </div>
                </>
            )}
        </>
    );
}

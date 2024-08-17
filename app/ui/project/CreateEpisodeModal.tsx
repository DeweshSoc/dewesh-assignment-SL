import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

import { Modal } from "../common/Modal";
import styles from "./CreateEpisodeModal.module.css";
import { createEpisodeService } from "@/app/lib/dataServices";
import useAuth from "@/app/lib/userContext";
import useProject from "@/app/lib/projectContext";

export default function CreateEpisodeModal({
    onModalCancel,
    triggerFetch,
}: {
    onModalCancel: Function;
    triggerFetch?: Function;
}) {
    const [errorMessageEpisode, setErrorMessageEpisode] = useState("");
    const [errorMessageTranscript, setErrorMessageTranscript] = useState("");
    const [episodeName, setEpisodeName] = useState("");
    const [transcript, setTranscript] = useState("");
    const { user, logout } = useAuth();
    const { project, updateProject } = useProject();
    // const pathName = usePathname();
    // const router = useRouter();

    document.documentElement.style.overflow = "hidden";

    function handleInputEpisodeName(e: SyntheticEvent) {
        const value = (e.target as HTMLInputElement).value;
        if (!value) {
            setErrorMessageEpisode("Episode name cannot be empty");
        } else {
            setErrorMessageEpisode("");
        }
        setEpisodeName(value);
    }

    function handleInputTranscript(e: SyntheticEvent) {
        const value = (e.target as HTMLInputElement).value;
        if (!value) {
            setErrorMessageTranscript("Transcript cannot be empty");
        } else {
            setErrorMessageTranscript("");
        }
        setTranscript(value);
    }

    async function handleSubmit(e: SyntheticEvent) {
        try {
            e.preventDefault();
            if (!episodeName) {
                setErrorMessageEpisode("Episode name cannot be empty");
                return;
            }
            if (!transcript) {
                setErrorMessageTranscript("Transcript cannot be empty");
                return;
            }

            const response = await createEpisodeService(
                episodeName,
                transcript,
                project?._id as string,
                user?.token as string
            );

            const { hasEpisode } = response.data;

            updateProject(
                project?._id as string,
                project?.title as string,
                hasEpisode,
                ""
            );
            toast.success(`${response?.message}`);

            if (triggerFetch) {
                triggerFetch();
            }
            onModalCancel();
        } catch (err: any) {
            if (err.status === 403) {
                await logout();
            }
            console.error(err);
            toast.error(err.message);
        }
    }

    return (
        <Modal modalTitle="Upload from Youtube">
            <div className={styles.modalContent}>
                {/* <div> */}
                <label htmlFor="episodeName">Name:</label>
                <input
                    type="text"
                    id="episodeName"
                    name="episodeName"
                    value={episodeName}
                    onChange={handleInputEpisodeName}
                />
                <p className="text-red">{errorMessageEpisode}</p>
                {/* </div> */}
                {/* <div> */}
                <label htmlFor="transcript">Transcript:</label>
                <input
                    type="text"
                    id="transcript"
                    name="transcript"
                    value={transcript}
                    onChange={handleInputTranscript}
                />
                <p className="text-red">{errorMessageTranscript}</p>
                {/* </div> */}
                <div className={styles.buttonsContainer}>
                    <button
                        className="btn btn-cancel btn-transparent"
                        onClick={() => {
                            onModalCancel();
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </Modal>
    );
}

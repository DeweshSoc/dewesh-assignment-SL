"use client";

import Image from "next/image";
import styles from "./edit.module.css";
import { SyntheticEvent, useEffect, useState } from "react";
import backIcon from "@/public/back.svg";
import { toast } from "react-toastify";
import useAuth from "@/app/lib/userContext";
import useProject from "@/app/lib/projectContext";
import { useRouter } from "next/navigation";
import { fetchEpisodeByIdService } from "@/app/lib/dataServices";
import { IEpisode, updateEpisodeService } from "@/app/lib/dataServices";

export default function Page() {
    const [editing, setEditing] = useState(false);
    const [episode, setEpisode] = useState<IEpisode | null>(null);
    const [initialTranscript, setInitialTranscript] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(true);
    const { user, isAuthenticated, logout } = useAuth();
    const { project } = useProject();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/");
        }
        if (!project) {
            router.push("/dashboard");
        }
        if (!project?.currentEpisode) {
            router.push("/project");
        }
    }, []);

    useEffect(() => {
        async function getPageData() {
            try {
                const response = await fetchEpisodeByIdService(
                    project?._id as string,
                    project?.currentEpisode as string,
                    user?.token as string
                );
                setEpisode(response.data.episode);
                setInitialTranscript(response.data.episode.transcript);
            } catch (err: any) {
                if (err.status === 403) {
                    await logout();
                }
                toast.error(err.message);
            }
        }
        if (!user?.token) return;
        if (!project) return;
        if (triggerFetch) {
            getPageData();
            setTriggerFetch(false);
        }
    }, [triggerFetch]);

    async function handleSubmit(e: SyntheticEvent) {
        try {
            e.preventDefault();
            if (!episode) {
                toast.error("No Episode");
                router.push("/project");
                return;
            }
            const response = await updateEpisodeService(
                episode,
                project?._id as string,
                user?.token as string
            );
            toast.success(`${response?.message}`);
            setEditing(false);
        } catch (err: any) {
            if (err.status === 403) {
                await logout();
            }
            console.error(err);
            toast.error(err.message);
        }
    }

    // const data =
    const view = (
        <div className={styles.viewBox}>
            <div className={styles.viewContainer}>
                <h3>Speaker</h3>
                {episode?.transcript}
            </div>
        </div>
    );

    const edit = (
        <div className={styles.editBox}>
            <textarea
                className={styles.editContainer}
                value={episode?.transcript}
                name="transcript"
                onChange={(e) => {
                    if (!episode) return;
                    setEpisode({
                        ...episode,
                        transcript: e.target.value,
                    });
                }}
            />
        </div>
    );

    return (
        <div className={styles.outlet}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <Image
                        src={backIcon}
                        alt="back"
                        onClick={() => router.back()}
                    ></Image>
                    <h1>Edit Transcript</h1>
                </div>
                <div className={styles.buttons}>
                    {!editing ? (
                        <button onClick={() => setEditing(true)}>Edit</button>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    if (!episode) return;
                                    setEpisode({
                                        ...episode,
                                        transcript: initialTranscript,
                                    });
                                    setEditing(false);
                                }}
                                className="btn-cancel btn-outline-cancel"
                            >
                                Discard
                            </button>
                            <button
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                Save
                            </button>
                        </>
                    )}
                </div>
            </div>

            {!editing ? view : edit}
        </div>
    );
}

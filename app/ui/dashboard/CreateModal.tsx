import { SyntheticEvent, useState } from "react";
import {toast} from "react-toastify"

import { Modal } from "../common/Modal";
import styles from "./CreateModal.module.css"
import { createProjectService } from "@/app/lib/dataServices";
import { useRouter } from "next/navigation";

export default function CreateProjectModal({onModalCancel}:{onModalCancel:Function}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [projectName, setProjectName] = useState("");
    const router = useRouter();

    document.documentElement.style.overflow = "hidden"

    function handleInput(e:SyntheticEvent){
        const value = (e.target as HTMLInputElement).value;
        setProjectName(value);  
    }   


    async function handleSubmit(e:SyntheticEvent){
        try {
            e.preventDefault();
            if (!projectName) {
                setErrorMessage("Project name cannot be empty");
                return;
            }
            const response = await createProjectService(projectName);
            toast.success(`${response?.message || "Login successful"}`);
            router.push("/dashboard/project-deck");
        } catch (err: any) {
            console.error(err);
            toast.error(err.message);
        }  
    }


    return (
        <Modal modalTitle="Create Project">
            <div className={styles.modalContent}>
                <label htmlFor="projectName">Enter Project Name:</label>
                <input type="text" id="project" name="projectName" value={projectName} onChange={handleInput} placeholder="Type here"/>
                <p className="text-red">{errorMessage}</p>
                <div className={styles.buttonsContainer}>
                    <button className="btn btn-cancel btn-transparent" onClick={()=>{onModalCancel()}}>Cancel</button>
                    <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Create</button>
                </div>
            </div>
        </Modal>
    );
}
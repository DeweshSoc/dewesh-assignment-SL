import { SyntheticEvent, useState } from "react";
import { Modal } from "../common/Modal";
import styles from "./CreateModal.module.css"

export default function CreateProjectModal({onModalCancel}:{onModalCancel:Function}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [projectName, setProjectName] = useState("");

    document.documentElement.style.overflow = "hidden"

    function handleInput(e:SyntheticEvent){
        const value = (e.target as HTMLInputElement).value;
        setProjectName(value);  
    }   


    function handleSubmit(){
        if(!projectName){
            setErrorMessage("Project name cannot be empty");
            return;
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
                    <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </Modal>
    );
}
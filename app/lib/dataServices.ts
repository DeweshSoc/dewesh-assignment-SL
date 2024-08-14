import { API_ENDPOINTS } from "../_constants";
import { sendPostRequest } from "./httpRequests";



export async function createProjectService(projectTitle:string) : Promise<any>{
    try {

        if(!projectTitle){
            throw new Error("Missing project title");
        }

        const projects = await sendPostRequest(
            API_ENDPOINTS.POST_PROJECT_CREATE,
            {
                method: "POST",
                body: JSON.stringify({
                    projectTitle,
                }),
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmJjYWM3ZDE2ZWVkNmQ1MjdlYTA2ZmUiLCJlbWFpbCI6ImRld0B5b3AuY29tIiwiaWF0IjoxNzIzNjQwOTc1LCJleHAiOjE3MjM4MTM3NzV9.MmQHdgHkQP0srLj8qT4hFyjvzb4uFp562LLFso7nB3M`,
                },
            }
        );

        return projects;

    } catch (err) {
        console.error(err);
        throw err;
    }
}
import { API_ENDPOINTS } from "../_constants";
import { sendPostRequestAuth, sendGetRequestAuth } from "./httpRequests";



export async function createProjectService(projectTitle:string, token:string) : Promise<any>{
    try {

        if(!projectTitle){
            throw new Error("Missing project title");
        }
        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_PROJECT_CREATE,
            {
                body: JSON.stringify({
                    projectTitle,
                }),
                token
            }
        );

        return projects;

    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function fetchProjectService(token:string): Promise<any> {
    try {
        const projects = await sendGetRequestAuth(
            API_ENDPOINTS.GET_PROJECTS_ALL,
            {
                token
            }
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}



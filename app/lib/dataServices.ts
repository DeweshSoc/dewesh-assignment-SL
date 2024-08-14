import { API_ENDPOINTS } from "../_constants";
import { sendPostRequest, sendPostRequestAuth, sendGetRequestAuth } from "./httpRequests";



export async function createProjectService(projectTitle:string) : Promise<any>{
    try {

        if(!projectTitle){
            throw new Error("Missing project title");
        }

        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_PROJECT_CREATE,
            {
                body: JSON.stringify({
                    projectTitle,
                })
            }
        );

        return projects;

    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function fetchProjectService(): Promise<any> {
    try {
        const projects = await sendGetRequestAuth(
            API_ENDPOINTS.GET_PROJECTS_ALL,{}
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}



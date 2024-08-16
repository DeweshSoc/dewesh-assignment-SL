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

export async function createEpisodeService(episodeName:string, transcript:string, projectId:string, token:string) : Promise<any>{
    try {

        if(!episodeName){
            throw new Error("Missing Episode Name");
        }
        
        if(!transcript){
            throw new Error("Missing transcript");
        }

        const episode = await sendPostRequestAuth(
            API_ENDPOINTS.POST_EPISODE_CREATE,
            {
                body: JSON.stringify({
                    episodeName,
                    transcript,
                    projectId
                }),
                token
            }
        );

        return episode;

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
export async function fetchEpisodeService(projectId:string,token:string): Promise<any> {
    try {
        const body = JSON.stringify({
            projectId,
        });
        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_FETCH_EPISODES,
            {   
                body,
                token
            }
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}




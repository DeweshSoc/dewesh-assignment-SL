import { API_ENDPOINTS } from "../_constants";
import { sendPostRequestAuth, sendGetRequestAuth } from "./httpRequests";


export interface IEpisode {
    _id: string;
    user: string;
    project: string;
    status: string;
    title: string;
    transcript: string;
    uploadedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}




export async function createProjectService(
    projectTitle: string,
    token: string
): Promise<any> {
    try {
        if (!projectTitle) {
            throw new Error("Missing project title");
        }
        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_PROJECT_CREATE,
            {
                body: JSON.stringify({
                    projectTitle,
                }),
                token,
            }
        );

        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function createEpisodeService(
    episodeName: string,
    transcript: string,
    projectId: string,
    token: string
): Promise<any> {
    try {
        if (!episodeName) {
            throw new Error("Missing Episode Name");
        }

        if (!transcript) {
            throw new Error("Missing transcript");
        }

        const episode = await sendPostRequestAuth(
            API_ENDPOINTS.POST_EPISODE_CREATE,
            {
                body: JSON.stringify({
                    episodeName,
                    transcript,
                    projectId,
                }),
                token,
            }
        );

        return episode;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


export async function fetchProjectService(token: string): Promise<any> {
    try {
        const projects = await sendGetRequestAuth(
            API_ENDPOINTS.GET_PROJECTS_ALL,
            {
                token,
            }
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
export async function fetchEpisodeService(
    projectId: string,
    token: string
): Promise<any> {
    try {
        const body = JSON.stringify({
            projectId,
        });
        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_FETCH_EPISODES,
            {
                body,
                token,
            }
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function fetchEpisodeByIdService(
    projectId: string,
    episodeId:string,
    token: string
): Promise<any> {
    try {
        const body = JSON.stringify({
            projectId,
            episodeId
        });
        const projects = await sendPostRequestAuth(
            API_ENDPOINTS.POST_FETCH_EPISODE_BY_ID,
            {
                body,
                token,
            }
        );
        return projects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


export async function updateEpisodeService(
    episode: IEpisode,
    projectId:string,
    token: string
): Promise<any> {
    try {
        if (!episode) {
            throw new Error("Missing Episode");
        }
        if (!projectId) {
            throw new Error("Missing project id");
        }

        if (!episode.transcript) {
            throw new Error("Missing transcript");
        }

        const response = await sendPostRequestAuth(
            API_ENDPOINTS.POST_UPDATE_EPISODE,
            {
                body: JSON.stringify({
                    episode,
                    projectId,
                }),
                token,
            }
        );

        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
export async function deleteEpisodeService(
    episodeId: string,
    projectId:string,
    token: string
): Promise<any> {
    try {
        if (!episodeId) {
            throw new Error("Missing Episode id");
        }

        if (!projectId) {
            throw new Error("Missing project id");
        }

        const response = await sendPostRequestAuth(
            API_ENDPOINTS.POST_DELETE_EPISODE,
            {
                body: JSON.stringify({
                    episodeId,
                    projectId,
                }),
                token,
            }
        );

        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


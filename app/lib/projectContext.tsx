"use client";

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { usePathname, useRouter } from "next/navigation";
// import { loginService, logoutService, signupService } from "./authServices";

export interface IProject {
    _id:string,
    title:string,
}

interface ProjectContextType {
    project?: IProject;
    updateProject:(projectId:string, projectTitle:string)=>void;
    loading: boolean;
    error?: any;
}

const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

// Export the provider as we need to wrap the entire app with it
export function ProjectProvider({
    children,
}: {
    children: ReactNode;
}): React.JSX.Element {
    const [project, setProject] = useState<IProject>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const [localStoreUpdate, setLocalStoreUpdate] = useState<boolean>(false);
    const location = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (error) setError(null);
    }, [location]);

  

    useEffect(()=>{
        if(localStoreUpdate){
            const storedUser = localStorage.getItem("project");
            if(project){
                localStorage.setItem("project",JSON.stringify(project));
            }else if(storedUser){
                localStorage.removeItem("project");
            }
            setLocalStoreUpdate(false);
        }
        
    },[localStoreUpdate]);


    useEffect(() => {
        const storedProject = localStorage.getItem("project");
        if (!storedProject) {
            setLoadingInitial(false);
            return;
        }
        const { _id, title } = JSON.parse(storedProject);

        if (_id) {
            setProject({
                _id,
                title
            });
        }
        setLoadingInitial(false);
    }, []);

    async function updateProject(projectId:string,projectTitle:string){
        setProject({
            _id:projectId,
            title:projectTitle
        })
        setLocalStoreUpdate(true);
    }

    const memoedValue = useMemo(
        () => ({
            project,
            updateProject,
            loading,
            error
        }),
        [project, loading, error]
    );

    
    return (
        <ProjectContext.Provider value={memoedValue}>
                {!loadingInitial && children}
        </ProjectContext.Provider>
    );
}

export default function useProject() {
    return useContext(ProjectContext);
}

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
import { loginService, logoutService, signupService } from "./authServices";

import ToastProvider from "../ui/common/react-toastify";
import { toast } from "react-toastify";
export interface IUser {
    token: string;
    hasProject: boolean;
    loggedIn: boolean;
    email: string;
    username: string;
}

interface AuthContextType {
    // We defined the user type in `index.d.ts`, but it's
    // a simple object with email, name and password.
    user?: IUser;
    loading: boolean;
    error?: any;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
    updateHasProject: (hasPassword: boolean) => void;
    updateUsername: (username: string) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
    children,
}: {
    children: ReactNode;
}): React.JSX.Element {
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const [localStoreUpdate, setLocalStoreUpdate] = useState<boolean>(false);
    const location = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (error) setError(null);
    }, [location]);

    useEffect(() => {
        if (localStoreUpdate) {
            const storedUser = localStorage.getItem("user");
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
            } else if (storedUser) {
                localStorage.removeItem("user");
                localStorage.removeItem("project");
            }
            setLocalStoreUpdate(false);
        }
    }, [localStoreUpdate]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            setLoadingInitial(false);
            return;
        }
        const { token, loggedIn, hasProject, email, username } =
            JSON.parse(storedUser);

        if (token) {
            setUser({
                token,
                loggedIn,
                hasProject,
                email,
                username,
            });
        }
        setLoadingInitial(false);
    }, []);

    async function login(email: string, password: string) {
        try {
            setLoading(true);

            const res = await loginService(email, password);
            const {
                token,
                hasProject,
                username,
                email: emailAddress,
            } = res.data;
            setUser({
                token,
                loggedIn: true,
                hasProject,
                username,
                email: emailAddress,
            });
            setLocalStoreUpdate(true);
            router.push("/dashboard");
        } catch (err) {
            setError(err);
            console.error("AUTH ERROR -> " + err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function updateHasProject(hasProject: boolean) {
        if (user) {
            setUser({
                token: user?.token,
                loggedIn: user?.loggedIn,
                hasProject,
                email: user?.email,
                username: user?.username,
            });
            setLocalStoreUpdate(true);
        }
    }

    async function updateUsername(username: string) {
        if (user) {
            setUser({
                token: user?.token,
                loggedIn: user?.loggedIn,
                hasProject: user?.hasProject,
                email: user?.email,
                username,
            });
            setLocalStoreUpdate(true);
        }
    }

    async function logout() {
        try {
            if (!user?.token) {
                console.error("No Token");
                return;
            }
            await logoutService(user?.token);
            setUser(undefined);
            setLocalStoreUpdate(true);
            router.push("/");
            toast.success("Logout successful");
        } catch (err: any) {
            setError(err);
            console.error("AUTH ERROR -> " + err);
        }
    }

    function isAuthenticated() {
        return !!(user && user.token);
    }

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            logout,
            updateHasProject,
            isAuthenticated,
            updateUsername,
        }),
        [user, loading, error]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {/* <ToastProvider> */}
            {!loadingInitial && children}
            {/* </ToastProvider> */}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}

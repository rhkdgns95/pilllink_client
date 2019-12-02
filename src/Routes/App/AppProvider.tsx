import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { GET_MY_PROFILE } from "./AppQueries";
import { getMyProfile_GetMyProfile_user, getMyProfile } from "../../Types/api";

interface IContext {
    loadingGetMyProfile: boolean;
    timeOut: number;
    isProgress: boolean;
    user: getMyProfile_GetMyProfile_user | null;
    handleProgress: (isProgress: boolean) => any;
    handleTitle: (title: string) => any;
}

const AppTitle: string = "Pill Link";


const InitContext: IContext = {
    timeOut: 0,
    loadingGetMyProfile: false,
    user: null,
    isProgress: false,
    handleProgress: () => {},
    handleTitle: () => {}
};

const AppContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useAppContext = () => useContext(AppContext);
const useFetch = (loggedIn: boolean): { value: IContext } => {
    const timeOut:number = 500;
    const [ user, setUser ] = useState<getMyProfile_GetMyProfile_user | null>(null);

    const { data: queryProfile, loading: loadingGetMyProfile } = useQuery<getMyProfile>(GET_MY_PROFILE, {
        onCompleted: data => {
            const { GetMyProfile: { ok, user } } = data;
            if(ok && user) {
                if(data.GetMyProfile.ok) {
                    setUser(user);
                }
            }
        },
        skip: !loggedIn
    });
    const [ isProgress, setIsProgress ] = useState<boolean>(false);
    const [ title, setTitle ] = useState<string>(AppTitle);
    
    const handleTitle = (title: string) => {
        setTitle(title);
    }
    const handleProgress = (data: boolean) => {
        setIsProgress(data);
    }
    useEffect(() => {
        document.title = title;
    }, [title])

    return {
        value: {
            loadingGetMyProfile,
            isProgress,
            handleTitle,
            handleProgress,
            timeOut,
            user
        }
    };
}
interface IProps {
    loggedIn: boolean;
}
const AppProvider: React.FC<IProps> = ({
    children,
    loggedIn
}) => {
    return (
        <AppContext.Provider { ...useFetch(loggedIn) }>
            {
                children
            }
        </AppContext.Provider>
    )
}

export { useAppContext };
export default AppProvider;
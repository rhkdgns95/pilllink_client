import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo";
import { GET_MY_PROFILE } from "./AppQueries";
import { getMyProfile_GetMyProfile_user, getMyProfile, updateMyProfile, updateMyProfileVariables } from "../../Types/api";
import { UPDATE_MY_RPFOILE } from "../Edit/EditQueries";
import { USER_LOGOUT } from "./AppQueries.local";

interface IContext {
    loadingGetMyProfile: boolean;
    timeOut: number;
    isProgress: boolean;
    user: getMyProfile_GetMyProfile_user | null;
    handleProgress: (isProgress: boolean) => any;
    handleTitle: (title: string) => any;
    message: IMessage;
    updateMyprofile: (data: { variables: updateMyProfileVariables }) => any;
    loadingUpdateMyProfile: boolean;
    logout: () => any;
}

const AppTitle: string = "Pill Link";

export const PUBLIC_PATH: string = process.env.PUBLIC_URL
export const PATH_ALL_IMGS: string = PUBLIC_PATH + "/images";
export const PATH_IMG_BG: string = PATH_ALL_IMGS + "/bg";
export const PATH_IMG_LANG: string = PATH_ALL_IMGS + "/lang";
export const PATH_IMG_NA: string = PATH_ALL_IMGS + "/nationality";
export const PATH_IMG_DETAILS: string = PATH_ALL_IMGS + "/details";
export const PATH_IMG_ACTION: string = PATH_ALL_IMGS + "/action";

const InitContext: IContext = {
    timeOut: 0,
    loadingGetMyProfile: false,
    user: null,
    isProgress: false,
    handleProgress: () => {},
    handleTitle: () => {},
    message: { ok: true, data: "", onChangeMessage: () => {} },
    updateMyprofile: () => {},
    loadingUpdateMyProfile: false,
    logout: () => {}
};



const AppContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useAppContext = () => useContext(AppContext);

const useMessage = (): IMessage => {
    const [ok, setOk] = useState<boolean>(true);
    const [data, setData] = useState<string>("");
    
    const onChangeMessage = ({ok, data}: {ok: boolean, data: string}) => {
        // console.log("Message_ok: ", ok);
        // console.log("Message_message: ", data);
        setOk(ok);
        setData(data);
    };
    return {
        ok,
        data,
        onChangeMessage
    };
};

const useFetch = (loggedIn: boolean): { value: IContext } => {
    const timeOut:number = 500;
    const message = useMessage();
    
    /**
     * 
     *  GetMyProfile
     */
    const { loading: loadingGetMyProfile, data } = useQuery<getMyProfile>(GET_MY_PROFILE, {
        // fetchPolicy: "cache-and-network",
        onCompleted: data => {
            const { GetMyProfile: { ok, user } } = data;
            if(ok && user) {
                if(data.GetMyProfile.ok) {
                    // console.log("data.GetMyProfile.ok: ", data.GetMyProfile);
                }
            }
        },
        onError: data => {
            console.log("GetMyProfile error: ", data);
        },
        skip: !loggedIn
    });
    /**
     *  
     *  User Logout
     */
    const [ logout ] = useMutation(USER_LOGOUT);
    
    
    const user = data ? data.GetMyProfile.user : null;

    /**
     *  UpdateMyProfile
     */
    const [ updateMyprofile, { loading: loadingUpdateMyProfile }] = useMutation<updateMyProfile, updateMyProfileVariables>(UPDATE_MY_RPFOILE, {
        onCompleted: data => {
            const { UpdateMyProfile: { ok, error }} = data;
            setTimeout(() => {
                if(ok) {
                    message.onChangeMessage({
                        ok,
                        data: "Updated!"
                    });
                } else {
                    message.onChangeMessage({
                        ok,
                        data: error
                    });
                }    
                if(isProgress) {
                    handleProgress(false);
                }
            }, timeOut);
        },
        onError: data => {
            console.log("UpdateMyProfile error: ", data);
            if(isProgress) {
                handleProgress(false);
            }
            message.onChangeMessage({
                ok: false,
                data: data.message
            });
        },
        // update: (cache, { data }) => {
            
        //    if(data && data.UpdateMyProfile && data.UpdateMyProfile.ok) {
        //        const { user } = data.UpdateMyProfile
        //        alert("HI");

        //        cache.writeQuery({
        //            query: GET_MY_PROFILE,
        //            data
        //        });

        //        console.log("user: ", user)
        //    }
        // },
        refetchQueries: [
            {query: GET_MY_PROFILE}
        ]
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
        // User 데이터 변경시,
    }, [data])
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
            user,
            message,
            updateMyprofile,
            loadingUpdateMyProfile,
            logout
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
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useLazyQuery, useMutation } from "react-apollo";
import { emailSignIn, emailSignInVariables } from "../../Types/api";
import { LOGIN_QUERY } from "./LoginQueries";
import { useAppContext } from "../App/AppProvider";
import { USER_LOGGED_IN } from "./LoginQueries.local";

interface IContext {
    loginLoading: boolean;
    error: string | null;
    userId: IUseInputText;
    password: IUseInputText;
    handleLogin: any;
    element: any;
    handleError: (message: string | null) => any;
    isModal: boolean;
    toggleModal: () => any;
    // forgotMyAccount: () => any;
}

const InitContext: IContext = {
    error: null,
    loginLoading: false,
    element: null,
    userId: { onChange: () => {}, placeholder: "", value: "" },
    password: { onChange: () => {}, placeholder: "", value: "" },
    handleLogin: () => {},
    handleError: () => {},
    isModal: false,
    toggleModal: () => {},
    // forgotMyAccount: () => {}
}

const LoginContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useLoginContext = () => useContext(LoginContext);

const useInputText = (placeholder: string) => {
    const [value, setValue] = useState<string>("");

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }

    return {
        placeholder,
        value,
        onChange
    };
};

const title = "Pil+Link | Login";

const useFetch = (): {value: IContext} => {
    const { handleTitle, isProgress, handleProgress } = useAppContext();
    const [ error, setError ] = useState<string | null>(null);
    
    const handleError = (message: string | null) => {
        setError(message);
    }

    const element = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        handleTitle(title);
        if(element.current) {
            element.current.focus();
        }
    }, []);
    
    const userId = useInputText("ID");
    const password = useInputText("PASSWORD");
    const [ userLoggedIn ] = useMutation(USER_LOGGED_IN);
    const [ isModal, setIsModal ] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const [ handleLogin, { loading: loginLoading } ] = useLazyQuery<emailSignIn, emailSignInVariables>(LOGIN_QUERY, {
        fetchPolicy: "cache-and-network",
        onCompleted: data => {
            const { EmailSignIn: { ok, token, error }} = data;
            if(isProgress) {
                handleProgress(false);
            }
            if(ok && token) {
                userLoggedIn({
                    variables: {
                        token
                    }
                });
            } else {
                handleError(error);
            }
        },  
        onError: data => {
            if(isProgress) {
                handleProgress(false);
            }
            console.log("handle login error: ", data);
        }
    });

    return {
        value: {
            loginLoading,
            userId,
            password,
            handleLogin,
            element,
            error,
            handleError,
            isModal,
            toggleModal,
        }
    };
};

const LoginProvider: React.FC<any> = ({
    children
}) => (
    <LoginContext.Provider { ...useFetch() }>
        {
            children
        }
    </LoginContext.Provider>
);

export { useLoginContext };
export default LoginProvider;
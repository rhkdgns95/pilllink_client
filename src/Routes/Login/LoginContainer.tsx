import React from "react";
import LoginPresenter from "./LoginPresenter";
import LoginProvider, { useLoginContext } from "./LoginProvider";
import { useAppContext } from "../App/AppProvider";

const Login = () => (
    <LoginProvider>
        <LoginContainer />
    </LoginProvider>
)


const LoginContainer = () => {
    const { isProgress, handleProgress, timeOut } = useAppContext();
    const { handleLogin, loginLoading, userId: { value: userId }, password: { value: password } } = useLoginContext();
    const onSubmit = () => {
        if(!isProgress && !loginLoading) {
            setTimeout(() => {
                handleLogin({
                    variables: {
                        userId,
                        password
                    }
                });
            }, timeOut);
            handleProgress(true);
        } 
    }
    
    return (
        <LoginPresenter onSubmit={onSubmit}/>
    );
}

export default Login;
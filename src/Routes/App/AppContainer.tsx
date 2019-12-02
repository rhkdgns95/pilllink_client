import React from "react";
import AppProvider, { useAppContext } from "./AppProvider";
import { BrowserRouter, Switch, Route as Router, Redirect } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import Home from "../Home";
import Login from "../Login";

const App = ({data}: {data: any}) => {
    const { loggedIn } = data.auth;
    return (
        <AppProvider loggedIn={loggedIn}> 
            <ProgressBar/>
            <AppContainer { ...data.auth }/>
        </AppProvider>
    )
};

const AppContainer: React.FC<any> = ({
    loggedIn
}) => {
    const { loadingGetMyProfile } = useAppContext();
    return (
        <BrowserRouter>
        {
            loadingGetMyProfile ? (
                // Loading progress.....
                <></>
            ) : (
                loggedIn ? <LoggedIn/> : <LoggedOut/>
            )
        }
        </BrowserRouter>
    );
};

const LoggedIn = () => (
    <Switch>
        <Router path={"/"} component={Home} exact={true}/>
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);

const LoggedOut = () => (
    <Switch>
        <Router path={"/"} component={Login} exact={true}/>
        <Redirect to={"/"} from={"*"}/>
    </Switch>  
);

export default App;
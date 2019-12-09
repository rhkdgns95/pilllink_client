import React from "react";
import AppProvider, { useAppContext } from "./AppProvider";
import { BrowserRouter, Switch, Route as Router, Redirect } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import Home from "../Home";
import Login from "../Login";
import SignUp from "../SignUp";
import Edit from "../Edit";
import History from "../History";


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
    const { loadingGetMyProfile, user } = useAppContext();
    return (
        <BrowserRouter>
        {
            loggedIn ? <LoggedIn/> : <LoggedOut/>
            // (loadingGetMyProfile) ? (
            //     // Loading progress.....
            //     <></>
            // ) : (
            //     loggedIn ? <LoggedIn/> : <LoggedOut/>
            // )
        }
        </BrowserRouter>
    );
};

const LoggedIn = () => (
    <Switch>
        <Router path={"/"} component={Home} exact={true}/>
        <Router path={"/edit"} component={Edit}/>
        <Router path={"/history"} component={History}/>
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);

const LoggedOut = () => (
    <Switch>
        <Router path={"/"} component={Login} exact={true}/>
        <Router path={"/signup"} component={SignUp}/>
        <Redirect to={"/"} from={"*"}/>
    </Switch>  
);

export default App;
import React from "react";
import AppProvider, { PUBLIC_PATH, useAppContext } from "./AppProvider";
import { BrowserRouter, Switch, Route as Router, Redirect } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import Home from "../Home";
import Login from "../Login";
import SignUp from "../SignUp";
import Edit from "../Edit";
import History from "../History";
import Footer from "../../Components/Footer";
import Feedback from "../Feedback";
import Admin from "../Admin";
import Suggestion from "../Suggestion";


const App = ({data}: {data: any}) => {
    const { loggedIn } = data.auth;
    return (
        <AppProvider loggedIn={loggedIn}> 
            <ProgressBar/>
            <AppContainer { ...data.auth }/>
            <Footer />
        </AppProvider>
    )
};

const AppContainer: React.FC<any> = ({
    loggedIn
}) => {
    // const { loadingGetMyProfile, user } = useAppContext();
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
const LoggedIn = () => {
    const { user, loadingGetMyProfile: loading } = useAppContext();
    if(loading || !user) {
        return <></>
    }

    return user.userId === "pil_admin" ? <LoggedInAdmin/> : <LoggedInUsers/>;
}
const LoggedInUsers = () => (
    <Switch>
        <Router path={"/"} component={Home} exact={true}/>
        <Router path={"/edit"} component={Edit}/>
        <Router path={"/history"} component={History} />
        <Router path={"/feedback"} component={Feedback} />
        <Router path={"/suggestion"} component={Suggestion} />
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);
const LoggedInAdmin = () => (
    <Switch>
        <Router path={"/"} component={Admin} exact={true}/>
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);

const LoggedOut = () => (
    <Switch>
        <Router path={"/"} component={Login} exact={true}/>
        <Router path={"/signup"} component={SignUp} />
        <Redirect to={"/"} from={"*"}/>
    </Switch>  
);

export default App;
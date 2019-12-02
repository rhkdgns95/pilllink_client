import React from "react";
import { Switch, Route as Router, Redirect } from "react-router-dom";
import LoggedOutProvider from "./LoggedOutProvider";

const LoggedOut = () => (
    <LoggedOutProvider>
        <LoggedOutContainer/>
    </LoggedOutProvider>
);

const LoggedOutContainer = () => (
    <Switch>
        <Router to={"/"} component={Login} exact={true}/>
        <Redirect to={"/"} from={"*"}/>
    </Switch>
);

export default LoggedOut;
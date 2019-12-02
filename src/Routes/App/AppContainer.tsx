import React from "react";
import AppProvider from "./AppProvider";
import { graphql } from "react-apollo";
import { IS_LOGGED } from "./AppQueries";
import { BrowserRouter } from "react-router-dom";
import LoggedIn from "../LoggedIn";

interface IContainer {
    loggedIn: boolean;
}

const App = ({data}: {data: any}) => {
    return (
        <AppProvider> 
            <AppContainer { ...data.auth }/>
        </AppProvider>
    )
}

const AppContainer: React.FC<IContainer> = ({
    loggedIn
}) => {
    return (
        <BrowserRouter>
        {
            loggedIn ? <LoggedIn/> : <LoggedOut/>
        }
        </BrowserRouter>
    )
}

const LoggedOut = () => <div>Logged - Out</div>

export default graphql<any, any>(IS_LOGGED)(App);
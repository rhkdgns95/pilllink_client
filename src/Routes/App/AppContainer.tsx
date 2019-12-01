import React from "react";
import AppProvider, { useAppContext } from "./AppProvider";
import { graphql } from "react-apollo";
import { IS_LOGGED } from "./AppQueries";
import { BrowserRouter } from "react-router-dom";
interface IContainer {
    loggedIn: boolean;
}

const App = ({auth}: {auth: any}) => {
    return (
        <AppProvider> 
            <AppContainer loggedIn={...auth}/>
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

const LoggedIn = () => <div>Logged - In</div>

const LoggedOut = () => <div>Logged - Out</div>

export default graphql<any, any>(IS_LOGGED)(App);
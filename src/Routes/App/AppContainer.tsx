import React from "react";
import AppProvider, { useAppContext } from "./AppProvider";

const App = () => (
    <AppProvider> 
        <AppContainer />
    </AppProvider>
)
const AppContainer = () => {
    const { homeData } = useAppContext();
    return <div>{ homeData }</div>
}

export default App;
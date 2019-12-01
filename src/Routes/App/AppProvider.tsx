import React, { createContext, useContext } from "react";

interface IContext {
    homeData: string;
}
const InitContext: IContext = {
    homeData: ""
};

const AppContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {
    const homeData = "Hello";
    return {
        value: {
            homeData
        }
    };
}
const AppProvider: React.FC<any> = ({
    children
}) => {
    return (
        <AppContext.Provider { ...useFetch() }>
            {
                children
            }
        </AppContext.Provider>
    )
}

export { useAppContext };
export default AppProvider;
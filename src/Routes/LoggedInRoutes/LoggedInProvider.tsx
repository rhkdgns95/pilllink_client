import React, { createContext, useContext } from "react";

interface IContext {

}

const LoggedInContext: React.Context<IContext> = createContext<IContext>({});
const useLoggedInContext = () => useContext(LoggedInContext);

const useFetch = (): {value: IContext} => {
    return {
        value: {

        }
    };
}

const LoggedInProvider: React.FC<any> = ({
    children
}) => (
    <LoggedInContext.Provider { ...useFetch() }>
        {
            children
        }
    </LoggedInContext.Provider>
);

export { useLoggedInContext };
export default LoggedInProvider;
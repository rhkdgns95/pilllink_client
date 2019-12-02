import React, { createContext, useContext } from "react";

interface IContext {

}
const LoggedOutContext: React.Context<IContext> = createContext<IContext>({});
const useLoggedOutContext = () => useContext(LoggedOutContext);

const useFetch = (): {value: IContext} => {
    return {
        value: {

        }
    };
};

const LoggedOutProvider: React.FC<any> = ({
    children
}) => (
    <LoggedOutContext.Provider { ...useFetch() }>
        {
            children
        }
    </LoggedOutContext.Provider>
);

export { useLoggedOutContext }; 
export default LoggedOutProvider;
import React, { createContext, useContext, useState, useEffect } from "react";

interface IContext {
    homeData: string;
    handleAppTitle: (title: string) => any;
}
const AppTitle: string = "Pill Link";

const InitContext: IContext = {
    homeData: "",
    handleAppTitle: () => {}
};
const AppContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useAppContext = () => useContext(AppContext);

const useFetch = (): { value: IContext } => {
    const homeData = "Hello";
    const [ title, setTitle ] = useState<string>(AppTitle);
    
    const handleAppTitle = (title: string) => {
        setTitle(title);
    }
    useEffect(() => {
        document.title = title;
    }, [title])
    return {
        value: {
            homeData,
            handleAppTitle
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
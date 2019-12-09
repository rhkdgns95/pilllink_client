import React, { createContext, useContext } from "react";

interface IContext {

}
const InitContext: IContext = {

}

const HistoryContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useHistoryContext = () => useContext(HistoryContext);


const useFetch = (): { value: IContext } => {
    return {
        value: {

        }
    }
};

const HistoryProvider: React.FC<any> = ({
    children
}) => (
    <HistoryContext.Provider { ...useFetch() }>
        {
            children
        }
    </HistoryContext.Provider>
);

export { useHistoryContext };
export default HistoryProvider;
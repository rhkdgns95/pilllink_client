import React, { createContext, useContext } from "react";

interface IContext {

}
const InitContext: IContext = {

}

const GenderDetailsContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useGenderDetailsContext = () => useContext(GenderDetailsContext);

const useFetch = (): { value: IContext } => {
    return {
        value: {

        }
    }
};

const GenderDetailsProvider: React.FC<any> = ({
    children
}) => (
    <GenderDetailsContext.Provider { ...useFetch() }>
        {
            children
        }
    </GenderDetailsContext.Provider>
);

export { useGenderDetailsContext };
export default GenderDetailsProvider;
import React, { createContext, useContext } from "react";
import { useAppContext } from "../App/AppProvider";

interface IContext {

}

const FeedbackContext: React.Context<IContext> = createContext({});

const useFeedback = () => useContext(FeedbackContext);

const useFetch = (): { value: IContext } => {
    

    return {
        value: {

        }
    };
};

const FeedbackProvider: React.FC<any> = ({
    children
}) => (
    <FeedbackContext.Provider { ...useFetch() }>
        {
            children
        }
    </FeedbackContext.Provider>
);

export {useFeedback}; 
export default FeedbackProvider;
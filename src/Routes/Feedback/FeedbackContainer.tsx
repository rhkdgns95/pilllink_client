import React, { useEffect } from "react";
import FeedbackPresenter from "./FeedbackPresenter";
import FeedbackProvider from "./FeedbackProvider";
import { useAppContext } from "../App/AppProvider";

const Feedback = () => (
    <FeedbackProvider>
        <FeedbackContainer />
    </FeedbackProvider>
);

const FeedbackContainer = () => {
    const { handleTitle } = useAppContext();
    /**
     *  [1] title 설정
     */
    useEffect(() => {
        handleTitle("Pill Link | Feedback")
    }, []);
    
    
    return (
        <FeedbackPresenter />
    );
};

export default Feedback;
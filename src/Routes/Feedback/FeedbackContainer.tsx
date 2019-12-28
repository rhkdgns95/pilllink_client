import React, { useEffect } from "react";
import FeedbackPresenter from "./FeedbackPresenter";
import FeedbackProvider from "./FeedbackProvider";
import { useAppContext } from "../App/AppProvider";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {

}
const Feedback: React.FC<IProps> = ({
    location: { state },
    history
}) => (
    <FeedbackProvider recordId={state && state.recordId ? state.recordId : -1} lang={state && state.lang ? state.lang : "NULL" } history={history}>
        <FeedbackContainer />
    </FeedbackProvider>
);

const FeedbackContainer = () => {
    const { handleTitle } = useAppContext();
    /**
     *  [1] title 설정
     */
    useEffect(() => {
        handleTitle("Pil+Link | Feedback")
    }, []);
    
    
    return <FeedbackPresenter />;
};

export default Feedback;
import React from "react";
import HistoryProvider from "./HistoryProvider";
import HistoryPresenter from "./HistoryPresenter";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<any> {

}
const History: React.FC<IProps> = ({
}) => (
    <HistoryProvider>
        <HistoryContainer />
    </HistoryProvider>
);

const HistoryContainer = () => <HistoryPresenter/>;

export default History;
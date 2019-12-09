import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import HistoryProvider from "./HistoryProvider";
import HistoryPresenter from "./HistoryPresenter";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: block;
`;

const List = styled.form`

`;

const History = () => (
    <HistoryProvider>
        <HistoryContainer />
    </HistoryProvider>
);

const HistoryContainer = () => <HistoryPresenter/>;

export default History;
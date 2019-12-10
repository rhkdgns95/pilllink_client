import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import Table from "../../Components/Table";
import Pagination from "../../Components/Pagination";
import { useHistoryContext } from "./HistoryProvider";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: block;
`;

const List = styled.form`

`;

const TmpArray = [
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    }
    ,
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    },
    {
        symptoms: "headache, cough, fever",
        result: "headache, cough, fever"
    }
];

const HistoryPresenter = () => {
    const { records } = useHistoryContext();

    return (
        <Container>
            <Navbar
                title={"PillLink"}
                subTitle={"Show your symptoms to pharmacy and hospital"}
            />
            <Wrapper className={"row"}>
                <StepTitle 
                    title={"My page"}
                    subTitle={"You can update your information and see your history"}
                />
                <MyMenu isEdit={false}/>
                <List>
                    {
                        records && records.map((record, key) => 
                            <Table key={key} id={record!.id} lang={record!.lang} />
                        )
                        // TmpArray.map((item, key) => <Table key={key}/> )
                    }
                </List>
                <Pagination></Pagination>
            </Wrapper>
        </Container>
    );
}

export default HistoryPresenter;
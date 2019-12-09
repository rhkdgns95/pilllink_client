import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: block;
`;

const List = styled.form`

`;

const HistoryPresenter = () => (
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

            </List>
        </Wrapper>
    </Container>
);

export default HistoryPresenter;
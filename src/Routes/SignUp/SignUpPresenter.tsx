import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import SignUpForm from "../../Components/SignUpForm";
import ModalAddress from "../../Components/ModalAddress";

const Container = styled.div`
`;
const Wrapper = styled.div`
    & > div {
        width: 50%;
    }
`;
const Img = styled.div`
`;

const SignUpPresenter = () => (
    <Container>
        <Navbar 
            title={"PillLink"}
            subTitle={"Show your symptoms to pharmacy and hospital"}
        />
        <Wrapper className={"row"}>   
            <Img>

            </Img>
            <SignUpForm/>
        </Wrapper>
        <ModalAddress />
    </Container>
);

export default SignUpPresenter;
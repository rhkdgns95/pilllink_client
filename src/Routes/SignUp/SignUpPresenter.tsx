import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import SignUpForm from "../../Components/SignUpForm";
import ModalAddress from "../../Components/ModalAddress";

const Container = styled.div`
`;
const Box = styled.div`

`;
const Wrapper = styled.div`
    & > div {
        width: 50%;
        padding-top: 30px;
    }
    @media(max-width: 910px) {
        & {
            & > div {
                width: 100%;
            }
            .bg-box {
                display: none;
            }
        }
    }
    @media(max-width: 510px) {
        & {
            
        }
    }
`;
const Bg = styled.div`
    margin-right: -45px;
`;
const Img = styled.img`
    margin-top: 100px;
    width: 100%;
    display: block;
`;
const SignUpPresenter = () => (
    <Container className={"container"}>
        <Box className={"box"}>
            <Navbar 
                title={"PillLink"}
                subTitle={"Show your symptoms to pharmacy and hospital"}
            />
            <Wrapper className={"row"}>   
                <Bg className={"bg-box"}>
                    <Img src={"/images/bg/signup.png"}/>
                </Bg>
                <SignUpForm/>
            </Wrapper>
            <ModalAddress />
        </Box>
    </Container>
);

export default SignUpPresenter;
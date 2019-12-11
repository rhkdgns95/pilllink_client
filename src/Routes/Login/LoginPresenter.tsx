import React from "react";
import styled from "../../Styles/typed-components";
import { useLoginContext } from "./LoginProvider";
import { useAppContext } from "../App/AppProvider";
import { TextInputKeyPressEventData } from "react-native";
import Message from "../../Components/Message";
import CircleButton from "../../Components/CircleButton";
import InputIconText from "../../Components/InputIconText";
import { Link } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";

const Container = styled.div`
    position: relative;
    @media(max-width: 910px) {
        & > {
            .wrapper {
                flex-flow: column-reverse;
                form {
                    width: 100%;
                    max-width: 100%;    
                }
                .login-bg-box {
                    width: 400px;
                    margin: 0;
                    margin-left: auto;
                    & > img {
                        margin-top: -100px;
                    }
                }
            }
        }
    }
    @media(max-width: 600px) {
        & > {
            .bg {
                height: 200px;
            }
            .wrapper {
                height: auto;
                padding-top: 200px;
                .login-bg-box {
                    width: 80%;
                    & > img {
                        margin-top: -100px;
                    }
                }
            }
        }
    }
    @media(max-width: 430px) {
        & > {
            .bg {
                height: 180px;
            }
            .wrapper {
                padding-top: 180px;
                .login-bg-box {
                    width: 214px;
                    & > img {
                        margin-top: -60px;
                    }
                }
            }
        }
    }
`;
const Wrapper = styled.div`
    position: relative;
    display: block;
    height: 100vh;
    padding-top: 340px;
    display: flex;
    z-index: 1;
`;
const HeaderBg = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #dfdfdf;
    height: 300px;
    display: flex;
    
`;

const LoginForm = styled.form`
    width: 100%;
    max-width: 400px;
    display: block;
`;
const LoginBg = styled.div`
    & {
        img {
            margin-top: -100px;
        }
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const MessageExtended = styled(Message)`
    marign-top: -10px;
    padding-left: 3px;
`;
const ForgotLine = styled.p`
    text-align: right;
    margin-bottom: 7px;
`;
const ForgotLink = styled(Link)`
    width: 100%;
    font-size: 12px;
    color: #939393;
    transition: .2s;
    &:hover {
        color: black;
    }
`;
const ButtonBox = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

interface IProps {
    onSubmit: () => any;
}
const LoginPresenter: React.FC<IProps> = ({
    onSubmit
}) => {
    const { isProgress } = useAppContext();
    const { email, password, loginLoading, element, error, handleError } = useLoginContext();
    return (
        <Container>
            <HeaderBg className={"bg"}>
                <MainHeader
                    className={"row"}
                    topTitle={"Pill+Link"}
                    title={"PillLink"}
                    subTitle={"Show your symptoms to pharmacy and hospital"}
                />
            </HeaderBg>
            <Wrapper className={"row wrapper"}>
                <LoginForm onKeyPress={
                    e => {
                        e.currentTarget.onkeyup = (data: TextInputKeyPressEventData) => {
                            const { key } = data;
                            if(key === "Enter") {
                                if(email.value === "") {
                                    handleError("Please enter your e-mail");
                                } else if(password.value === "") {
                                    handleError("Please enter your password");
                                } else {
                                    onSubmit();
                                }
                            }
                        }
                    }
                }>
                    <MessageExtended text={error}/>
                    <ForgotLine>
                        <ForgotLink to={"/"}>
                            Forgot password?
                        </ForgotLink>
                    </ForgotLine>
                    <InputIconText 
                        element={element}
                        { ...email }
                        id={1}
                        svgPath={"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"}
                    />
                     <InputIconText 
                        { ...password }
                        id={2}
                        type={"password"}
                        svgPath={"M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z"}
                    />
                    <ButtonBox>
                        <Link to={"/signup"}>
                            <CircleButton 
                                value={"SIGN UP"}
                                color={"green"}
                                disabled={ false }
                                onClick={() => {}}
                            />
                        </Link>
                        <CircleButton 
                            value={"LOGIN"}
                            color={"gold"}
                            disabled={ isProgress || loginLoading }
                            onClick={() => {
                                if(email.value === "") {
                                    handleError("Please enter your e-mail");
                                } else if(password.value === "") {
                                    handleError("Please enter your password");
                                } else {
                                    onSubmit();
                                }
                            }}
                        />
                    </ButtonBox>
                </LoginForm>
                <LoginBg className={"login-bg-box"}>
                    <Img src={"/images/bg/login.png"}/>
                </LoginBg>
            </Wrapper>
        </Container>    
    );
}

export default LoginPresenter;
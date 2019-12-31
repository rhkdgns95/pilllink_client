import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import { useLoginContext } from "./LoginProvider";
import { useAppContext, PATH_IMG_BG } from "../App/AppProvider";
import { TextInputKeyPressEventData } from "react-native";
import Message from "../../Components/Message";
import CircleButton from "../../Components/CircleButton";
import InputIconText from "../../Components/InputIconText";
import { Link } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";
import ModalAccount from "../../Components/ModalAccount";

const Container = styled.div`
    position: relative;
    @media(max-width: 910px) {
        & {
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
        & {
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
        & {
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
                .button-box {
                    margin: 40px 0;
                }
            }
        }
    }
`;
const Box = styled.div`

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
    // padding-right: 150px;
    opacity: 0;
    transition: .3s;
    transition-delay: .3s;
    &.active {
        // padding-right: 0;
        opacity: 1;
    }
`;
const LoginBg = styled.div`
    margin-left: 40px;
    
    & {
        img {
            opacity: 0;
            margin-top: -70px;
            padding-left: 200px;
        }
        &.active {
            img {
                margin-top: -100px;
                padding-left: 0;
                opacity: 1;
                transition: .4s;
                transition-timing-function: ease-in;
            }
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
const ForgotLink = styled.span`
    width: 100%;
    font-size: 12px;
    color: #939393;
    transition: .2s;
    cursor: pointer;
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

const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: black;
`;
const Video = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    & > iframe {
        width: 100%;
        height: 100%;
    }
`;
const IFrameMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    
`;  
const ClickBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 7px 12.5px;
    border: 1px solid white;
    border-radius: 30px;
    font-size: 12px;
    color: white;
    transition: .2s;
    & svg {
        transition: .2s;
        margin-left: 10px;
        fill: white;
    }
    &:active,
    &:hover {
        background-color: white;
        color: black;
        & svg {
            fill: black;
        }
    }
`;
interface IProps {
    onSubmit: () => any;
}
const LoginPresenter: React.FC<IProps> = ({
    onSubmit
}) => {
    const { isProgress } = useAppContext();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    const { userId, password, loginLoading, element, error, handleError, isModal, toggleModal } = useLoginContext();
    const [ isPlay, setIsPlay ] = useState<boolean>(true);

    useEffect(() => {
        if(!isEffected){
            setIsEffected(true);
        }
    }, []);

    return (
        <Container className={"container"}>
            {
                isPlay && (
                <Popup>
                    <Video>
                        <IFrameMenu>
                            <ClickBar onClick={e => setIsPlay(false)}>
                                Close
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><path d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z"/></svg>
                            </ClickBar>
                        </IFrameMenu>
                        <iframe width="804" height="452" frameBorder={0}  src="https://www.youtube.com/embed/THQN5AcG9wQ?wmode=opaque;iv_load_policy=3;showinfo=0;modestbranding=0;disablekb=1;controls=0;rel=0;amp;autoplay=1;loop=1;playlist=fn5OBAfHLKQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Video>
                </Popup>
                )
            }
            
            <Box className={"box"}>
                <HeaderBg className={"bg"}>
                    <MainHeader
                        className={"row"}
                        topTitle={"Pil+Link"}
                        title={"PilLink"}
                        subTitle={"Show your symptoms to a pharmacy or hospital"}
                    />
                </HeaderBg>
                <Wrapper className={"row wrapper"}>
                    <LoginForm className={isEffected ? "active" : ""} onKeyPress={
                        e => {
                            e.currentTarget.onkeyup = (data: TextInputKeyPressEventData) => {
                                const { key } = data;
                                if(key === "Enter") {
                                    if(userId.value === "") {
                                        handleError("Please enter your ID.");
                                    } else if(password.value === "") {
                                        handleError("Please enter your Password.");
                                    } else {
                                        onSubmit();
                                    }
                                }
                            }
                        }
                    }>
                        <MessageExtended text={error}/>
                        <ForgotLine>
                            <ForgotLink onClick={toggleModal}>
                                Forgot Account?
                            </ForgotLink>
                        </ForgotLine>
                        <InputIconText 
                            element={element}
                            { ...userId }
                            id={1}
                            svgPath={"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"}
                        />
                        <InputIconText 
                            { ...password }
                            id={2}
                            type={"password"}
                            svgPath={"M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z"}
                        />
                        <ButtonBox className={"button-box"}>
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
                                    if(userId.value === "") {
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
                    <LoginBg className={isEffected ? "login-bg-box active" : "login-bg-box"}>
                        <Img src={PATH_IMG_BG+ "/login.png"}/>
                    </LoginBg>
                </Wrapper>
            </Box>
            { isModal && <ModalAccount toggleModal={toggleModal}/> }
        </Container>    
    );
}

export default LoginPresenter;
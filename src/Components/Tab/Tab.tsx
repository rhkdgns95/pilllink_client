import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`
    height: 70px;
    @media(max-width: 500px) {
        .tab-bg {
            position:fixed;
            z-index: 1;
            width: 30%;
            top: 0;
            left: -35%;
            width: 30%;
            height: 100%;
            background-color: rgba(250,250,250,.74);
            opacity: 0;
            transition: .2s;
            &.active {
                left: 0
                opacity: 1;
                transition: opacity .4s, left .3s;
            }
        }
        .tab {
            .tab-wrapper {
                display: block;
                .tab-open-btn {
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-110%,-50%);
                    cursor: pointer;
                    & > svg {
                        fill: #40ac75;
                    }
                }
                .tab-info {
                    z-index: 1;
                    position: fixed;
                    display: block;
                    width: 70%;
                    height: 100%;
                    top: 0;
                    right: -73%;
                    background-color: #fff;
                    border-left: 2px solid #13a964;
                    box-shadow: 0 2px 8px rgba(0,0,0,.54);
                    opacity: 0;
                    transition: opacity .2s, right .3s;
                    &.active {
                        right: 0;
                        opacity: 1;
                        transition: right .3s, opacity .4s;
                    }
                    .tab-header {
                        padding: 20px 17px;
                        .tab-close-btn {
                            position: relative;
                            padding: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            & > svg {
                                fill: #86ae8f;
                            }
                        }    
                    }
                    .tab-body {
                        padding: 35px 15px;
                        .tab-menu-btn {
                            &:not(:nth-of-type(1)) {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    height: 100%;
`;
const TabMenu = styled.div`
    position: relative;
    height: 100%;
`;
const TabWrapper = styled.div`
    display: flex;
    height: 100%;
`;
const TabOpenBtn = styled.div`
    display: none;
`;
const TabInfo = styled.div`
    display: flex;
`;
const TabHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    &::after {
        content: "";
        position: absolute;
        top: 70px;
        height: 1px;
        left: 0;
        width: 100%;
        background-color: #dfdfdf;
    }
`;
const ItemName = styled.div`
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #46684d;
    font-weight: bold;
    & > svg {
        fill: #46684d;  
        margin-right: 7px;
    }
`;
const TabCloseBtn = styled.div`
    display: none;
`;
const TabBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
`;  
interface ITabButton {
    bg_color: string;
} 
const TabButton = styled(Link)<ITabButton>`
    padding: 9px; 
    width: 90px;
    font-size: 10px;
    color: white;
    border-radius: 30px;
    background-color: ${props => props.bg_color};
    cursor: pointer;
    text-align: center;
    &:not(:nth-of-type(1)) {
        margin-left: 10px;
    }
`;
const TabBg = styled.div`
    
`;
const Name = styled.span`
    margin-left: 3px;
`;
const Tab = () => {
    const { user } = useAppContext();
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            <TabBg className={`${isOpen ? "active" : ""} tab-bg`} onClick={toggleOpen}/>
            <Wrapper>
                <TabMenu className={"tab"}>
                    <TabWrapper className={"tab-wrapper"}>
                        <TabOpenBtn className={"tab-open-btn"} onClick={toggleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                        </TabOpenBtn>
                        <TabInfo className={`${isOpen ? "active" : ""} tab-info`}>
                            <TabHeader className={"tab-header"}>
                                <ItemName>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                                    <Name>{ user && user.fullName}</Name>
                                </ItemName>
                                <TabCloseBtn className={"tab-close-btn"} onClick={toggleOpen}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                </TabCloseBtn>
                            </TabHeader>
                            <TabBody className={"tab-body"}>
                                <TabButton to={"/edit"} className={"tab-menu-btn"} bg_color={"#39b14d"}>MY PAGE</TabButton>
                                <TabButton to={"/"} className={"tab-menu-btn"} bg_color={"#e4b633"}>LOGOUT</TabButton>
                            </TabBody>
                        </TabInfo>
                    </TabWrapper>
                </TabMenu>
            </Wrapper>
        </Container>
    );
}
export default Tab;
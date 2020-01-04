import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import { useAppContext } from "../../Routes/App/AppProvider";
import FormFindAccount from "../FormFindAccount";
import FormFindPassword from "../FormFindPassword";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.54);
    z-index: 3;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: block;
    width: 90%;
    max-width: 400px;
    padding: 0 20px;
    max-height: 480px;
    height: 90%;
    background-color: white;
    cursor: default;
    border-radius: 3px;
`;
const Title = styled.div`
    font-size: 20px;
    margin: 40px 7px;
    color: gray;
    position: relative;
    & > svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10px;
        fill: #b3b3b3;
        padding: 6px;
        cursor: pointer;
        transition: .2s;
        &:hover {
            fill: #c39393;
        }
    }
`;
const Menu = styled.div`
    position: relative;
    display: flex;
    flex: 2;
    width: 100%;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .5px;
        background-color: #dfdfdf;
        position: absolute;
    }
`;
const MenuTitle = styled.div`
    position: relative;
    padding: 10px 20px;
    font-size: 12px;
    text-align: center;
    border: .5px solid #dfdfdf;
    border-bottom: 0;
    white-space: nowrap;
    &:first-child {
        margin-right: 1px;
    }
    &:not(.active) {
        cursor: pointer;
        color: #b3b3b3;
        background-color: rgb(251, 251, 251);
    }
    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        transition: .2s;
    }
    &.active {
        color: #1386e1;
        background-color: white;
        &::after {
            background-color: #1386e1;
        }
    }
`;
const MenuIdTitle = styled(MenuTitle)`

`;
const MenuPasswordTitle = styled(MenuTitle)`

`;
interface IModalAccount {
    toggleModal: () => any;
}
const ModalAccount: React.FC<IModalAccount> = ({
    toggleModal
}) => {
    const { isProgress } = useAppContext();
    const [ isFindId, setIsFindId ] = useState<boolean>(true);
    const toggleFindId = () => {
        setIsFindId(!isFindId);
    }

    return (
        <Container onClick={isProgress ? () => {} : toggleModal}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>
                    Account Settings 
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={isProgress ? () => {} : toggleModal} width="22" height="22" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </Title>
                <Menu>
                    <MenuIdTitle className={isFindId ? "active" : ""} onClick={isFindId ? () => {} : toggleFindId}>Forgot Account</MenuIdTitle>
                    <MenuPasswordTitle className={isFindId ? "" : "active"} onClick={isFindId ? toggleFindId : () => {}}>Forgot Password</MenuPasswordTitle>
                </Menu>
                { isFindId ? <FormFindAccount/> : <FormFindPassword/> }
            </Wrapper>
        </Container>
    );
};

export default ModalAccount;
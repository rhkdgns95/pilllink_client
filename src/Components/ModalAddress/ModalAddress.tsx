import React from "react";
import DaumPostCode from "react-daum-postcode";
import styled from "../../Styles/typed-components";
import { useSignUpContext } from "../../Routes/SignUp/SignUpProvider";

const Container = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.24);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    opacity: 0;
    z-index: -9;
    display: none;
    &.active {
        z-index: 1;
        display: flex;
        transform: scale(1);
        opacity: 1;
        transition: .3s;
    }
`;

const Wrapper = styled.div`
    max-width: 500px;
    max-height: 600px;
`;


interface IProps {

}


const ModalAddress = () => {
    const { isModal, toggleModal, handleDetailAddress } = useSignUpContext();
    
    const onCompleted = (e: any) => {
        const {address} = e;
        handleDetailAddress(address);
        toggleModal();
    }

    return (
        <Container className={isModal ? "active" : ""} onClick={e => toggleModal()}>
            <Wrapper>
                <DaumPostCode onComplete={onCompleted} />
            </Wrapper>
        </Container>
    )
}

export default ModalAddress;
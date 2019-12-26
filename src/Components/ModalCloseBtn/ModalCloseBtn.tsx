import React from "react";
import styled from "../../Styles/typed-components";
import { useHomeContext } from "../../Routes/Home/HomeProvider";

const Container = styled.div`
    z-index: 2;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`;
const Wrapper = styled.div`
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #dfdfdf;
    transition: .2s;
    & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .2s;
        fill: #606666;
    }
    &:hover {
        border-radius: 9px;
        box-shadow: 0 1px 2px 2px rgba(0,0,0,.1), 0 0.5px 2px 3px rgba(0,0,0,0.2);
        & svg {
            fill: #213333;
        }
    }
`;
const ModalCloseBtn = () => {
    const { handleModal } = useHomeContext();
    return (
        <Container>
            <Wrapper onClick={handleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </Wrapper>
        </Container>
    )
};

export default ModalCloseBtn;
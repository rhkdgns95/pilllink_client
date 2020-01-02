import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import { useAdminRecordContext } from "../AdminRecord/AdminRecordProvider";
import { useAppContext } from "../../Routes/App/AppProvider";
import { getUserBoards_GetUserBoards_boards } from "../../Types/api";

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
const TextArea = styled.textarea`
    display: block;
    width: 100%;
    border: 0;
    border-top: 0;
    padding: 7px 10px;
    height: 200px;
    &:focus,
    &:active {
        
        border-top: 0;
        box-shadow: 0;
        outline: none;
    }
    ::-webkit-resizer {
        display: none;
    }
    border-radius: 3px;
    letter-spacing: .3px;
    line-height: 23px;
    font-size: 12px;
`;
const TextAreaBox = styled.div`
    border: .5px solid #dfdfdf;
    border-top: 0;
    &.active {
        background-color: #e8e8e8;
        textarea {
            background-color: #e8e8e8;
        }
    }
`;
const Name = styled.div`
    
`;
const Data = styled.span`
    font-size: 13px;
    padding: 10px;
    display: block;
    color: #727272;
`;
const ButtonBox = styled.div`
    display :flex;
    justify-content: flex-end;
    align-items: center;
    margin: 25px 0;
    
`;

const Button = styled.button`
    background-color: #2196F3;
    color: white;
    font-size: 11px;
    padding: 9px 20px;
    transition: .2s;
    cursor: pointer;
    &:disabled {
        opacity: .6;
    }
`;

const SubmitBtn = styled(Button)`

`;
const useTextArea = (): IUseTextare => {
    const [value, setValue] = useState<string>("");
    
    const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }   

    return {
        value,
        onChange
    };
}
const ModalUpdateResult = () => {
    
    const { isProgress } = useAppContext();
    const { toggleModal, boards, currentBoardId, handleUpdateBoardResult } = useAdminRecordContext();
    const [ isAnswer, setIsAnswer] = useState<boolean>(false);
    const text = useTextArea();
    const currentBoard: getUserBoards_GetUserBoards_boards | null = boards!.find(board => board!.id === currentBoardId) || null;
    
    return (
        <Container onClick={isProgress ? () => {} : toggleModal}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>
                    답변하기 
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={isProgress ? () => {} : toggleModal} width="22" height="22" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </Title>
                <Menu>
                    <MenuIdTitle onClick={e => setIsAnswer(false)} className={isAnswer ? "" : "active"}>작성글</MenuIdTitle>
                    <MenuIdTitle onClick={e => setIsAnswer(true)} className={isAnswer ? "active" : ""}>답변하기</MenuIdTitle>
                </Menu>
                <TextAreaBox className={isAnswer ? "" : "active"}>
                    {
                        isAnswer ? 
                        <TextArea { ...text } wrap="hard" placeholder={"Message"}/> :
                        <TextArea wrap="hard" value={currentBoard!.text} disabled={true}/>
                    }
                    <Data>회원명: {currentBoard!.writer.fullName} ({currentBoard!.writer.userId})</Data>
                </TextAreaBox>
                {
                    isAnswer && text.value !== "" && 
                    <ButtonBox>
                        <SubmitBtn onClick={isProgress ? () => {} : e => {
                            handleUpdateBoardResult(text.value);
                        }}
                        disabled={isProgress}
                        >전송하기</SubmitBtn>
                    </ButtonBox>
                }
            </Wrapper>
        </Container>
    );
}

export default ModalUpdateResult
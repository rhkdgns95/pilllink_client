import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import { useAppContext, PATH_IMG_BG } from "../../Routes/App/AppProvider";
import { TranslatedKorean } from "../../Utils/translated/translatedKorean";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.34);
    cursor: pointer;
    @media(max-width: 800px) {
        & > div {
            flex-flow: column;
            & > div {
                width: 100%;
                background-color: white;
                &:nth-of-type(2) {
                    // width: 100%;
                    background-color: #d6e8de;
                    background-color: #eff4f5;
                    border-radius: 50%;
                    margin: 0 auto;
                    padding: 40px 0;
                    & div {
                        width: 50%;
                        margin: 0 auto;
                    }
    
                }
                &:nth-of-type(3) {
                    width: 100%;
                    textarea {
                        height: 150px;
                    }
                }
            }
        }
    }
`;


const Wrapper = styled.div`
    max-width: 700px;
    width: 90%;
    background-color: white;
    cursor: default;
    display: flex;
    flex-flow: row wrap;
    border-radius: 3px;
    overflow: hidden;
    & > div {
        &:nth-of-type(1) {
            width: 100%;
        }
        &:nth-of-type(2) {
            width: 50%;
        }
        &:nth-of-type(3) {
            width: 50%;
        }
    }
`;
const Title = styled.div`
    position: relative;
    padding: 15px;
    // background-color: #f4f4f4;
    color: #4e7ab1;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    & > svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        fill: #c5c5c5;
        padding: 5px;
        cursor: pointer;
        transition: .2s;
        &:hover {
            fill: #9b8383;
        }
    }
    @media(max-width: 510px) {
        text-align: left;
    }
`;
const ImgBox = styled.div`
    width: 100%;
    max-width: 200px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const Row = styled.div`
    padding: 10px;
    &.flex-row {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }
    
`;
const Cell = styled.div`
    padding: 10px 0;
    max-width: 300px;
    margin: 0 auto;
    &.cell-flex {
        display: flex;
        align-items: center;
        justify-content space-between;
    }
`;
const Selector = styled.select`
    display: block;
    width: 100%;
    border: 1px solid #dfdfdf;
    padding: 7px 10px;
    &:focus,
    &:active {
        border: 1px solid #c6c6c6;
    }
    border-radius: 3px;
`;

const Option = styled.option`

`;
const TextArea = styled.textarea`
    display: block;
    width: 100%;
    border: 1px solid #dfdfdf;
    padding: 7px 10px;
    height: 200px;
    
    &:focus,
    &:active {
        border: 1px solid #c6c6c6;
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

const Button = styled.input`
    border: 0;
    padding: 9px 10px;
    font-size: 12px;
    cursor: pointer;
    background-color: #34bd2e;
    color: white;
    &:focus,
    &:active {
        border: 0;
    }
    max-width: 200px;
    border-radius: 3px;
    width: 48%;
`;

const SubmitBtn = styled(Button)`
    display: block;
    background-color: #16b90d;
    &:disabled {
        cursor: default;
    }
    &:first-child {
        background-color: #d5a16f;
    }
    
`;
const useSelect = (): IUseSelect => {
    const [value, setValue] = useState<string>("BOARD_SUGGESTION");

    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }

    return {
        value,
        onChange,
        onInit: () => {}
    };
}
const useText = (): IUseTextare => {
    const [value, setValue] = useState<string>("");
    const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    return {
        value,
        onChange
    }
}
const ModalBoard = () => {
    
    const { isProgress, handleProgress, toggleBoard, createBoardLoading, handleCreateBoard } = useAppContext();
    const select = useSelect();
    delete select.onInit;
    const text = useText();

    const onSubmut = () => {
        if(!isProgress) {
            const textValue = text.value;
            const selectValue = select.value;
            if(textValue !== "") {
                handleProgress(true);
                handleCreateBoard(textValue, selectValue);
                toggleBoard();
            }
        }
    }

    return (
        <Container onClick={toggleBoard}>
            
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>
                    Suggestion
                    <svg onClick={toggleBoard} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </Title>    
                <Row className={"flex-row"}>
                    <ImgBox>
                        <Img src={PATH_IMG_BG + "/select.png"} />
                    </ImgBox>
                </Row>
                <Row>
                    <Cell className={"cell-flex"}>
                        <Selector { ...select }>
                            {
                                TranslatedKorean.boardSelectors.map((item, key) => 
                                    <Option value={item.value} key={key}>{item.name}</Option>
                                )
                            }
                        </Selector>
                    </Cell>
                    <Cell className={"cell-flex"}>
                        <TextArea { ...text } wrap="hard" placeholder={"Message"}/>
                    </Cell>
                    <Cell className={"cell-flex btn-box"}>
                        <SubmitBtn onClick={toggleBoard} type={"button"} value={"CANCEL"}/>
                        <SubmitBtn disabled={isProgress || createBoardLoading || text.value.length < 1} onClick={onSubmut} type={"button"} value={"SUBMIT"}/>
                    </Cell>
                </Row>
            
            </Wrapper>
        </Container>      
    );
};

export default ModalBoard;
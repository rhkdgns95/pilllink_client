import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin: 21px;
    margin-bottom: 30px;
`;
const Wrapper = styled.div`
    & input:checked {
        & ~ label {
            // box-shadow: 0 1px 2px rgba(0,50,0,.24), 0 -1px 3px rgba(0,50,0,.42);
            // border: 1px solid #13a964;
            .checked-icon {
                opacity: 1;
                transform: scale(1) translateX(-50%);
            }
        }
    }
    @media(max-width: 510px) {
        label {
            position: relative;
            width: 95px;
            height: 95px;
            margin: 0 auto;
            & span {
                position: absolute;
                top: 97%;
                margin-top: 7px;
            }
            .checked-icon {
                top: -10px;
                left: 90%;
                padding: 13ipx;
                transform: scale(1) translate(-50%, -50%);
                & svg {
                    width: 10px;
                    height: 10px;
                }
            }
        }
        
    }
`;
const InputChecked = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -9;
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
    &:checked {
        & ~ label {
            box-shadow: 0 0.5px 10px rgba(0,30, 90, .5);
            opacity: 1;
            span {
                color: #1f3b79;
            }
        }
    }
`;
const Label = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    border-radius: 50%;  
    width: 140px;
    height: 140px;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0 0.5px 10px rgba(0,50,100,.2);
    // opacity: .8;
    border: 1px solid rgba(0,0,0,0);
    &:hover {
        opacity: 1;
    }
`;
const ImgBox = styled.div`
    width: 43%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Img = styled.img`
    width: auto;
    display: block;
`;
const Text = styled.span`
    margin-top: 12px;
    font-size: 12px;
    text-align: center;
    max-width: 100px;
    color: #979797;
`;
const CheckedIcon = styled.div`
    position: absolute;
    margin-top: 10px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    padding: 13px;
    background: linear-gradient(90deg,rgba(42,144,16,1) 0%,rgba(75,201,43,1) 50%,rgba(42,144,16,1) 100%);
    opacity: 0;
    transition: .2s;
    
    & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: white;
    }
`;
interface IProps {
    name: string;
    imgPath: string;
    value: string;
    id: number;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const Checkbox: React.FC<IProps> = ({
    name,
    imgPath,
    value,
    id,
    checked,
    onChange
}) => (
    <Container>
        <Wrapper>  
            <InputChecked type={"checkbox"} id={"checkbox_" + id} value={value} onChange={onChange} checked={checked}/>
            <Label htmlFor={"checkbox_" + id}>
                <ImgBox>
                    <Img src={imgPath}/>
                </ImgBox>
                <Text>{ name }</Text>
                <CheckedIcon className={"checked-icon"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                </CheckedIcon>
            </Label>
        </Wrapper>
    </Container>
);

export default Checkbox;
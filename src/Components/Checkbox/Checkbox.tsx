import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin: 10px 15px;
`;
const Wrapper = styled.div`
    @media(max-width: 510px) {
        label {
            position: relative;
            width: 95px;
            height: 95px;
            & span {
                position: absolute;
                top: 97%;
                margin-top: 7px;
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
            box-shadow: 0 1px 2px rgba(0,0,0,.24), 0 -1px 4px rgba(0,0,0,.92);
            opacity: 1;
        }
    }
`;
const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    border-radius: 50%;  
    width: 150px;
    height: 150px;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,.24), 0 -1px 4px rgba(0,0,0,.32);
    opacity: .8;
    &:hover {
        opacity: 1;
    }
`;
const ImgBox = styled.div`
    width: 50%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Text = styled.span`
    margin-top: 12px;
    font-size: 12px;
`;
interface IProps {
    name: string;
    imgPath: string;
    value: string;
    id: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const Checkbox: React.FC<IProps> = ({
    name,
    imgPath,
    value,
    id,
    onChange
}) => (
    <Container>
        <Wrapper>  
            <InputChecked type={"checkbox"} id={"checkbox_" + id} value={value} onChange={onChange}/>
            <Label htmlFor={"checkbox_" + id}>
                <ImgBox>
                    <Img src={imgPath}/>
                </ImgBox>
                <Text>{ name }</Text>
            </Label>
        </Wrapper>
    </Container>
);

export default Checkbox;
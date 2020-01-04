import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    // margin: 0 auto;
    height: 100%;
    @media(max-width: 510px) {
        height: 35px;
    }
`;
const Wrapper = styled.div`
    height: 100%;
`;
const Input = styled.input`
    position: absolute;
    z-index: -9;
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
    &:checked {
        & ~ label {
            opacity: 1;
            color: white;
            border: 1px solid ${props => props.theme.greenColor};
            background-color: ${props => props.theme.greenColor};
            
        }
    }
`;
const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 7.5px 20px;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    color: gray;
    background-color: white;
    // white-space: nowrap;
    text-align: center;
    user-select: none;
    cursor: pointer;
    font-size: 12px;
    transition: background-color .2s, border .2s, opacity .2s;
    opacity: .8;
    box-shadow: 0 0.5px 10px rgba(0,50,100,.1);
    @media(min-width: 911px) {
        &:hover {
            opacity: 1;
            border: 1px solid #91d0b3;
            color: #719e89;
        }
    }
`;
interface IProps {
    text: string;
    type: "checkbox" | "radio"
    id: number;
    name: string;
    checked: boolean;
    defaultChecked?: boolean;
    width?: boolean;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FeedButton: React.FC<IProps> = ({
    text,
    id,
    type= "checkbox",
    name,
    checked,
    defaultChecked,
    width,
    value,
    onChange
}) => (
    <Container style={width ? {width: "98%"} : {}} >
        <Wrapper>
            <Input 
                type={type}
                id={name + id}
                name={name}
                value={value}
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
            <Label htmlFor={name + id}>{ text }</Label>
        </Wrapper>
    </Container>
    
);

export default FeedButton;
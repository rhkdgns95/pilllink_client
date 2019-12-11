import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    padding-left: 20px;
    margin-right: 20px;
    @media(max-width: 510px) {
        & {
            padding-left: 8px;
            input {

            }
        }
    }
`;
const Radio = styled.input`
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    &:checked {
        & ~ label {
            color: #147d51;
            & > div {
                border: 1px solid #147d51;
                &::after {
                    opacity: 1;
                }
            }
        }
    }
    
`;
const Label = styled.label`
    cursor: pointer;
    font-size: 13px;
    color: #929292;
`;
const Circle = styled.div`
    border: 1px solid #9a9a9a;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 13px;
    height: 13px;
    &::after {
        content: "";
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        border-radius: 50%;
        transition: .3s;
        background-color: #2d8b64;
    }
`;

interface IProps {
    id: number;
    label: string;
    name: string;
    defaultChecked?: boolean;
    value: string;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}
const InputRadio: React.FC<IProps> = ({
    id,
    label,
    name,
    defaultChecked,
    value,
    checked,
    onChange
}) => (
    <Container>
        <Radio id={`${id}_${name}`} type={"radio"} name={name} onChange={onChange} value={value} defaultChecked={defaultChecked} checked={checked}/>
        <Label htmlFor={`${id}_${name}`}>
            { label }
            <Circle />
        </Label>
    </Container>
);


export default InputRadio;
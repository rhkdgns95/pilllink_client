import React, { ChangeEvent } from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    @media(max-width: 510px) {
        &.active-button {
            & > div {
                input {
                    flex: 4;
                    padding: 7px 9px;
                }
            }           
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: row-reverse;
    flex: 4;
    align-items: center;
    padding: 10px;
    @media(max-width: 510px) {
        padding: 10px 0;
        flex: 5;
        input {
            flex: 4;
            font-size: 11px;
        }
        label {
            padding-left: 10px;
            font-size: 11px;
            flex: 2;
        }
    }
`;
const InputTyped = styled.input`
    flex: 3;
    height: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    &:focus {
        border: 1px solid ${props => props.theme.greenColor};
        & ~ label {
            color: #0aa147;
        }
    }
    &:disabled {
        // background-color: #e0e0e0;
        border: 1px solid #dfdfdf;  
    }
`;
const InputText = styled(InputTyped)`
`;

const Label = styled.label`
    font-size: 12px;
    flex: 1;
    text-transform: uppercase;
    transition: color .1s;
    color: #147d51;
`;
const ChangePasswordBtn = styled.input`
    padding: 7px 20px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    &:focus,
    &:active {
        border: 1px solid black;
    }
`;
interface IProps {
    title: string; 
    value: string;
    type?: "text" | "password",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
    disabled?: boolean;
    onClick?: () => any;
}
const InputTitleText: React.FC<IProps> = ({
    title,
    value,
    type="text",
    onChange,
    disabled, 
    onClick // Change Password.
}) => (
    <Container className={onClick ? "active-button" : ""}>
        <Wrapper>
            { onClick && <ChangePasswordBtn value={"Change Password"} type={"button"} onClick={onClick}/>}
            { !onClick && <InputText value={value} type={type} onChange={onChange} disabled={disabled}/> }
            <Label>{ title }</Label>
        </Wrapper>
        
    </Container>
);

export default InputTitleText;
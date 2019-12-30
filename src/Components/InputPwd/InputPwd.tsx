import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    display: flex;
    flex-flow: column-reverse;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-size: 13px;
    padding: 4px 0;
`;

const InputPassword = styled.input`
    margin-top: 5px;
    width: 100%;
    border: 1px solid #e1e1e1
    padding: 7px 5px;
    font-size: 12px;
    border-radius: 2px;
    padding-left: 10px;
    &:focus,
    &:active {
        border: 1px solid #a5a5a5;
    }
    &:focus {
        & ~ label {
            font-weight: bold;
        }
    }
`;

interface IInputPwd {
    id: string;
    color: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
    disabled: boolean;
    type?: "password" | "text"
};

const InputPwd: React.FC<IInputPwd> = ({
    id,
    color,
    label,
    value,
    onChange,
    disabled,
    type="password"
}) => (
    <Container>
        <InputPassword type={type} id={"change_pwd_" + id} value={value} onChange={onChange} disabled={disabled} autoComplete={"off"}/>
        <Label style={{ color: color }} htmlFor={"change_pwd_" + id}>{ label }</Label>
    </Container>
);

export default InputPwd;
import React, { ChangeEvent } from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: row-reverse;
    flex: 4;
    align-items: center;
    padding: 10px;
`;
const InputTyped = styled.input`
    flex: 3;
    height: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    &:focus {
        border: 1px solid #4bd38e;
        & ~ label {
            color: #0aa147;
        }
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
interface IProps {
    title: string; 
    value: string;
    type?: "text" | "password",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
}
const InputTitleText: React.FC<IProps> = ({
    title,
    value,
    type="text",
    onChange
}) => (
    <Container>
        <Wrapper>
            <InputText value={value} type={type} onChange={onChange}/>
            <Label>{ title }</Label>
        </Wrapper>
        
    </Container>
);

export default InputTitleText;
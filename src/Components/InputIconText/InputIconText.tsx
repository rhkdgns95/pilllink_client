import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`;
const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 10px 15px;
    padding-left: 30px;
    font-size: 12px;
    border: 1px solid #dfdfdf;
    color: #545454;
    &::placeholder {
        font-size: 10px;
        padding-left: 2px;
        letter-spacing: .5px;
        color: #ababab;
    }
    &:focus {
        border: 1px solid #0fae86;
        & ~ label {
            & svg {
                fill: #0fae86;
            }
        }
    }
`;
const Label = styled.label`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    & > svg {
        fill: #8f8f8f;
    }
`;
interface IProps {
    placeholder: string;
    value: string;
    id: number;
    element?: any;
    type?: "text" | "password";
    svgPath: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
}
const InputIconText: React.FC<IProps> = ({
    placeholder,
    value,
    id,
    element,
    type="text",
    svgPath,
    onChange
}) => (
    <Container>
        <Input id={`${id}_text`} type={type} placeholder={placeholder} value={value} ref={element} onChange={onChange} autoFocus={false}/>
        <Label htmlFor={`${id}_text`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d={svgPath}/></svg>
        </Label>
    </Container>
);

export default InputIconText;
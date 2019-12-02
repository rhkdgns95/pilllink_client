import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Input = styled.input`
    padding: 5px 10px;
    width: 100%;
    border: 1px solid #dfdfdf;
    &:focus {
        border: 1px solid black;
    }
`;
interface IProps {
    className?: string;
    element?: any;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (data: React.ChangeEvent<HTMLInputElement>) => any; 
}

const InputText: React.FC<IProps> = ({
    className,
    value,
    type="text",
    placeholder,
    onChange,
    element
}) => (
    <Container className={className}>
        <Input
            ref={element}
            type={type}
            value={value}    
            placeholder={placeholder}
            onChange={onChange}
        />
    </Container>
);

export default InputText;
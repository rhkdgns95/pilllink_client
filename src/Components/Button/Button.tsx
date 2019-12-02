import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div``;
const InputButton = styled.input`
    padding: 5px 10px;
    display: block;
    width: 100%;
`;

interface IProps {
    className?: string;
    value: string;
    onClick: () => any;
    disabled?: boolean;
};

const Button: React.FC<IProps> = ({
    className,
    value,
    onClick,
    disabled=false
}) => (
    <Container className={className}>
        <InputButton onClick={onClick} type={"button"} value={value} disabled={disabled} />
    </Container>
)
export default Button;
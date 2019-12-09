import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
`;

interface IButton {
    color: string;
}
const Button = styled.input<IButton>`
    border-radius: 30px;
    padding: 9px;
    width: 130px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    opacity: .8;
    &:hover {
        transition: .2s;
        opacity: 1;
    }
    &:disabled {
        opacity: .7 !important;
        cursor: default !important;
    }
    background-color: ${props => {
        if(props.color === "gold") {
            return props.theme.goldColor;
        } else if(props.color === "green") {
            return props.theme.greenColor;
        }
    }};

`;

interface IProps {
    value: string;
    color: "gold" | "green";
    disabled: boolean;  
    onClick: () => any;
}

const CircleButton: React.FC<IProps> = ({
    value,
    color,
    disabled,
    onClick
}) => (
    <Container>
        <Button 
            disabled={disabled}
            value={value}
            type={"button"}
            color={color}  
            onClick={onClick}  
        />
    </Container>
);

export default CircleButton;
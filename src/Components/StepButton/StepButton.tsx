import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
interface IButton {
    isNext?: boolean;
}
const Button = styled.input<IButton>`
    width: 130px;
    padding: 7.5px;
    opacity: .9;
    transition: .2s;
    background-color: ${props => props.isNext ? "#39b14d" : "#d5a51a"};
    color: white;
    border-radius: 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .6px;
    &:hover {
        opacity: 1;
    }
`;
interface IProps {
    value: string;
    onClick: () => any;
    isNext?: boolean;
}
const StepButton: React.FC<IProps> = ({
    value,
    onClick,
    isNext
}) => (
    <Container>
        <Wrapper>
            <Button onClick={onClick} type={"button"} value={value} isNext={isNext}/>
        </Wrapper>
    </Container>
);

export default StepButton;
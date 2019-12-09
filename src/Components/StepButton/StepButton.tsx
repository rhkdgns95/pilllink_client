import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const Button = styled.input`
    width: 130px;
    padding: 7.5px;
    opacity: .9;
    transition: .2s;
    background-color: #d5a51a;
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
}
const StepButton: React.FC<IProps> = ({
    value,
    onClick
}) => (
    <Container>
        <Wrapper>
            <Button onClick={onClick} type={"button"} value={value}/>
        </Wrapper>
    </Container>
);

export default StepButton;
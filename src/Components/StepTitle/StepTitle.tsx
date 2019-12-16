import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    @media(max-width: 500px) {
        display: block;
        & > h3 {
            font-size: 15px;
            display: block;
            margin-bottom: 4px;
        }
        & > span {
            font-size: 11px;
            margin-left: 16px;
            display: none;
        }
    }
`;
const Title = styled.h3`
    position: relative;
    color: #969696;    
    padding-left: 15px;
    text-transform: uppercase;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        height: 90%;
        left: 0;
        transform: translateY(-50%);
        width: 5px;
        background-color: ${props => props.theme.greenColor};
    }
`;
const SubTitle = styled.span`
    display: block;
    margin-left: 10px;
    color: #a8a8a8;
    font-size: 12px;
`;
interface IProps {
    subTitle: string;
    title: string;
}
const StepTitle: React.FC<IProps> = ({
    subTitle,
    title
}) => (
    <Container>
        <Wrapper>
            <Title>{ title }</Title>
            <SubTitle>{ subTitle }</SubTitle>
        </Wrapper>
    </Container>
);

export default StepTitle;
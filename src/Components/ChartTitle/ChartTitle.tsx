import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin-top: 15px;
    margin-bottom: 20px;
`;

const Wrapper = styled.div`
`;
const Title = styled.h3`
    color: #3db27d;
    text-align: center;
    display: block;
    max-width: 170px;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #3db27d;
    border-radius: 30px;
    letter-spacing: 3.3px;
    @media(max-width: 510px) {
        max-width: 110px;
        padding: 7.5px;
        font-size: 12px;
        margin: 0 auto;
    }
`;
interface IProps {
    text: string;
}
const ChartTitle: React.FC<IProps> = ({
    text
}) => (
    <Container>
        <Wrapper>
            <Title>{ text }</Title>
        </Wrapper>
    </Container>
);

export default ChartTitle
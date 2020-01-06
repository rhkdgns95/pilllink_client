import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;
const Title = styled.h3`
    color: #39b14d;
    text-align: center;
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
import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex: 4;
    padding: 15px 10px;
`;
const Title = styled.label`
    color: #147d51;
    font-size: 12px;
    text-transform: uppercase;
    flex: 1;
`;
const Cell = styled.div`
    display: flex;
    align-items: center;
    flex: 3;
`;
interface IProps {
    title: string;
    input: any;
}

const InputCell: React.FC<IProps> = ({
    title,
    input
}) => (
    <Container>
        <Wrapper>
            <Title>{ title }</Title>
            <Cell>
                { input }
            </Cell>
        </Wrapper>
    </Container>
);

export default InputCell;
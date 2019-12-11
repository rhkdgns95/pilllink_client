import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex: 4;
    padding: 15px 10px;
    @media(max-width: 510px) {
        padding: 15px 0;
        & {
            label {
                padding-left: 10px;
                font-size: 11px;
                flex: 2;
            }
            .input-cell-radio {
                margin-left: -13px;
            }
        }
    }
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
            <Cell className={"input-cell-radio"}>
                { input }
            </Cell>
        </Wrapper>
    </Container>
);

export default InputCell;
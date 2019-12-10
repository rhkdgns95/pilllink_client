import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
`;

const Wrapper = styled.div`
    padding: 5px;
`;
const Title = styled.h3`
    color: green;
    font-size: 13px;
    display: flex;
    align-items: center;
    & > svg {
        fill: #f2ba32;
        margin-right: 10px;
    }
`;
const Date = styled.span`

`;
const Record = styled.div`
    border-top: 2px solid #53a553;
`;
const RecordTable = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
`;
const Thead = styled.thead`

`;
const Tbody = styled.tbody`

`;

const Tr = styled.tr`
    border-bottom: 1px solid #becebf;
    font-size: 13px;
`;

const Th = styled.th`
    background-color: #d3ede3;
    color: #1ca673;
    text-align: center;
    // width: 30%;
`;

const Td = styled.td`
    padding: 10px;
    color: gray;
    // width: 70%;
`;
interface IProps {
    lang: string;
    id: number;
}
const Table: React.FC<IProps> = ({
    lang,
    id
}) => (
    <Container>
        <Wrapper>
            <Title>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                Date & Time
                <Date>2019.12.09</Date>     
            </Title>
            <Record>
                <RecordTable>
                    <Thead>
                        <Tr>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Th colSpan={2}>ID.</Th>
                            <Td colSpan={6}>{ id }</Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={2}>Symptoms</Th>
                            <Td colSpan={6}>headache, cough, fever</Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={2}>Result</Th>
                            <Td colSpan={6}>headache, cough, fever</Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={2}>Lang</Th>
                            <Td colSpan={6}>{ lang }</Td>
                        </Tr>
                    </Tbody>
                </RecordTable>
            </Record>
        </Wrapper>
    </Container>
);


export default Table;
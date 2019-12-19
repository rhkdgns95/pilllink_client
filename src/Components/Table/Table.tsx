import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin-top: 10px;
`;

const Wrapper = styled.div`
    padding: 5px;
    margin-bottom: 30px;
    @media(max-width: 510px) {
        margin-bottom: 10px;
        th {
            min-width: 90px;
            font-size: 11px;
        }
        
        td {
            font-size: 11px;
        }
        h3 {
            margin-bottom: 5px;
            svg {
                width: 11px;
                margin-left: 1px;
                margin-right: 5px;
            }
            span {
                margin-left: auto;
            }
        }

        // table, thead, tbody, td, th, tr {
        //     display: block;
        //     width: 100%;
        //     text-align: center;
        // }
        // th {
        //     padding: 7px;
        // }
        // td {
        //     padding: 10px;
        // }
    }
`;
const Title = styled.h3`
    color: #0c9959;
    font-size: 13px;
    display: flex;
    align-items: center;
    & > svg {
        fill: #d59008;
        margin-right: 10px;
    }
`;
const Date = styled.span`
    margin-left: 20px;
    color: #898989;
    font-size: 10px;
`;
const Record = styled.div`
    border-top: 2px solid #0fb76a;
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
    // color: #1ca673;
    color: #197150;
    text-align: center;
    // width: 30%;
    min-width: 100px;
`;

const Td = styled.td`
    padding: 10px;
    color: gray;
    width: 80%;
    // width: 70%;
`;
interface IProps {
    lang: string;
    id: number;
    date: string;
    symptom: string;
    confirmId: number;
    results: Array<any>;
}
const Table: React.FC<IProps> = ({
    lang,
    id,
    date,
    confirmId,
    symptom,
    results
}) => {
    let resultText: string = "";
    results.map((data, key) => {
        if(key > 0) {
            resultText = resultText + ", ".concat(data.name);
        } else {
            resultText = resultText.concat(data.name);
        }
    });
    console.log("RESULTS: ", resultText);
    return (
        <Container>
            <Wrapper>
                <Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                    Date & Time
                    {/* <Date>2019.12.09</Date>      */}
                    <Date>{ date }</Date>     
                </Title>
                <Record className={"record"}>
                    <RecordTable>
                        <Thead>
                            <Tr>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Th colSpan={2}>ID</Th>
                                <Td colSpan={6}>{ id }</Td>
                            </Tr>
                            <Tr>
                                <Th colSpan={2}>Symptoms</Th>
                                <Td colSpan={6}>{ symptom }</Td>
                            </Tr>
                            <Tr>
                                <Th colSpan={2}>Result</Th>
                                <Td colSpan={6}>{ resultText }</Td>
                            </Tr>
                            <Tr>
                                <Th colSpan={2}>Lang</Th>
                                <Td colSpan={6}>{ lang }</Td>
                            </Tr>
                            <Tr>
                                <Th colSpan={2}>Confirm</Th>
                                <Td colSpan={6}>{ confirmId ? confirmId : "Comming soon" }</Td>
                            </Tr>
                        </Tbody>
                    </RecordTable>
                </Record>
            </Wrapper>
        </Container>
    );
}


export default Table;
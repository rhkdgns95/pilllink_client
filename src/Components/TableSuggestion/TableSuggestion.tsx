import React from "react";
import styled from "../../Styles/typed-components";
import { getTime } from "../../Utils/getTime";

const Container = styled.div`
    width: 48.5%;
    padding: 5px;
    margin-bottom: 40px;
`;
const TableCell = styled.div`
`;
const Table = styled.table`
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    border-top: 2px solid #0fb76a;
    color: #6c6c6c;
`;
const Thead = styled.thead`
`;
const Tbody = styled.tbody`

`;
const Tr = styled.tr`
    border-bottom: 1px solid #becebf;
`;
const Th = styled.th`
    background-color: #d3ede3;
    padding: 15px;
    font-size: 13px;
    color: #197150;
    &.table-content {
        padding: 50px 15px;
    }
    @media(max-width: 510px) {
        &.table-content {
            padding: 30px 15px;
        }
    }
`;

const Td = styled.td`
    padding: 15px;
    border: .5px solid #dfdfdf;
    font-size: 13px;
    &.center {
        text-align: center;
    }
`;
const DateHeader = styled.div`
    color: #0c9959;
    font-size: 13px;
    font-weight: bold;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin: 20px 0 10px 0;
    & svg {
        fill: #d59008;
        margin-right: 10px;
    }
`;
const Date = styled.span`
    display: block;
    font-size: 10px;
    color: gray;
    margin-left: 20px;
    @media(max-width: 510px) {
        margin-left: auto;
    }
`;
interface IProps {
    no: number;
    result?: string;
    createdAt: string;
    selector: string;
    text: string;

}
const TableSuggestion: React.FC<IProps> = ({
    no,
    result,
    createdAt,
    selector,
    text,
}) => (
    <Container>
        <DateHeader>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
            Date & Time
            <Date> { getTime(createdAt) } </Date>
        </DateHeader>
        <TableCell>
            <Table>
                <Thead></Thead>
                <Tbody>
                    <Tr>
                        <Th>No</Th>
                        <Td className={"center"}>{ no }</Td>
                        <Th>Title</Th>
                        <Td className={"center"}>{ selector }</Td>
                    </Tr>
                    <Tr>
                        <Th className={"table-content"}>Content</Th>
                        <Td colSpan={4}>
                            <span>{ text }</span>
                        </Td>
                    </Tr>
                    <Tr>
                        <Th>Result</Th>
                            <Td colSpan={4}>
                            <span> {result ? result : "-"} </span>
                            </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableCell>
    </Container>
);
export default TableSuggestion;
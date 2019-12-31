import React from "react";
import styled from "../../Styles/typed-components";
import { useAdminUsersContext, PaginationSettings } from "./AdminUsersProvider";
import PaginationUsers from "../PaginationUsers";
import { PATH_IMG_NA } from "../../Routes/App/AppProvider";
import countries from "../../Utils/translator";
import { getTime } from "../../Utils/getTime";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const TableBox = styled.div`
    margin-bottom: 30px;
`;
const Total = styled.p`
    margin: 10px 0;
`;
const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border: 1px solid #b1b1b1;
    font-size: 12px;
    color: #2a2a2a;
`;
const Thead = styled.thead`
    border-bottom: 1px solid #dfdfdf;
    background-color: #34af77;
    color: #d3ffe9;
`;
const Tbody = styled.tbody`

`;
const Tr = styled.tr`
`
const Th = styled.th`
    padding: 10px;
    text-align: center;
`;
const Td = styled.td`
    padding: 10px;
    text-align: center;
`;

const Img = styled.img`
    width: 30px;
    display: block;
    margin: 0 auto;
`;

const AdminUsersPresenter = () => {
    const { users, max, pagination } = useAdminUsersContext();
    const { cursor } = pagination;
    const { tableCount } = PaginationSettings;
    const index: number = (cursor - 1) * tableCount;
    return (
        <Container>
            <Wrapper>
                <Total>총원 : {max}명</Total>
                <TableBox>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>회원명</Th>
                                <Th>회원아이디</Th>
                                <Th>성별</Th>
                                <Th>나이</Th>
                                <Th>국가</Th>
                                <Th>주소</Th>
                                <Th>내역</Th>
                                <Th>가입날짜</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users && users.map((user, key) => 
                                    <Tr key={key}>
                                        <Td>{index + key + 1}</Td>
                                        <Td>{user!.fullName}</Td>
                                        <Td>{user!.userId}</Td>
                                        <Td>{user!.gender}</Td>
                                        <Td>{user!.age}</Td>
                                        <Td>
                                            <Img src={countries.find(country => country.value === user!.nationality)!.imgPath}/>
                                            {/* {user!.nationality} */}
                                        </Td>
                                        <Td>{user!.isAbroad ? "해외거주" : user!.addressList}</Td>
                                        <Td>{user!.medicalRecordsCount} 건</Td>
                                        <Td>{getTime(user!.createdAt)}</Td>
                                    </Tr>
                                )
                            }
                        </Tbody>
                    </Table>
                </TableBox>
                <PaginationUsers/>
            </Wrapper>
        </Container>
    );
};

export default AdminUsersPresenter;
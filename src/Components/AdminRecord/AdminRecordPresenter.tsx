import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import { useAdminRecordContext } from "./AdminRecordProvider";
import { getUserBoards_GetUserBoards_boards } from "../../Types/api";
import { getTime } from "../../Utils/getTime";
import ModalUpdateResult from "../ModalUpdateResult";
import { TranslatedKorean } from "../../Utils/translated/translatedKorean";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;
const Title = styled.p`
    margin: 20px 0;
    margin-bottom: 10px;
    font-size: 14px;
    color: #8b8b8b;
`;
const TableRow = styled.div`
    width: 100%;
    // min-height: 300px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.24);
    max-height: 350px;
    margin-bottom: 40px;
    @media(max-width: 910px) {
        overflow-x: scroll;
        border: .5px solid #b1b1b1;
    }
`;
const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    color: #2a2a2a;
    min-width: 600px;
    thead {
        color: white;
        background-color: #34af77;
        text-shadow: 0 1px 2px rgba(0,0,0,.3);
    }
    &.waiting-table {
        thead {
            background-color: #e4b633;
        }
    }
    tr {
        &:nth-of-type(2n) {
            // background-color: #f6f6f6
        }
    }
    td, th{
        text-align: center;
        padding: 10px;
        font-size: 12px;
    }
    .text {
        text-overflow: ellipsis; 
        overflow : hidden;
        white-space: nowrap;
        max-width: 120px;
        @media(max-width: 510px) {
            max-width: 80px;
        }
    }
    @media(max-width: 510px) {
        thead, tbody, tr, td, th {
            // display: block;
        }
        thead {
            // display: none;
        }
        tr {
            // display: flex;
            // flex-flow: row wrap;
            & td {
                &:nth-of-type(1) {
                    // background-color: black;
                }
                // width: 50%;
            }
        }
    }
`;
const IconBox = styled.span`
    background-color: white;
    color: #34af77;
    padding: 3.5px 14px;
    font-size: 11px;
    border-radius: 3px;
    background-color: #e4b633;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    margin: 0 auto;
    cursor: pointer;
    & svg {
        margin-right: 5px;
        fill: white;
    }
`;
const IconButton = styled.input`
    background-color: inherit;
    color: white;
    cursor: pointer;
`;
const AdminRecordPresenter = () => {
    const { boards = [], isModal, handleCurrentBoardId, toggleModal } = useAdminRecordContext();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);

    let waitingBoards: Array<getUserBoards_GetUserBoards_boards | null> = [];
    let completedBoards: Array<getUserBoards_GetUserBoards_boards | null> = [];
    
    if(boards) {
        boards.map(board => {
            if(board!.result !== null) {
                completedBoards.push(board);
            } else {
                waitingBoards.push(board);
            }
        });
    }
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);
    
    return (
        <Container className={isEffected ? "active step-container group-radio" : "step-container group-radio"}>
            <Wrapper>
                {
                    waitingBoards && (
                        <>
                            <Title>Questions ({waitingBoards.length}건)</Title>
                            {
                                <TableRow>
                                    <Table className={"waiting-table"}>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>이름</th>
                                                <th>아이디</th>
                                                <th>내용</th>
                                                <th>작성일</th>
                                                <th>종류</th>
                                                <th>답변여부</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                waitingBoards.map((board, key) => 
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td className={"text"}>{ board!.writer.fullName }</td>
                                                        <td className={"text"}>{ board!.writer.userId}</td>
                                                        <td className={"text"}>{ board!.text }</td>
                                                        <td>{ getTime(board!.createdAt) }</td>
                                                        <td>{TranslatedKorean.boardSelectors.find(item => item.value === board!.selector)!.name}</td>
                                                        <td>
                                                            <IconBox onClick={e => {
                                                                toggleModal();
                                                                handleCurrentBoardId(board!.id)
                                                            }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg>
                                                                <IconButton type={"button"} value={"작성"}/>
                                                            </IconBox>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </TableRow>
                            }
                        </>
                    )
                }
                {
                    completedBoards && (
                        <>
                            <Title>Answered question ({completedBoards.length}건)</Title>
                            {
                                <TableRow>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>이름</th>
                                                <th>아이디</th>
                                                <th>내용</th>
                                                <th>종류</th>
                                                <th>작성일</th>
                                                <th>답변일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                completedBoards.map((board, key) => 
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td className={"text"}>{ board!.writer.fullName }</td>
                                                        <td className={"text"}>{ board!.writer.userId}</td>
                                                        <td className={"text"}>{ board!.text }</td>
                                                        <td>{TranslatedKorean.boardSelectors.find(item => item.value === board!.selector)!.name}</td>
                                                        <td>{ getTime(board!.createdAt) }</td>
                                                        <td>{ getTime(board!.updatedAt!) }</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </TableRow>
                            }
                        </>
                    )
                }
                { isModal && <ModalUpdateResult /> }
            </Wrapper>
        </Container>
    );
}

export default AdminRecordPresenter;
import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";
import { PUBLIC_PATH } from "../../Routes/App/AppProvider";
import countries from "../../Utils/translator";

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
    border-bottom: 1px solid #afc7c2;
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
const LinkBtn = styled(Link)`    
    display: flex;
    align-items: center;
    width: 122px;
    padding: 7.5px 22.5px;
    background-color: #21b47c;
    color: white;
    cursor: pointer;
    position: relative;
    font-size: 10.5px;
    &:hover {
        transition: .2s;
        background-color: #19ca86;
    }
    & svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        fill: white;
        transition: .2s;
    }
    &:hover {
        & svg {
            right: 15px;
        }
    }
`;
const SubTable = styled.table`
    // width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    margin: 10px auto;
    // border: 1px solid gray;
    display: table-cell;
    border-top: 2px solid #0fb76a;
    th {
        // background: #59b48b;
        // color: white;
        // background-color: #d5e4ea;
    }
    @media(max-width: 910px) {
        display: table;
        width: 100%;
    }
`;
interface IProps {
    lang: string;
    id: number;
    date: string;
    symptom: string;
    confirmCount: number;
    results: Array<any>;
    isOther?: boolean;
    confirms?: any;
}
const Table: React.FC<IProps> = ({
    lang,
    id,
    date,
    confirmCount,
    symptom,
    results,
    isOther,
    confirms
}) => {
    let resultText: string = "";
    results.map((data, key) => {
        if(key > 0) {
            resultText = resultText + ", ".concat(data.name);
        } else {
            resultText = resultText.concat(data.name);
        }
        return null;
    });
    
    const currentCountry: ICountry = countries.find(country => country.value === lang) || countries[0];
    
    console.log("confirms: ", confirms);


    const confirmArrData = confirms.map((item: any) => {
        const translatedConfirms = currentCountry.confirms;
        const DetailsAmount = translatedConfirms.find(confirm => confirm.value === "AMOUNT")!;
        const DetailsCaution = translatedConfirms.find(confirm => confirm.value === "CAUTION")!;
        const DetailsTime = translatedConfirms.find(confirm => confirm.value === "TIME")!;
        const DetailsWay = translatedConfirms.find(confirm => confirm.value === "WAY")!;
        // const AmountDetails = translatedConfirms.find(confirm => confirm.value === "AMOUNT")!;

        let res_perOneTimeCnt: number = item.res_perOneTimeCnt; 
        let res_way = "" // [1]
        let res_amount = ""; // [2]
        let res_time = ""; // [3]
        let res_cautions = ""; // [4] 주의사항

        const { TO_MORNING,
            TO_LUNCH,
            TO_DINNER,
            TO_SLEEP, } = confirms;

        const {
            CAUTION_SLEEP,
            CAUTION_STOMACAHCHE,
            CAUTION_RASH,
            CAUTION_DIZZY,
            CAUTION_DIARRHEA,
            CAUTION_BLOODPRESSURE
        } = confirms;

        // [1]
        DetailsWay.details.find(detail => {
            const { value } = detail;
            if(value === item.res_way) {
                res_way = detail.name;
                return detail;
            }
        });

        // [2]
        DetailsAmount.details.find(detail => {
            if(detail.value === item.res_amount) { 
                res_amount = detail.name
                return detail;
            }
        });

        // [3]
        DetailsTime.details.map((detail, key) => {
            const { value } = detail;
            if(value === "TO_MORNING" || value === "TO_LUNCH" || value === "TO_DINNER" || value === "TO_SLEEP") {
                if(key > 0) {
                    res_time = res_time + ", ".concat(detail.name);
                } else {
                    res_time = res_time.concat(detail.name);
                } 
            }
        });

        // [4] 주의 사항이 한가지라도 존재한다면,
        if(CAUTION_SLEEP || CAUTION_STOMACAHCHE || CAUTION_RASH || CAUTION_DIZZY || CAUTION_DIARRHEA || CAUTION_BLOODPRESSURE) {
            DetailsCaution.details.map((detail, key) => {
                const { value } = detail;
                if(value === CAUTION_SLEEP || value === CAUTION_STOMACAHCHE || value === CAUTION_RASH || value === CAUTION_DIZZY || value === CAUTION_DIARRHEA || value === CAUTION_BLOODPRESSURE) {
                    if(key > 0) {
                        res_cautions = res_cautions + ", ".concat(detail.name);
                    } else {
                        res_cautions = res_cautions.concat(detail.name);
                    }
                }
            });
        }

        

        console.log("res_amount: ", res_amount);
        // const res_way = translatedConfirms.find(confirm => confirm.)
        return {
            res_perOneTimeCnt,
            res_way,
            res_amount,
            res_time,
            res_cautions
        };
    });
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
                            {/* <Tr>
                                <Th colSpan={2}>Lang</Th>
                                <Td colSpan={6}>{ lang }</Td>
                            </Tr> */}
                            {
                                // 기타 항목은 Confirm이 없다.
                                !isOther && (
                                <>
                                    <Tr>
                                        <Th colSpan={2}>Confirm Count</Th>
                                        <Td colSpan={6}>{ confirmCount ? confirmCount : <LinkBtn to={{pathname: "/feedback", state: { recordId: id, lang }}} >Feedback<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></LinkBtn> }</Td>
                                    </Tr>
                                    {
                                        confirms && confirmCount > 0 &&
                                            <Tr>
                                                <Th colSpan={2}>Confirm</Th>
                                                <Td colSpan={6}>
                                                    {
                                                        confirmArrData.map((item: any, key: number) => (
                                                            <SubTable key={key + "SubTable"}>
                                                                {/* 1회 복용알약 */}
                                                                <Tbody>
                                                                    <Tr>
                                                                        <Th colSpan={2}>{ currentCountry.confirms[0].name }</Th>
                                                                        <Td colSpan={6}>{ item.res_perOneTimeCnt }</Td>
                                                                    </Tr>
                                                                    {/* 복용일 */}
                                                                    <Tr>
                                                                        <Th colSpan={2}>{ currentCountry.confirms[1].name }</Th>
                                                                        <Td colSpan={6}>{ item.res_amount }</Td>
                                                                    </Tr>
                                                                    {/* 복약횟수 */}
                                                                    <Tr>
                                                                        <Th colSpan={2}>{ currentCountry.confirms[2].name }</Th>
                                                                        <Td colSpan={6}>{ item.res_time }</Td>
                                                                    </Tr>
                                                                    {/* 복약방법 */}
                                                                    <Tr>
                                                                        <Th colSpan={2}>{ currentCountry.confirms[3].name }</Th>
                                                                        <Td colSpan={6}>{ item.res_way }</Td>
                                                                    </Tr>  
                                                                    {/* 주의사항 */}
                                                                    <Tr>
                                                                        <Th colSpan={2}>{ currentCountry.confirms[4].name }</Th>
                                                                        <Td colSpan={6}>{ item.res_caution ? item.res_caution : "-" }</Td>
                                                                    </Tr>  
                                                                </Tbody>
                                                            </SubTable>   
                                                        ))
                                                    }
                                                </Td>
                                            </Tr>
                                        }
                                </>
                                )
                            }
                        </Tbody>
                    </RecordTable>
                </Record>
            </Wrapper>
        </Container>
    );
}


export default Table;
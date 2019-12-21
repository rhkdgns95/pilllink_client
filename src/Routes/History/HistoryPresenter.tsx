import React, { useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import Table from "../../Components/Table";
import Pagination from "../../Components/Pagination";
import { useHistoryContext } from "./HistoryProvider";
import { getTime } from "../../Utils/getTime";
import { getMyMedicalRecords_GetMyMedicalRecords_medicalRecords } from "../../Types/api";
import countries from "../../Utils/translator";

const Container = styled.div`

`;
const Box = styled.div`

`;
const Wrapper = styled.div`
    display: block;
    margin-bottom: 30px;
`;

const List = styled.form`

`;
const Tmp = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    opacity: .2;
    width: fit-content;
    &::after {
        content: "";
        position: absolute;
        top: 145%;
        left: 50%;
        width: 100px;
        height: 1px;
        border-radius: 50%;
        background-color: black;
        transform: translate(-50%, -50%);
    }
    & > svg {
        margin-right: 10px;
        // opacity: .2;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
    }
`;
const TmpText = styled.span`
    position: relative;
    font-size: 17px;
`;
/**
 *  cleanNullArgs
 *  
 *  records값은 너무 인자가 많아서 복잡하여, 
 *  null이거나 undefined의 인자는 제거하여 
 *  오직 필요한 인자만(true인 값) 반환한다.
 *  @param arr: 현재 records값을 받는다.
 */
const cleanNullArgs = (arr: any) => {
    let newArr: Array<any> = [];
    if(arr) {
        arr.map((record: any) => {
            if(record) {
                let data: any = {};
                Object.keys(record).forEach(key => {
                    if(record[key] !== null) {
                        data = {
                            ...data,
                            [key]: record[key]
                        }
                    };
                });
                newArr[newArr.length] = data;
            }
        });
    }

    return newArr;
}
const HistoryPresenter = () => {
    const { records } = useHistoryContext();
    const [isEffected, setIsEffected] = useState<boolean>(false);

    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);

    const nullRecords: Array<getMyMedicalRecords_GetMyMedicalRecords_medicalRecords> = cleanNullArgs(records ? records : null);
    const newRecords: Array<any> = [];
    
    nullRecords.map((record, recordKey) => {
        
        const myTranslated = countries.find(country => country.value === record.lang);
        if(myTranslated) {
            const details: ISymptom | undefined = myTranslated.symptoms.find(symptom => symptom.value === record.status);
        if(details) {
            let newObject: any = {};
            let tmpSymptoms: Array<any> = [];
            Object.keys(record).forEach(key => {
                const findDetailsValue = details.details.find(detailItem => detailItem.value === key);
                if(findDetailsValue) {
                    tmpSymptoms.push({
                        name: findDetailsValue.name
                    });

                    // Record값을 Value로 값을 저장할때,
                    // tmpSymptoms.push({
                    //     [findDetailsValue.value]: true
                    // });
                        
                    // newRecords[recordKey] = {
                    //     ...newRecords[recordKey],
                    //     ...findDetailsValue
                    // };
                    // console.log("findDetailsValue: ", findDetailsValue);
                }
            });

            newObject = {
                symptoms: tmpSymptoms,
                name: details.name,
                confirmId: records![recordKey]!.confirmId
            };
            // Record값을 Value로 값을 저장할때,
            // newObject = {
            //     symptoms: tmpSymptoms,
            //     value: details.value
            // };
            if(records && records[recordKey]) {
                newRecords[recordKey] = {
                    id: records[recordKey]!.id,
                    ...newObject
                };
                // console.log("ID: ", records[recordKey]!.id);
            }
            
        }
        }
    });
    
    // console.log("newRecords: ", newRecords);
    // const newRecords: Array<getMyMedicalRecords_GetMyMedicalRecords_medicalRecords> = clean
    return (
        <Container className={"container"}>
            <Box className={"box"}>
                <Navbar
                    title={"PillLink"}
                    subTitle={"Show your symptoms to pharmacy and hospital"}
                />
                <Wrapper className={"row"}>
                    <StepTitle 
                        title={"My page"}
                        subTitle={"You can update your information and see your history"}
                    />
                    <MyMenu isEdit={false}/>
                    <List className={isEffected ? "active step-container" : "step-container"}>
                        {
                            records && newRecords && newRecords.map((record, key) => 
                                <Table key={key} confirmId={record.confirmId} id={records![key]!.id} symptom={record.name} results={record.symptoms} lang={records![key]!.lang} date={getTime(records[key]!.createdAt)}/>
                            )
                        }
                        {
                            records && records.length <= 0  && (
                                <Tmp>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>
                                    <TmpText>No history</TmpText>
                                </Tmp>
                            )
                        }
                        {/* {
                            records && records.map((record, key) => 
                                <Table key={key} id={record!.id} lang={record!.lang} date={getTime(record!.createdAt)}/>
                            )
                            // TmpArray.map((item, key) => <Table key={key}/> )
                        } */}
                    </List>
                    <Pagination/>
                </Wrapper>
            </Box>

            <p>
                <h3>나야</h3>나야
                <div>{process.env.PUBLIC_URL}</div>
            </p>
        </Container>
    );
}

export default HistoryPresenter;
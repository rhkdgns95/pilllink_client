import React, { useState } from "react";
import styled from "../../../Styles/typed-components";
import { useGenderContext } from "../GenderProvider";
import { DatePicker } from "antd";
import ChartDoubleRect from "../../ChartDoubleRect";



const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: Rgba(0,0,0,.53);
    cursor: pointer;
    // Date Piccker
    .date-error {
        position: relative;
        & {
            .ant-calendar-picker:hover,
            .ant-calendar-picker-input:not(.ant-input-disabled) {
                border-color: #ff6060;
            }
        }
        input {
            border: 1px solid #ff8d8d;
        }
        &::after {
            content: "";
            position: absolute;
            left: 5px;
            top: 50%;
            height: 90%;
            transform: translateY(-50%);
            width: 50%;
            background-color: white;
        }
    }      
`;

const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
    cursor: default;
`;
const DateBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
`;
const DateMiddle = styled.span`
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    color: #818181;
`;
const data: Array<IGenderChartProps> = [
    {
        men_name: "남성_1",
        men_units: 3,
        men_color: "blue",
        women_name: "여성_1",
        women_units: 4,
        women_color: "red"
    },
    {
        men_name: "남성_2",
        men_units: 6,
        men_color: "blue",
        women_name: "여성_2",
        women_units: 1,
        women_color: "red"
    },
    {
        men_name: "남성_3",
        men_units: 3,
        men_color: "blue",
        women_name: "여성_3",
        women_units: 4,
        women_color: "red"
    },
    {
        men_name: "남성_4",
        men_units: 0,
        men_color: "blue",
        women_name: "여성_4",
        women_units: 0,
        women_color: "red"
    },
    {
        men_name: "남성_5",
        men_units: 2,
        men_color: "blue",
        women_name: "여성_5",
        women_units: 9,
        women_color: "red"
    },
    
];

const useSelect = (startYear?: string, startMonth?: string) => {
    const [year, setYear] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);

    const onChange = (_: any, date: any) => {
        if(date) {
            const changedYear = date.substr(0, 4);
            const changedMonth = date.substr(5);            
            console.log("startYear:" ,startYear);
            
            // [3] StartDate + EndDate Error
            if(changedYear < 2020) {
                alert("2020년 1월 이후로 선택해주세요.");
                setError(true);
                setYear("");
                setMonth("");
                return false;
            } else {
                // 정살 실행.
                setError(false);
                setYear(changedYear);
                setMonth(changedMonth);
            }

        }
    }
    const handleError = (error: boolean) => {
        setError(error);
    }
    return {
        year,
        month,
        onChange,
        isError,
        handleError
    };
}

const GenderDetailsPresenter = () => {
    const { toggleModal } = useGenderContext();
    // const { MonthPicker } = DatePicker;
    const startDate = useSelect();
    console.log("startDate:" ,startDate);
    const endDate = useSelect(startDate.year, startDate.month);

    const onSubmit = () => {
        console.log("START DATE: ", startDate);
        console.log("END DATE: ", endDate);
        const { year: startYear, month: startMonth } = startDate;
        const { year: endYear, month: endMonth } = endDate;

        // [1] EndDate Error
        if(startYear === "" || startMonth  === "" ||
            endYear === "" || endMonth === "") {
            if(startYear === "") {
                startDate.handleError(true);
            } 
            if(endYear === "") {
                startDate.handleError(true);
            }
            alert("날짜를 선택해주세요!");
            return false;
        }
        // [2] EndDate Error
        if(startYear && startMonth) {
            // if(startMonth > changedMonth && startYear >= changedYear) {
            //     setError(true);
            //     setYear("");
            //     setMonth("")
            //     alert("시작 날짜 이후의 날짜를 선택해주세요");
            //     return false;
            // } 
            const monthLength: number = (parseInt(endYear) - parseInt(startYear)) * 12 + parseInt(endMonth) - parseInt(startMonth);
            if(monthLength < 0) {
                alert("올바른 날짜를 선택해주세요");
                return false;
            }
            if(monthLength > 5) {
                alert("날짜 범위는 최대 6개월 이하로 선택해주세요");
                return false;
            } 
        }
        alert("성공!");
    }
    return (
        <Container id={'antd'} className={"antd-container"} onClick={toggleModal}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <DateBox>
                    <DatePicker.MonthPicker className={startDate.isError ? 'date-error' : ''} size={'default'} placeholder="Start date" onChange={startDate.onChange} />
                    <DateMiddle> ~ </DateMiddle>
                    <DatePicker.MonthPicker className={endDate.isError ? 'date-error' : ''} size={'default'} placeholder="End date" onChange={endDate.onChange} />
                </DateBox>
                <button onClick={onSubmit}>전송</button>
                <ChartDoubleRect data={data} format={"성별 상세검색"}/>
                
            </Wrapper>
        </Container>
    );
};

export default GenderDetailsPresenter;
import React, { useState, useEffect } from "react";
import styled from "../../../Styles/typed-components";
import { useGenderContext } from "../GenderProvider";
import { DatePicker } from "antd";
import ChartDoubleRect from "../../ChartDoubleRect";
import { useGenderDetailsContext } from "./GenderDetailsProvider";
import Chart from "react-apexcharts";

const { RangePicker } = DatePicker;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.53);
    cursor: pointer;
    // Date Piccker
    z-index: 11;
    .date-error {
        position: relative;
        & {
            .ant-calendar-picker:hover,
            .ant-calendar-picker-input:not(.ant-input-disabled) {
                // border-color: #ff6060;
            }
        }
        input {
            // border: 1px solid #ff8d8d;
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
    max-width: 600px;
    background-color: white;
    cursor: default;
    border-radius: 3px;
    padding: 20px;
    height: auto;
    @media(max-width: 510px) {
        height: 95%;
        overflow-y: scroll;
    }
`;
const DateBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    @media(max-width: 510px) {
        flex-flow: row wrap;
    }
`;
const SubmitButton = styled.button`
    padding: 7.5px 21px;
    background-color: red;
    color: white;
    margin-left: 10px;
    font-size: 12px;
    border-radius: 3px;
    background-color: #4caf50;
    cursor: pointer;
    @media(max-width: 510px) {
        margin-left: 0;
        margin: 15px 0;
        margin-top: 20px;
        width: 100%;
    }
`;
const Title = styled.h1`
    position: relative;
    font-size: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    color: #13ac48;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 10px;
    & svg {
        display: flex;
        justify-content: center;
        align-items: center;
        &.close-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            padding: 7px;
            // border: 1px solid red;
            fill: #b4b4b4;
            
            transition: .2s;
            cursor: pointer;
            &:hover {
                fill: #ec9a9a;
            }
        }
        &.title-icon {
            padding: 4px;
            border-radius: 3px;
            border: 1px solid #1bb34e;
            fill: #1bb34e;
            margin-right: 7px;
        }
    }
`;

const usePicker = () => {
    const [mode, setMode] = useState(['month', 'month']);
    const [value, setValue] = useState([]);

    const handlePanelChange = (value: any, mode: any) => {
        setMode([mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]]);
        setValue(value);
    };
    
    const handleChange = (value: any) => {
        setValue(value);
    };

    return {
        value,
        mode,
        handlePanelChange,
        handleChange
    }
}

const GenderDetailsPresenter = () => {
    const { toggleModal } = useGenderContext();
    const { getGender, loading, series, options, handleChangeChart, monthGender } = useGenderDetailsContext();
    
    const picker = usePicker();

    /**
     *  onSubmit 날짜 선택해서 날짜별로 유저 확인하기.
     * 
     *  조건
     *  [1] 2020년 1월 이후로 선택
     *  [2] 범위는 최대 6개월 이하로 선택
     */
    const onSubmit = () => {
        const { value } = picker;
        if(value.length > 0) {
            const startDate: any = value[0];
            const startYear: number = startDate._d.getFullYear(); 
            const startMonth: number = (startDate._d.getMonth() % 11) + 1;

            const endDate: any = value[1];
            const endYear: number = startDate._d.getFullYear();
            const endMonth: number = (endDate._d.getMonth() % 11) + 1;
            if(startYear <= 2019) {
                alert("2020-01 이후 날짜로 선택해주세요.");
                return false;
            }
            // [2] EndDate Error
            if(startYear && startMonth) {
            
                const monthLength: number = (endYear - startYear) * 12 + endMonth - startMonth;
                if(monthLength < 0) {
                    alert("올바른 날짜를 선택해주세요");
                    return false;
                }
                if(monthLength > 5) {
                    alert("날짜 범위는 최대 6개월 이하로 선택해주세요");
                    return false;
                } 
            }
            // 성공

            getGender({
                variables: {
                    dateFrom: {
                        dateStartYear: startYear,
                        dateStartMonth: startMonth
                    },
                    dateTo: {
                        dateStartYear: endYear,
                        dateStartMonth: endMonth
                    }
                }
            });
        }
    }
    // console.log("monthGender:" ,monthGender);
    // console.log("PICKER: ", picker);
    return (
        <Container onClick={toggleModal}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>
                    <svg className={"title-icon"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/></svg>
                    Details
                    <svg onClick={toggleModal} className={'close-btn'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </Title>
                <DateBox>
                    <RangePicker 
                        placeholder={['Start month', 'End month']}
                        format="YYYY-MM"
                        value={ picker.value }
                        mode={ picker.mode }
                        // ranges={"2019-07"}
                        onChange={picker.handleChange}
                        onPanelChange={picker.handlePanelChange}
                    />
                    { picker.value.length !== 0 && <SubmitButton onClick={onSubmit}>Search</SubmitButton> }
                </DateBox>
                {
                    series && monthGender && (
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="450"
                            width="100%"
                        />
                    )
                }
            </Wrapper>
        </Container>
    );
};

export default GenderDetailsPresenter;
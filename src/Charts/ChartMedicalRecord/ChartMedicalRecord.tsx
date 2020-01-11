import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import ChartTitle from "../../Components/ChartTitle";
import ButtonDetails from "../../Components/ButtonDetails";
import Chart from "react-apexcharts";
import { useLazyQuery } from "react-apollo";
import { GET_PERIOD_MEDICAL_RECORD } from "./ChartMedicalRecordQueries";
import { getPeriodMedicalRecord, getPeriodMedicalRecordVariables, PeriodDate } from "../../Types/api";
import RadioBoxText from "../../Components/RadioBoxText";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;
const Container = styled.div`

`;
const ButtonBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 0;
    justify-content: flex-end;
    & > div {
        margin-left: 10px;
    }
`;
const Line = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
    margin-top: 5px;
    @media(max-width: 510px) {
        justify-content: flex-start;
    }
`;
const LineText = styled.span`
    width: 100%;
    max-width: 110px;
    font-size: 13px;
    font-weight: bold;
    @media(max-width: 510px) {
        margin-bottom: 10px;
        margin-top: 5px;
        margin-left: 3%;
    }
`;
const LineData = styled.p`
    max-width: 400px;
    width: 100%;
    font-size: 20px;
    text-align: right;
    border-bottom: 2px solid #35d04f;
    font-weight: bold;
    color: #35d04f;
    padding-bottom: 4px;
    @media(max-width: 510px) {
        width: 90%;
        margin: 0 auto;
    }
`;
const LineButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
    flex-flow: row wrap;
    @media(max-width: 510px) {
        justify-content: space-between;
        margin: 5px 10px;
    }
`;
const PeriodDateBox = styled.div`
    display: flex;
    justify-content: center;
    
    & .ant-calendar-range {
        width: 350px;
        overflow: hidden;
        transform: scale(.8);
    }
    @media(max-width: 510px) {
        .ant-calendar {
            width: 350px;
        }
        .ant-calendar-picker-input {
            max-width: 300px; 
            font-size: 11px;
            margin: 0 auto;
        }
        
    }
`;

const useRadio = (initValue: string, callbackFn: any) => {
    const [value, setValue] = useState<string>(initValue);
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const { target: { value }} = event;
        setValue(value);
        
        if(value === "period") {

        } else {
            const endDate = new Date(); // 현재 시간.
            let startDate;
            if(value === "week") {
                startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 6);    
            } else if(value === "month") {
                startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate());    
            } else if(value === "year") {
                startDate = new Date(endDate.getFullYear() - 1, endDate.getMonth(), endDate.getDate());    
            } 
            callbackFn(startDate, endDate);
        }
        
    };

    return {
        value,
        onChange
    };
}

const useFetch = () => {
    const [options, setOptions] = useState();
    const [series, setSeries] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const [ getPeriodMedicalRecord, { data, loading } ] = useLazyQuery<getPeriodMedicalRecord, getPeriodMedicalRecordVariables>(GET_PERIOD_MEDICAL_RECORD, {
        onCompleted: data => {
            // console.log("GetPeriodMedicalRecord onCompleted: " ,data);
        },
        onError: data => {
            console.log("GetPeriodMedicalRecord onError: " ,data);
        }
    });

    const handleMedicalRecord = (start: Date, end: Date) => {
        const startDate: PeriodDate = {
            year: start.getFullYear(),
            month: start.getMonth() + 1,
            day: start.getDate()
        };
        const endDate: PeriodDate = {
            year: end.getFullYear(),
            month: end.getMonth() + 1,
            day: end.getDate()
        };

        getPeriodMedicalRecord({
            variables: {
                date: {
                    startDate,
                    endDate
                }
            }
        })
    };
    const period = useRadio("week", handleMedicalRecord);
    
    const handleChangeRangePicker = (arrDate: Array<any>) => {
        const start = arrDate[0];  
        const end = arrDate[1];  
        const startDate = new Date(start._d);
        const endDate = new Date(end._d);
        // console.log("handleChangeRangePicker - start: ", startDate);
        // console.log("handleChangeRangePicker - end: ", endDate);
        handleMedicalRecord(startDate, endDate);
    }
    // const handleClickWeek = () => {
    //     const endDate = new Date(); // 현재 시간.
    //     const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 6);
    //     handleMedicalRecord(startDate, endDate);
    // };
    // const handleClickMonth = () => {
    //     const endDate = new Date(); // 현재 시간.
    //     const startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate());
    //     handleMedicalRecord(startDate, endDate);
    // };
    // const handleClickYear = () => {
    //     const endDate = new Date(); // 현재 시간.
    //     const startDate = new Date(endDate.getFullYear() - 1, endDate.getMonth(), endDate.getDate() - 6);
    //     handleMedicalRecord(startDate, endDate);
    // };
    
    /**
     *  useEffect
     * 
     *  기간의 초기값: 6일
     */
    useEffect(() => {
        const endDate = new Date(); // 현재 시간.
        const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 6);
        handleMedicalRecord(startDate, endDate);
    }, []);

    useEffect(() => {
        if(!series) {
            setSeries([
                {
                    name: "Medical Record",
                    data: [ 
                        // 10, 20, 30, 40, 50 
                    ]
                }
            ]);
        }
        if(!options) {
            setOptions({
                chart: {
                    background: '#fff',
                    foreColor: '#333',
                    shadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 1
                    },
                },
                xaxis: {
                    categories: [
                        // '한국', '미국', '영국', '대만' , '태국'
                    ]
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#f44336']
                },
                colors: ["#0fc983"],
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: "Population By Medical Record",
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '15px'
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        if(data) {
            // console.log("EXIST DATA: ", data);
            const { ok, error, data: medicalData } = data.GetPeriodMedicalRecord;
            if(ok && medicalData) {
                // set
                setSeries([
                    {
                        ...series,
                        data: medicalData.map(item => item!.count)
                    }
                ]);
                setOptions({
                    chart: {
                        background: '#fff',
                        foreColor: '#333',
                        shadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 1
                        },
                    },
                    xaxis: {
                        categories: medicalData.map(item => item!.title)
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    fill: {
                        colors: ['#f44336']
                    },
                    // 색상
                    colors: ["#0fc983"],
                    dataLabels: {
                        enabled: true
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    title: {
                        text: "Population By Medical Record",
                        align: 'center',
                        margin: 20,
                        offsetY: 20,
                        style: {
                            fontSize: '15px'
                        }
                    }
                });
            }
        }
    }, [data]);
    
    const handleChange = () => {
        setOptions({
            ...options,
            plotOptions: {
                ...options.plotOptions,
                bar: {
                    // ...options.plotOptions.bar,
                    horizontal: options.plotOptions.bar ? !options.plotOptions.bar.horizontal : false
                }
            },
        })
    };

    return {
        handleChange,
        loading, 
        series, 
        options,
        period,
        handleChangeRangePicker
    };
}
const ChartMedicalRecord= () => {
    const { period, handleChange, loading, series, options, handleChangeRangePicker } = useFetch();

    return (
        <Container className={"chart-container"}>
            <ChartTitle text={"기간별"}/>
            <Line>
                <LineText>총 누적 이용 횟수</LineText>
                <LineData>3,300</LineData>
            </Line>
            <Line>
                <LineText>기간별 조회</LineText>
                <LineButtonBox>
                    <RadioBoxText id={1} name={"radio_period"} text={"일주일"} onChange={period.onChange} value={"week"} checked={period.value === "week"}/>
                    <RadioBoxText id={2} name={"radio_period"} text={"한달"} onChange={period.onChange} value={"month"} checked={period.value === "month"}/>
                    <RadioBoxText id={3} name={"radio_period"} text={"일년"} onChange={period.onChange} value={"year"} checked={period.value === "year"}/>
                    <RadioBoxText id={4} name={"radio_period"} text={"기간"} onChange={period.onChange} value={"period"} checked={period.value === "period"}/>
                    
                </LineButtonBox>
            </Line>
            <>
                {
                    period.value === "period" && (
                        <PeriodDateBox>
                            <RangePicker onChange={handleChangeRangePicker} />
                        </PeriodDateBox>
                    )
                }
            </>
            <ButtonBox>
                {/* <ButtonDetails value={"Details"} onClick={toggleModal} /> */}
                {/* <ButtonDetails onClick={handleChange} value={"View"} /> */}
            </ButtonBox>
            <div style={{ width: "100%", textAlign: "center" }}>
                {
                    !loading && series && (
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            height="550"
                            width="100%"
                        />
                    )
                }
            </div>
        </Container>
    );
};

export default ChartMedicalRecord;
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useQuery } from "react-apollo";
import { GET_NATIONALITY_USER } from "./ChartNationalityQueries";
import { getNationalityUser } from "../../Types/api";
import ButtonDetails from "../../Components/ButtonDetails";
import styled from "../../Styles/typed-components";
import ChartTitle from "../../Components/ChartTitle";

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

const useFetch = () => {
    const { data, loading } = useQuery<getNationalityUser, any>(GET_NATIONALITY_USER, {
        onCompleted: data => {
            // console.log("GetNationality onCompleted: ", data);
        },
        onError: data => {
            console.log("GetNationality Error: ", data);
        }
    });
    return {
        data,
        loading
    }
};
const ChartNationality = () => {
    const [options, setOptions] = useState();
    const [series, setSeries] = useState();
    const { data, loading } = useFetch();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);

    useEffect(() => {
        if(!series) {
            setSeries([
                {
                    name: "Nationality",
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
                    foreColor: '#333'
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
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: "Population By Country",
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
            const { ok, error, countries } = data.GetNationalityUser;
            if(ok && countries) {
                // set
                setSeries([
                    {
                        ...series,
                        data: countries.map(item => item!.count)
                    }
                ]);
                setOptions({
                    chart: {
                        background: '#fff',
                        foreColor: '#333'
                    },
                    xaxis: {
                        categories: countries.map(item => item!.name)
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    fill: {
                        colors: ['#f44336']
                    },
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: "Population By Country",
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
    
    const handleClick = () => {
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

    return (
        <div className={"chart-container"}>
            <ChartTitle text={"국가별"}/>
            <ButtonBox>
                {/* <ButtonDetails value={"Details"} onClick={toggleModal} /> */}
                <ButtonDetails onClick={handleClick} value={"View"} />
            </ButtonBox>
            <div style={{ width: "100%", textAlign: "center" }}>
                {
                    !loading && series && (
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height="450"
                            width="100%"
                        />
                    )
                }
            </div>
        </div>
    )
};

export default ChartNationality;
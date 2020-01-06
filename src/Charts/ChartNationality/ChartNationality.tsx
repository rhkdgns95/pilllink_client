import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useQuery } from "react-apollo";
import { GET_NATIONALITY_USER } from "./ChartNationalityQueries";
import { getNationalityUser } from "../../Types/api";
import ButtonDetails from "../../Components/ButtonDetails";
const data3 = [
    {
        name: '한국',
        units: 150,
        color: "rgb(63,189,222)"
    },
    {
        name: '미국',
        units: 110,
        color: '#ff5722'
    },
    {
        name: '영국',
        units: 200,
        color: "#2764ff"
    },
    {
        name: '대만',
        units: 120,
        color: '#ff5722'
    },
    {
        name: '태국',
        units: 150,
        color: "#2764ff"
    },
    {
        name: '일본',
        units: 120,
        color: '#ff5722'
    },
    {
        name: '중국',
        units: 150,
        color: "#2764ff"
    },
    {
        name: '프랑스',
        units: 120,
        color: '#ff5722'
    }
];

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
                    background: '#f4f4f4',
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
                        fontSize: '25px'
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
                        background: '#f4f4f4',
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
                            fontSize: '25px'
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
        <div>
            <div>
                <ButtonDetails onClick={handleClick} value={"Change"}/>
            </div>
            <div style={{ margin: "10px auto", width: "100%", textAlign: "center" }}>
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
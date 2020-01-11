import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import ChartTitle from "../../Components/ChartTitle";
import ButtonDetails from "../../Components/ButtonDetails";
import { useQuery } from "react-apollo";
import Chart from "react-apexcharts";
import { GET_AGE_USER } from "./AgeQueries";
import { getAgeUser, getAgeUser_GetAgeUser_userAge } from "../../Types/api";

const Container = styled.div`

`;

const Wrapper = styled.div`

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

const useFetch = () => {
    const [options, setOptions] = useState();
    const [series, setSeries] = useState();
    
    const { data, loading } = useQuery<getAgeUser, any>(GET_AGE_USER, {
        onCompleted: data => {
            console.log("GetAgeAddress onCompleted: ", data);
        },
        onError: data => {
            console.log("GetAgeAddress onError: ", data);
        }
    });
    const userAge: Array<getAgeUser_GetAgeUser_userAge | null> | null = data ? data.GetAgeUser.userAge : [];
    console.log("userAge: ", userAge);
    useEffect(() => {
        if(!series) {
            setSeries([
                {
                    name: "Age",
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
                    text: "Population By Age",
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
        console.log("실행됨!: ", data);
        if(userAge) {
            console.log("userAge ", userAge);
            setSeries([
                {
                    ...series,
                    data: userAge.map(item => item!.count) || 0
                }
            ]);
            setOptions({
                chart: {
                    background: '#fff',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: userAge.map(item => item!.title) || "NULL"
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#27c98f']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: "Population By Area",
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '15px'
                    }
                }
            });
        }
    }, [data]);
    

    const handleChangeChart = () => {
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
        userAge,
        loading,
        series, 
        options,
        handleChangeChart   
    };
};

const Age = () => {

    const { userAge, loading, series, options, handleChangeChart } = useFetch();

    return (
        <Container className={"chart-container"}>
            <Wrapper>
                <ChartTitle text={"연령별"}/>
                <ButtonBox>
                    <ButtonDetails value={"View"} onClick={handleChangeChart} />
                </ButtonBox>
                { 
                    // !loading && gender && <ChartRect data={data} format={"명"}/> 
                    !loading && series && userAge && (
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

export default Age;
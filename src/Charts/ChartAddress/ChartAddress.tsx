import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import Chart from "react-apexcharts";
import { AddressKOR } from "../../Utils/addressKOR";
import { useQuery } from "react-apollo";
import { GET_ADDRESS_USER } from "./ChartAddressQueries";
import { getAddressUser } from "../../Types/api";
import ButtonDetails from "../../Components/ButtonDetails";
import ChartTitle from "../../Components/ChartTitle";

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
const ChartTable = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border-top: 2px solid #21c983;
    border-bottom: 1px solid #dfdfdf;
    tbody {
        display: flex;
        flex-flow: row wrap;
    }
    tr {
        display: flex;
        justify-content: center;
        width: 33.3333%;
        text-align: center;
        align-items: center;
        font-size: 12px;
        border-bottom: .3px solid rgba(0,0,0,0.24);
    }
    th {
        width: 50%;
        padding: 10px;
        background-color: #bbeed8;
    }
    td {
        width: 50%;
    }
    @media(max-width: 910px) {
        tr {
            width: 50%;
        }
        th {

        }
        td {

        }
    }
`;
const ChartSubTitle = styled.p`
    margin: 10px 0;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    list-style: circle;
    margin-top: 20px;
    &.margin-title {
        margin-bottom: -32px;
        margin-top: 45px;
    }
`;
const SelectArea = styled.select`
    padding: 7.5px 10px;
    padding-left: 3px;
    font-size: 12px;
    border: 1px solid #dfdfdf
    border-radius: 3px;
    &:focus,
    &:active {
        border: 1px solid #28b664;
    }
    @media(max-width: 510px) {
        margin-right: auto;
    }
`;
const useSelect = () => {
    const [ value, setValue ] = useState<string>("ALL");
    
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { target: { value }} = event;
        // console.log("Changed: ", value);
        setValue(value);
    };

    return {
        value,
        onChange
    };
}
const useFetch = () => {
    const { data, loading } = useQuery<getAddressUser, any>(GET_ADDRESS_USER, {
        onCompleted: data => {
            // console.log("GET_ADDRES_USER onCompleted: ", data);
        },
        onError: data => {
            console.log("GET_ADDRES_USER onError: ", data);
        }
    });
    const users = data ? data.GetAddressUser.users : [];
    const [options, setOptions] = useState();
    const [series, setSeries] = useState();
    const [korean, setKorean] = useState(); 
    const selector = useSelect();
    let inKorean: Array<any> = [];

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
    }, []);
    
    useEffect(() => {
        if(users && users.length > 0) {
            let inAbroad: Array<any> = [];
            users.map(user => {
                if(user!.isAbroad) { // 해외 거주.
                    
                } else { // 그렇지 않은사람.
                    let tmpKorean = AddressKOR.map(address => {
                        return {
                            name: address.name,
                            value: address.value,
                            count: 0
                        }
                    }) || [{}];
                    users.map(user => {
                        if(user!.addressList) {
                            tmpKorean = tmpKorean.map(item => {
                                if(item.value === user!.addressList) {
                                    return {
                                        name: AddressKOR.find(korItem => korItem.value === item.value)!.name,
                                        value: item.value,
                                        count: item.count + 1
                                    }
                                } else {
                                    return item;
                                }
                            });
                        }
                    }); 
                    inKorean = tmpKorean;
                    setKorean(tmpKorean);
                }
            });
            // console.log("INKOREAN: ", inKorean);
            
            setSeries([
                {
                    ...series,
                    data: inKorean.map(item => item.count)
                }
            ]);
            
            setOptions({
                chart: {
                    background: '#fff',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: inKorean.map(item => item.name)
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
    }, [users]);
    
    useEffect(() => {
        if(users && users.length > 0) {
            const { value: selectorValue } = selector;
            let inAbroad: Array<any> = [];
            if(selectorValue === "ALL") {
                users.map(user => {
                    if(user!.isAbroad) { // 해외 거주.
                        
                    } else { // 그렇지 않은사람.
                        let tmpKorean = AddressKOR.map(address => {
                            return {
                                name: address.name,
                                value: address.value,
                                count: 0
                            }
                        }) || [{}];
                        users.map(user => {
                            if(user!.addressList) {
                                tmpKorean = tmpKorean.map(item => {
                                    if(item.value === user!.addressList) {
                                        return {
                                            name: AddressKOR.find(korItem => korItem.value === item.value)!.name,
                                            value: item.value,
                                            count: item.count + 1
                                        }
                                    } else {
                                        return item;
                                    }
                                });
                            }
                        }); 
                        inKorean = tmpKorean;
                        setKorean(tmpKorean);
                    }
                });
                setSeries([
                    {
                        ...series,
                        data: inKorean.map(item => item.count)
                    }
                ]);
                
                setOptions({
                    chart: {
                        background: '#fff',
                        foreColor: '#333'
                    },
                    xaxis: {
                        categories: inKorean.map(item => item.name)
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
            } else {
                const koreanArea: IAddress | null = AddressKOR.find(item => item.value === selectorValue) || null;
                const koreanUser = users.filter(user => !user!.isAbroad);
                if(koreanArea && users){
                    const currentAreaUsers = koreanUser.filter(user => user!.addressList === selectorValue);
                    let tmpArea = koreanArea.details.map(area => {
                        return {
                            name: area.name,
                            value: area.value,
                            count: 0
                        };
                    });
                    currentAreaUsers.map(user => {
                        tmpArea = tmpArea.map(tmpArea => {
                            if(tmpArea.value === user!.addressItem) {
                                return {
                                    name: tmpArea.name,
                                    value: tmpArea.value,
                                    count: tmpArea.count + 1
                                };
                            } else {
                                return tmpArea;
                            }
                        });
                    });
                    setSeries([
                        {
                            ...series,
                            data: tmpArea.map(item => item.count)
                        }
                    ]);
                    
                    setOptions({
                        chart: {
                            background: '#fff',
                            foreColor: '#333'
                        },
                        xaxis: {
                            categories: tmpArea.map(item => item.name)
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
                
            }
            
        }
    }, [selector.value]);

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


    return {
        loading,
        korean,
        series,
        options,
        users,
        handleClick,
        selector
    };
}


const ChartAddress = () => {
    const { series, selector, korean, options, users, loading, handleClick } = useFetch();
    
    let total: number = 0;
    
    return (
        <Container className={"chart-container"}>
            <Wrapper>
                <ChartTitle text={"지역별"}/>
                <ChartSubTitle>지역별 가입자 수</ChartSubTitle>
                {
                    !loading && series && users && korean && korean.length > 0 && (
                        <ChartTable>
                            <thead></thead>
                            <tbody>
                                {
                                    korean.map((item: any, key: number) => {
                                        total += item.count;
                                        return (
                                            <tr key={key}>
                                                <th>{ item.name }</th>
                                                <td>{ item.count }</td>
                                            </tr>
                                        );
                                    })
                                }   
                                {
                                    <tr>
                                        <th>(국내)총 원</th>
                                        <td>{ total }</td>
                                    </tr>
                                }
                            </tbody>
                        </ChartTable>
                    )
                }
                <ChartSubTitle className={"margin-title"}>지역별 통계</ChartSubTitle>
                
                
                <ButtonBox>
                    {/* <ButtonDetails value={"Details"} onClick={toggleModal} /> */}
                    {
                        !loading && series && users && korean && korean.length > 0 && (
                            <SelectArea { ...selector }>
                                {
                                    <option value={'ALL'}>전체</option>
                                }
                                {
                                    korean.map((item: any, key: number) => 
                                        <option key={key} value={item.value}>{item.name}</option>
                                    )    
                                }
                            </SelectArea>
                        )
                    }
                    <ButtonDetails onClick={handleClick} value={"View"} />
                </ButtonBox>
                {
                    !loading && series && users && (
                        <Chart
                            options={options}
                            series={series}
                            type={'bar'}
                            height={'550'}
                            width={'100%'}
                        />
                    )
                }
                
            </Wrapper>
        </Container>
    );
};

export default ChartAddress;
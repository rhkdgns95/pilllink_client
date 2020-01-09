import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import Chart from "react-apexcharts";
import { AddressKOR } from "../../Utils/addressKOR";
import { useQuery } from "react-apollo";
import { GET_ADDRESS_USER } from "./ChartAddressQueries";
import { getAddressUser } from "../../Types/api";
import ButtonDetails from "../../Components/ButtonDetails";

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
            let inKorean: Array<any> =  [];
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

    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);

    return {
        loading,
        series,
        options,
        users,
        handleClick,
        isEffected
    };
}



const ChartAddress = () => {
    const { series, options, users, loading, handleClick, isEffected } = useFetch();
    // console.log("users: ", users);
    return (
        <Container>
            <Wrapper className={isEffected ? "active step-container group-radio" : "step-container group-radio"}>
                <ButtonBox>
                    {/* <ButtonDetails value={"Details"} onClick={toggleModal} /> */}
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
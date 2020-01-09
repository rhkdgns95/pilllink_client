import React, { createContext, useContext, useEffect, useState } from "react";
import { getGenderVariables, getGender } from "../../../Types/api";
import { GET_GENDERS } from "../GenderQueries";
import { useQuery, useLazyQuery } from "react-apollo";
import { getGender_GetGenders_monthGender } from "../../../Types/api";
interface IContext {
    getGender: (data: any) => any;
    loading: boolean;    
    options: any;
    series: any;
    handleChangeChart: () => any;
    monthGender: (getGender_GetGenders_monthGender | null)[] | null;
}
const InitContext: IContext = {
    getGender: () => {},
    loading: false,
    options: {},
    series: {},
    handleChangeChart: () => {},
    monthGender: []
}

const GenderDetailsContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useGenderDetailsContext = () => useContext(GenderDetailsContext);

const useFetch = (): { value: IContext } => {
    const [ getGender, { data, loading }] = useLazyQuery<getGender, getGenderVariables>(GET_GENDERS, {
        // variables: {
        //     dateFrom: {
        //         dateStartYear: 2019,
        //         dateStartMonth: 10
        //     },
        //     dateTo: {
        //         dateStartYear: 2020,
        //         dateStartMonth: 1
        //     }
        // },
        onCompleted: data => {
            // console.log("GetGenders sonCompleted: ", data);
        },
        onError: data => {
            console.log("GetGenders onError: ", data);
        }
    });

    const [options, setOptions] = useState();
    const [series, setSeries] = useState();

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
                    foreColor: '#333',
                    stacked: false
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
                    // colors: ['#99C2A2', '#C5EDAC'],
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: "Gender Details",
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '15px'
                    }
                },
                stroke: {
                    // width: [4, 4]
                }
            });
        }
    }, []);
    useEffect(() => {
        if(data) {
            // console.log("EXIST DATA: ", data);
            const { ok, error, monthGender } = data.GetGenders;
            if(ok && monthGender) {
                // set
                setSeries([
                    // { ...series },
                    {
                        name: "Men",
                        type: "column",
                        data: monthGender.map(item => item!.men || 0)
                    },
                    {
                        name: "Women",
                        type: "column",
                        data: monthGender.map(item => item!.women || 0)    
                    }
                ]);
                setOptions({
                    chart: {
                        background: '#fff',
                        foreColor: '#333',
                        type: "line"
                    },
                    xaxis: {
                        categories: monthGender.map(item => item!.month + "월" || "XX")
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    fill: {
                        // colors: ['#f44336'],
                        // colors: ['#99C2A2', '#C5EDAC'],
                    },
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: "Gender Details ",
                        align: 'center',
                        margin: 20,
                        offsetY: 20,
                        style: {
                            fontSize: '15px'
                        }
                    },
                    stroke: {
                        width: [4, 4]
                    }
                });
            }
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
    const monthGender = data ? data.GetGenders.monthGender : [];
    return {
        value: {
            getGender,
            loading,
            series,
            options,
            handleChangeChart,
            monthGender
        }
    }
};

const GenderDetailsProvider: React.FC<any> = ({
    children
}) => (
    <GenderDetailsContext.Provider { ...useFetch() }>
        {
            children
        }
    </GenderDetailsContext.Provider>
);

export { useGenderDetailsContext };
export default GenderDetailsProvider;
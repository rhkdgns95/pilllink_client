import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { getGender, getGender_GetGenders_monthGender, getGenderVariables } from "../../Types/api";
import { GET_GENDERS } from "./GenderQueries";

interface IContext {
    gender: getGender_GetGenders_monthGender | null;
    loading: boolean;    
    isModal: boolean;
    toggleModal: () => any;
    options: any;
    series: any;
    handleChangeChart: () => any;
}

const InitContext: IContext = {
    gender: null,
    loading: false,
    isModal: false,
    toggleModal: () => {},
    options: {},
    series: {},
    handleChangeChart: () => {}
};

const GenderContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useGenderContext = () => useContext(GenderContext);

const useFetch = (): { value: IContext } => {
    const { data, loading } = useQuery<getGender, getGenderVariables>(GET_GENDERS, {
        variables: {
            dateFrom: null,
            dateTo: null
        },
        onCompleted: data => {
            // console.log("GetGenders onCompleted: ", data);
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
                        horizontal: false,
                        columnWidth: "20%"
                    }
                },
                fill: {
                    // colors: ['#99C2A2', '#C5EDAC'],
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
                },
                stroke: {
                    width: [4, 4]
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
                        name: "남성",
                        type: "column",
                        data: monthGender.map(item => item!.men || 0)
                    },
                    {
                        name: "여성",
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
                        categories: ["Total"]
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: "20%"
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
                        text: "Population By Gender",
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

    const [isModal, setIsModal] = useState<boolean>(false);
    
    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const genders = data ? data.GetGenders.monthGender : null;
    return {
        value: {
            gender: genders ? genders[0] : null,
            loading,
            isModal,
            toggleModal,
            options,
            series,
            handleChangeChart
        }
    };

}

const GenderProvider: React.FC<any> = ({
    children
}) => (
    <GenderContext.Provider { ...useFetch() }>
        {
            children
        }
    </GenderContext.Provider>
);

export { useGenderContext };
export default GenderProvider;
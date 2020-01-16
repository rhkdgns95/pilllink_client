import React, { useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import { useGenderContext } from "./GenderProvider";
import GenderDetails from "./GenderDetails/GenderDetailsContainer";
import ChartTitle from "../../Components/ChartTitle";
import ButtonDetails from "../../Components/ButtonDetails";
import Chart from "react-apexcharts";
// import ChartRect from "../ChartRect";
import 'promise-polyfill/src/polyfill';


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

const GenderPresenter = () => {
    const { gender, loading, isModal, toggleModal, series, options, handleChangeChart } = useGenderContext();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if(!isMounted) {
            setIsMounted(true);
        }
    }, []);
    let data: Array<IChartProps> = [
        {
            color: "orange",
            name: "남성",
            units: gender && gender.men || 0
        },
        {
            color: "red",
            name: "여성",
            units: gender && gender.women || 0
        }
    ];
    
    return (
        <Container className={"chart-container"}>
            {
                !loading && gender && (
                    <Wrapper>
                        <ChartTitle text={"성별"}/>
                        <ButtonBox>
                            <ButtonDetails value={"Details"} onClick={toggleModal} />
                            <ButtonDetails value={"View"} onClick={handleChangeChart} />
                        </ButtonBox>
                        { 
                            // !loading && gender && <ChartRect data={data} format={"명"}/> 
                            isMounted && !loading && series && gender && (
                                <Chart
                                    options={options}
                                    series={series}
                                    type="bar"
                                    height="450"
                                    width="100%"
                                />
                            )
                        }
                        
                        {/* <ChartRect data={data} format={"명"}/> */}
                    </Wrapper>
                )
            }
            { isModal && <GenderDetails /> }
        </Container>
    )
};

export default GenderPresenter;
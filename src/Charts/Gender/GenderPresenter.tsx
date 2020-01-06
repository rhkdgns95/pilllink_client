import React from "react";
import styled from "../../Styles/typed-components";
import ChartRect from "../ChartRect";
import { useGenderContext } from "./GenderProvider";
import GenderDetails from "./GenderDetails/GenderDetailsContainer";
import ChartTitle from "../../Components/ChartTitle";
import ButtonDetails from "../../Components/ButtonDetails";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const data = [
    {
        name: '남자',
        units: 150,
        color: "#2764ff"
    },
    {
        name: '여자',
        units: 120,
        color: '#ff5722'
    }
];


const GenderPresenter = () => {
    const { gender, loading, isModal, toggleModal } = useGenderContext();
    
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
        <Container>
            {
                !loading && gender && (
                    <Wrapper>
                        <ChartTitle text={"성별"}/>
                        <ButtonDetails value={"Details"} onClick={toggleModal} />
                        { !loading && gender && <ChartRect data={data} format={"명"}/> }
                        { isModal && <GenderDetails /> }
                        {/* <ChartRect data={data} format={"명"}/> */}
                    </Wrapper>
                )
            }
            
        </Container>
    )
};

export default GenderPresenter;
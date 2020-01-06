import React, { useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import ChartRect from "../../Charts/ChartRect";
import Age from "../../Charts/Age";
import Gender from "../../Charts/Gender/GenderContainer";
import ChartNationality from "../../Charts/ChartNationality";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const data2 = [
    {
        name: '0 ~ 9',
        units: 12,
        color: "rgb(63,189,222)"
    },
    {
        name: '10 ~ 19',
        units: 32,
        color: '#ff5722'
    },
    {
        name: '20 ~ 29',
        units: 2,
        color: "#2764ff"
    },
    {
        name: '30 ~ 39',
        units: 17,
        color: '#ff5722'
    },
    {
        name: '40 ~ 49',
        units: 23,
        color: "#2764ff"
    },
    {
        name: '50 ~ 59',
        units: 42,
        color: '#ff5722'
    },
    {
        name: '60 ~ 69',
        units: 55,
        color: "#2764ff"
    },
    {
        name: '70 ~ 79',
        units: 2,
        color: '#ff5722'
    },
    {
        name: '80 ~ 89',
        units: 34,
        color: '#ff5722'
    },
    {
        name: '90 ~ 99',
        units: 4,
        color: '#ff5722'
    },
];
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
const AdminStatistics = () => {
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);
    
    return (
        <Container className={isEffected ? "active step-container group-radio" : "step-container group-radio"}>
            <Wrapper>
                Statistics page in progress ... (comming soon).
                <Gender />
                <ChartNationality />
                {/* <ChartRect data={data2} format={"명"}/>
                <ChartRect data={data3} format={"원"}/> */}
                {/* <Age /> */}
            </Wrapper>
        </Container>
    );
}

export default AdminStatistics;
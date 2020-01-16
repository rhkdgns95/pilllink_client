import React, { useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import Age from "../../Charts/Age";
import Gender from "../../Charts/Gender/GenderContainer";
import ChartNationality from "../../Charts/ChartNationality";
import ChartAddress from "../../Charts/ChartAddress";
import ChartMedicalRecord from "../../Charts/ChartMedicalRecord";

const Container = styled.div`

`;

const Wrapper = styled.div`
    &.active {
        transform: inherit;
    }
`;
// const TabGroup = styled.div`
//     position: relative;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
// const TabButton = styled.button`
//     position: relative;
//     display: flex;
//     font-size: 11px;
//     flex-flow: column;
//     align-items: center;
//     justify-content: center;
//     flex: 1;
//     padding: 10px;
//     font-size: 12.5px;
//     transition: .2s;
//     cursor: pointer;
//     border: .5px solid white;
//     background-color: #dfdfdf;
//     color: gray;
//     border-top: 0;
//     border-bottom: 0;
//     &::after,
//     &::before {
//         content: "";
//         position: absolute;
//         display: block;
//         width: 0;
//         height: 1px;
//         top: 0;
//         left: 0;
//         background-color: #17cd6d;
//     }
//     &::after {
//         left: auto;
//         right: 0;
//     }
//     & svg {
//         fill: gray;
//         padding: 5px;
//     }
//     &.active {
//         // background-color: #13c56f;
//         background-color: #17cd6d;
//         color: white;
//         &::after,
//         &::before {
//             width: 50%;
//         }
//         & svg {
//             fill: white;
//         }
//     }
//     &:disabled {
//         opacity: 1;
//         cursor: default;
//     }
// `;

const AdminStatistics = () => {
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);
    
    return (
        <Container>
            <Wrapper className={isEffected ? "active step-container group-radio" : "step-container group-radio"}>
                <Gender />
                {/* <Age />
                <ChartAddress />
                <ChartNationality /> 
                <ChartMedicalRecord /> */}
            </Wrapper>
        </Container>
    );
}

export default AdminStatistics;
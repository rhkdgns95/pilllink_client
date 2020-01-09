import React from "react";
import styled from "../../Styles/typed-components";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div``;
const Progress = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    z-index: 12;
    background: linear-gradient(90deg, rgba(108,177,254,1) 0%, rgba(186,68,199,1) 33%, rgba(192,35,227,1) 66%, rgba(206,70,21,1) 100%);
    // background: linear-gradient(90deg, rgba(108,177,254,1) 0%, rgba(29,141,191,1) 33%, rgba(227,137,35,1) 66%, rgba(206,70,21,1) 100%);
    &.active {
        width: 100%;
        transition: .3s;    
    }
`;
const ProgressBar = () => {
    const { isProgress } = useAppContext();  
    return (
        <Container>
            <Progress className={isProgress ? "active" : ""}/>
        </Container>
    );
};

export default ProgressBar;
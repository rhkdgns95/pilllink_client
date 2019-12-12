import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepLanguage from "../../Components/Steps/StepLanguage";
import StepTitle from "../../Components/StepTitle";
import StepButton from "../../Components/StepButton";
import { useHomeContext } from "./HomeProvider";
import StepSymptoms from "../../Components/Steps/StepSymptoms";
import StepDetailSymptoms from "../../Components/Steps/StepDetailSymptoms";

const Container = styled.div`
`;
const Wrapper = styled.div`

`;
const SlideForm = styled.form`
    width: 100%;
`;
const Slide = styled.div`

`;
const Steps = styled.div`
    
`;
const SlideBtnBox = styled.div`
    display: flex;
    justify-content: center;
    & > div {
        &:not(:nth-of-type(1)) {
            margin-left: 10px;
        }
    }
`;


const HomePresenter = () => {
    const { lang, step, handleStep, symptom, submitOk } = useHomeContext();

    return (
        <Container>
            <Navbar
                title={"PillLink"}
                subTitle={"Show your symptoms to pharmacy and hospital"}
            />
            <Wrapper className={"row"}>
                <SlideForm>
                    <Slide>
                        <Steps>
                            { step === 0 && <StepLanguage stepTitle={ <StepTitle title={"Language"} subTitle={"Please, select your language"}/> } />}
                            { step === 1 && <StepSymptoms stepTitle={ <StepTitle title={"Symptoms"} subTitle={"Please, select your conditions and symptoms"}/> } />}
                            { step === 2 && <StepDetailSymptoms stepTitle={ <StepTitle title={"Details"} subTitle={"Please, show this result to your pharmacist"} /> } />}
                        </Steps>
                    </Slide>
                    <SlideBtnBox>
                        {
                            step == 0 &&
                            lang.value !== "" && (
                                <StepButton 
                                    value={"Done"}
                                    onClick={() => { handleStep(step + 1) }}
                                />
                            )
                        }
                        {
                            // symptoms
                            step == 1 &&
                            lang.value !== "" && (
                                <>
                                    <StepButton 
                                        value={"PREV"}
                                        onClick={() => { handleStep(step - 1) }}
                                    />
                                    {
                                        symptom.value !== "" && (
                                            <StepButton 
                                                value={"NEXT"}
                                                onClick={() => { handleStep(step + 1) }}
                                                isNext={true}
                                            />
                                        )
                                    }
                                </>
                            )
                        }
                        
                        {
                            step == 2 &&
                            lang.value !== "" && (
                                <>
                                    <StepButton 
                                        value={"PREV"}
                                        onClick={() => { handleStep(step - 1) }}
                                    />
                                    {
                                    submitOk && 
                                        <StepButton 
                                            value={"FEED BACK"}
                                            onClick={() => { alert("Feedback!") }}
                                            isNext={true}
                                        />
                                    }
                                </>
                            )
                        }
                        

                    </SlideBtnBox>
                </SlideForm>
            </Wrapper>
        </Container>
    )
};

export default HomePresenter;
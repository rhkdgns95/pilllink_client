import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepLanguage from "../../Components/Steps/StepLanguage";
import StepTitle from "../../Components/StepTitle";
import StepButton from "../../Components/StepButton";
import { useHomeContext } from "./HomeProvider";
import StepSymptoms from "../../Components/Steps/StepSymptoms";
import StepDetailSymptoms from "../../Components/Steps/StepDetailSymptoms";
import { useAppContext } from "../App/AppProvider";

const Container = styled.div`
`;
const Box = styled.div`

`;
const Wrapper = styled.div`

`;
const SlideForm = styled.form`
    width: 100%;
    margin-bottom: 30px;
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
    const { isProgress } = useAppContext();
    const { lang, step, handleStep, symptom, submitOk, handleMedicalRecord } = useHomeContext();
    
    return (
        <Container className={"container"}>
            <Box className={"box"}>
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
                                { step >= 2 && <StepDetailSymptoms stepTitle={[ <StepTitle title={"Details"} subTitle={"You can choose more than one option."} />, <StepTitle title={"Result"} subTitle={"Please, show this result to your pharmacist"} />]} />}
                            </Steps>
                        </Slide>
                        <SlideBtnBox>
                            {
                                step == 0 &&
                                lang.value !== "" && (
                                    <StepButton 
                                        value={"Done"}
                                        onClick={() => { handleStep(step + 1) }}
                                        disabled={isProgress}
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
                                            disabled={isProgress}
                                        />
                                        {
                                            symptom.value !== "" && (
                                                <StepButton 
                                                    value={"NEXT"}
                                                    onClick={() => { handleStep(step + 1) }}
                                                    isNext={true}
                                                    disabled={isProgress}
                                                />
                                            )
                                        }
                                    </>
                                )
                            }
                            
                            {   // details
                                step == 2 &&
                                lang.value !== "" && (
                                    <>
                                        <StepButton 
                                            value={"PREV"}
                                            onClick={() => { handleStep(step - 1) }}
                                            disabled={isProgress}
                                        />
                                        {
                                        submitOk && 
                                            <StepButton 
                                                value={"NEXT"}
                                                onClick={() => { handleStep(step + 1) }}
                                                isNext={true}
                                                disabled={isProgress}
                                            />
                                        }
                                    </>
                                )
                            }
                            {
                                // feedback
                                step == 3 &&
                                lang.value !== "" && (
                                    <>
                                        <StepButton 
                                            value={"PREV"}
                                            onClick={() => { handleStep(step - 1) }}
                                            disabled={isProgress}
                                        />
                                        {
                                        submitOk && 
                                            <StepButton 
                                                value={"FEEDBACK"}
                                                onClick={handleMedicalRecord}
                                                isNext={true}
                                                disabled={isProgress}
                                            />
                                        }
                                        {
                                            submitOk && 
                                            <StepButton 
                                                value={"Translate"}
                                                onClick={() => console.log("변환~")}
                                                disabled={isProgress}
                                            />
                                        }
                                    </>
                                )
                            }

                        </SlideBtnBox>
                    </SlideForm>
                </Wrapper>
            </Box>
        </Container>
    )
};

export default HomePresenter;
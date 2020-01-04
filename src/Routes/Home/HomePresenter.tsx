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
import ModalCloseBtn from "../../Components/ModalCloseBtn";
import BoardButton from "../../Components/BoardButton";
import ModalBoard from "../../Components/ModalBoard";

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
    @media(max-width: 510px) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        background-color: black;
        justify-content: flex-start;
        flex: 2;
        & > div {
            flex: 1;
            width: 50%;
            &:last-child {
                margin: 0;
            }
            input {
                padding: 12.5px;
                border-radius: 0;
                display: block;
                width: 100%;
            }
        }
    }
`;


const HomePresenter = () => {
    const { isProgress, isBoard } = useAppContext();
    const { lang, step, handleStep, symptom, submitOk, handleMedicalRecord, isModal } = useHomeContext();
    
    return (
        <Container className={"container"}>
            <Box className={"box"}>
                <Navbar
                    title={"PilLink"}
                    subTitle={"Show your symptoms to a pharmacy or hospital"}
                />
                <Wrapper className={"row"}>
                    <SlideForm>
                        <Slide>
                            <Steps>
                                { step === 0 && <StepLanguage stepTitle={ <StepTitle title={"Nationality"} subTitle={"Please, select your nationality"}/> } />}
                                { step === 1 && <StepSymptoms stepTitle={ <StepTitle title={"Symptoms"} subTitle={"Please, select your conditions and symptoms"}/> } />}
                                { step >= 2 && <StepDetailSymptoms stepTitle={[ <StepTitle title={"Details"} subTitle={""} />, <StepTitle title={"Result"} subTitle={"Please, show this result to your pharmacist"} />]} />}
                            </Steps>
                        </Slide>
                        <SlideBtnBox>
                            {
                                step === 0 &&
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
                                step === 1 &&
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
                                step === 2 &&
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
                                step === 3 &&
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
                                                isModal={isModal}
                                            />
                                        }   
                                    </>
                                )
                            }
                        </SlideBtnBox>
                    </SlideForm>
                </Wrapper>
            </Box>
            { step === 3 && isModal && <ModalCloseBtn />}
            { step <= 2 && lang.value !== "" && !isBoard && <BoardButton />}
            { step <= 2 && lang.value !== "" && isBoard &&  <ModalBoard lang={lang.value}/> }
            
        </Container>
    )
};

export default HomePresenter;
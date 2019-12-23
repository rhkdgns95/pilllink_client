import React, { useEffect, useState } from "react";
import styled from "../../../Styles/typed-components";
import RadioButtonSymptom from "../../RadioButtonSymptom";
import { useHomeContext } from "../../../Routes/Home/HomeProvider";
import SelectorSymptom from "../../SelectorSymptom";
import translator from "../../../Utils/translator";
import { PATH_IMG_BG } from "../../../Routes/App/AppProvider";

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    @media(max-width: 910px) {
        & > {
            .group-select {
                padding-left: 0;
                margin-bottom: 0;
                .bg-box {
                    display: none;
                }
            }
            .group-radio {
                margin: 45px 0;
            }
        }
    }
    @media(max-width: 510px) {
        & > .group-select {
            padding: 20px 0;
            display: block;
            & > div {
                margin-bottom: 10px; 
                & > div {
                    display: flex;
                    flex: 2;
                    max-width: 300px;
                    align-items: center;
                    margin: 0 auto;
                    padding: 0 10px;
                    & > p {
                        font-size: 12px;
                        flex: 1
                    }
                    & > select {
                        flex: 1;
                    }
                }
            }
        }
        & > .group-radio {
            margin: 15px 0;
            margin-bottom: 30px;
            justify-content: space-between;
            & > div {
                // margin: 10px 5px;
                margin: 20px 0;
                width: 33%;
                & label {
                    width: 95px;
                    height: 95px;
                    & img {
                        width: 40%;
                        height: 40%;
                    }
                }
            }
        }
    }
`;
const SymptomGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    padding: 40px 0;
    background-color: #dbebeb;
    padding-left: 220px;
`;
const SelectorBg = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-28%);
    left: 50px;
    width: 172px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const RadioButtonGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 80px 0;
    margin-bottom: 50px;
`;

interface IProps {
    stepTitle: any;
}

const StepSymptoms: React.FC<IProps> = ({
    stepTitle
}) => {
    const { lang, symptom, allergy, pregnant, chronicdisease } = useHomeContext();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    const country: ICountry | undefined = translator.find(country => country.value === lang.value);
    const selectorSymptoms: Array<any> = [
        allergy,
        pregnant,
        chronicdisease
    ];
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);
    return (
        <Container>
            <Wrapper>
                { stepTitle }
                <SymptomGroup className={"group-select"}>
                    <SelectorBg className={"bg-box"}>
                        <Img src={PATH_IMG_BG + "/select.png"}/>
                    </SelectorBg>
                    {
                        country && (
                            country.selectors.map((selector: any, key: number) =>
                                <SelectorSymptom 
                                    key={key}
                                    title={selector.name}
                                    options={selector.details}
                                    onChange={selectorSymptoms[key].onChange}
                                    defaultValue={selectorSymptoms[key].value}
                                />
                            )
                        )
                    }
                    {/* <SelectorSymptom 
                        title={"Allergy"}
                        options={Allergy}
                        onChange={allergy.onChange}
                        defaultValue={allergy.value}
                    />
                    <SelectorSymptom 
                        title={"Pregnancy"}
                        options={Pregnant}
                        onChange={pregnant.onChange}
                        defaultValue={pregnant.value}
                    />
                    <SelectorSymptom 
                        title={"Chronic diseases"}
                        options={ChronicDiseases}
                        defaultValue={chronicdisease.value}
                        onChange={chronicdisease.onChange}
                    /> */}
                </SymptomGroup>
                
                <RadioButtonGroup className={isEffected ? "active step-container group-radio" : "step-container group-radio"}>
                    {
                        country && (
                            country.symptoms.map((item, key) => 
                                <RadioButtonSymptom 
                                    key={key}
                                    name={item.name}
                                    value={item.value}
                                    imgPath={item.imgPath}
                                    group={"symptom"}
                                    onChange={symptom.onChange}
                                    defaultChecked={symptom.value === item.value}
                                />
                            )
                        )
                        // Symptoms.map((item, key) => 
                        //     <RadioButtonSymptom 
                        //         key={key}
                        //         value={item.value}
                        //         name={item.name}
                        //         imgPath={item.imgPath}
                        //         group={"symptoms"}
                        //         onChange={symptom.onChange}
                        //         defaultChecked={item.value === symptom.value}
                        //     />
                        // )
                    }
                </RadioButtonGroup>
            </Wrapper>
        </Container>
    )
}

export default StepSymptoms;
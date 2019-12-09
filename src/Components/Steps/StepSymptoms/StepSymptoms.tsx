import React from "react";
import styled from "../../../Styles/typed-components";
import RadioButtonSymptom from "../../RadioButtonSymptom";
import { useHomeContext } from "../../../Routes/Home/HomeProvider";
import SelectorSymptom from "../../SelectorSymptom";
import translator from "../../../Utils/translator";

const Container = styled.div`

`;
const Wrapper = styled.div`
    @media(max-width: 500px) {
        & > .group-select {
            padding: 20px 0;
            padding-left: 0;
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
            justify-content: space-between;
            & > div {
                // margin: 10px 5px;
                margin: 10px 0;
                & label {
                    width: 90px;
                    height: 90px;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    padding: 40px 0;
    background-color: #dcecea;
    padding-left: 50px;
`;
const RadioButtonGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`;

interface IProps {
    stepTitle: any;
}

const StepSymptoms: React.FC<IProps> = ({
    stepTitle
}) => {
    const { lang, symptom, allergy, pregnant, chronicdisease } = useHomeContext();
    const country: ICountry | undefined = translator.find(country => country.value === lang.value);
    const selectorSymptoms: Array<any> = [
        allergy,
        pregnant,
        chronicdisease
    ];

    return (
        <Container>
            <Wrapper>
                { stepTitle }
                <SymptomGroup className={"group-select"}>
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
                
                <RadioButtonGroup className={"group-radio"}>
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
import React, { useEffect, useState } from "react";
import styled from "../../../Styles/typed-components";
import { useHomeContext } from "../../../Routes/Home/HomeProvider";
import countries from "../../../Utils/translator";
import Checkbox from "../../Checkbox";
import { PATH_IMG_DETAILS, useAppContext } from "../../../Routes/App/AppProvider";

const Container = styled.div`
    @media(max-width: 910px) {
        .group-checkbox {
            margin: 45px 0;
        }
    }
    
    @media(max-width: 510px) {
        .group-checkbox {
            margin: 15px 0;
            justify-content: space-between;
            & > div {
                // margin: 10px 5px;
                margin: 20px 0;
                width: 33%;
            }
        }
    }
`;
const Wrapper = styled.div`
`;
const Tmp = styled.div`
    width: 100%;
    min-height: 300px;
`;
const DetailsGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 80px 0;
`;

interface IProps {
    stepTitle: any;
}

const useInputChecked = (): IUseCheckbox => {
    const [details, setDetails] = useState<Array<ISymptomDetails>>([]);
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value, checked }} = event;

        // 1. checked된 값을 찾아서 변경
        // 2. 변경된 데이터를 다시 setDetails하여 추가하도록 한다.
        const changedDetails: Array<ISymptomDetails> = details.map(item => {
            return {
                ...item,
                checked: item.value !== value ? item.checked : checked 
            };
        });
        setDetails([ ...changedDetails ]);
    };

    const onInit = (initSymptomDetails: Array<ISymptomDetails>) => {
        setDetails(initSymptomDetails);
    };

    return {
        details,
        onChange,
        onInit
    };
}

const StepDetailSymptoms: React.FC<IProps> = ({
    stepTitle
}) => { 
    const { handleTitle } = useAppContext();
    const { symptom, lang, handleSubmitOk, submitOk } = useHomeContext();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    const [ symptomDetails, setSymptomDetails ] = useState<ISymptom>();
    
    const currentDetails = useInputChecked();

    const {} = useInputChecked();
    // GetDetailsScreen(symptom.value);
    
    /** 
     *  [1] handleDetails
     *  
     *  Step2에서 선택된 symptom값으로 
     *  해당하는 증상의 상세한 증상들을 가져온다.
     *  가장 초기에 실행된다.
     */
    const handleDetails = () => {
        let symptomDetails: ISymptom | undefined = undefined;
        const country: ICountry | undefined = countries.find(country => country.value === lang.value);
        if(country) {
            symptomDetails = country.symptoms.find(registeredSymptom => registeredSymptom.value === symptom.value);
            console.log(symptomDetails);
        } 
        setSymptomDetails(symptomDetails);
    }

    /** 
     *  [2] handleCurrentDetails
     *  
     *  handleDetails를 통해 상세한 증상들을 가져왔다면,
     *  Step3에서 별도의 State를 다루도록 한다.
     *  왜냐? 해당 값은 Step2에 의존적으로 Step2의 값에따라서 변하게 되므로
     *  HomeProvider에서 관리하는게아니라, 현재 이 파일에서 State를 관리하도록 한다.
     *  최종적으로는 Feedback될 때, currentDetails의 details 객체가 인자로 들어감.
     */
    const handleCurrentDetails = (newDetails: ISymptom) => {
        currentDetails.onInit(newDetails.details.map(detail => {
            return {
                value: detail.value,
                checked: false
            }
        }));
    };

    console.log("currentDetails: ", currentDetails);

    /**
     *  초기화 
     */
    useEffect(() => {
        if(!symptomDetails) {
            handleDetails();
        }
        handleTitle("Pill Link | Details");
        if(currentDetails && !isEffected) {
            setIsEffected(true);
       }   
       
    }, []);  

    useEffect(() => {
        if(symptomDetails) {
            handleCurrentDetails(symptomDetails);
        }
    }, [symptomDetails]);

    /**
     *  currentDetails가 선택될 때마다 실행됨
     *  1. Feedback버튼을 클릭할 수 있는지, 
     *  2. 하나 이상선택되었는지,
     *  3. 추가로 filter대신에 find를 사용하여 하나라도 선택되었다면, 
     *     submitOk를 true값으로 변경.
     */
    useEffect(() => {
        if(currentDetails.details.length > 0) {
            // const checkedDetails: number = currentDetails.details.filter(detail => detail.checked === true).length;
            const checkedDetails: ISymptomDetails | undefined = currentDetails.details.find(detail => detail.checked === true);
            if(checkedDetails && !submitOk) {
                // feedback 가능.
                handleSubmitOk(true);
            } else if(!checkedDetails && submitOk){
                // feedback 불가능.
                handleSubmitOk(false);
            }
            // console.log("선택된것: ", checkedDetails);
        }
    }, [currentDetails.onChange]);

    return (
        <Container>
            <Wrapper>
                { stepTitle }    
                    {
                        <DetailsGroup className={isEffected ? "active step-container group-checkbox" : "group-checkbox step-container"}>
                            {
                                !symptomDetails ? <Tmp>Comming soon</Tmp> :
                                symptomDetails.details.map((detail, key) => 
                                    <Checkbox 
                                        key={key}
                                        id={key}
                                        name={detail.name}
                                        imgPath={PATH_IMG_DETAILS + "/comming_soon.svg"}
                                        value={detail.value}
                                        onChange={currentDetails.onChange}
                                    />
                                )
                            }
                        </DetailsGroup>
                    }
            </Wrapper>
        </Container>
    );
}

export default StepDetailSymptoms;
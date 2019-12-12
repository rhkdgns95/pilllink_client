import React, { useContext, createContext, useState, useEffect } from "react";
import { useMutation } from "react-apollo";
import { CREATE_MEDICAL_RECORD } from "./HomeQueries";
import { useAppContext } from "../App/AppProvider";

interface IContext {
    step: number;
    handleStep: (step: number) => void,
    lang: IUseRadio;
    symptom: IUseRadio;
    allergy: IUseSelect;
    pregnant: IUseSelect;
    chronicdisease: IUseSelect;
    submitOk: boolean;
    handleSubmitOk: (isOk: boolean) => any;
}

const InitContext: IContext = {
    step: 0,
    handleStep: () => {},
    lang: { value: "KO", onChange: () => {} },
    symptom: { value: "", onChange: () => {} },
    allergy: { value: "", onChange: () => {} },
    pregnant: { value: "", onChange: () => {} },
    chronicdisease: { value: "", onChange: () => {} },
    submitOk: false,
    handleSubmitOk: (isOk: boolean) => {}
};

const HomeContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useHomeContext = () => useContext(HomeContext);

const useInput = (defaultName: TLanguage | string): IUseRadio => {
    const [value, setValue] = useState<string>(defaultName);
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        setValue(value);
    };

    return {
        value,
        onChange
    };
}
const useRadio = (initValue: string): IUseRadio => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        setValue(value);
        console.log("Current Value: ", value);
    }
    const onInit = () => {
        setValue(initValue);
        console.log("useRadio onInit: ", initValue);
    };

    return {
        value,
        onChange,
        onInit
    }
};
const useSelect = (initValue: string): IUseSelect => {
    const [value, setValue] = useState<string>(initValue);
    
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { target: { name, value }} = event;
        console.log("onChange: ", value);
        setValue(value);
    }

    const onInit = () => {
        setValue(initValue);
        console.log("useSelect onInit: ", initValue);
    }
    return {
        value,
        onChange,
        onInit
    };
};

const useFetch = (): {value: IContext} => {
    const { handleTitle } = useAppContext();
    const [ step, setStep ] = useState<number>(0);
    const [ submitOk, setSubmitOk ] = useState<boolean>(false);

    const updateStep = () => {
        switch(step) {
            case 0:
                handleTitle("Pill Link | Language");        
                // handleInitStepSymptom();
                break;
            case 1:
                handleTitle("Pill Link | Symptoms")
                break;
            case 2:
                handleTitle("Pill Link | Details")
                break;
            default:
                break;
        }
    }

    useEffect(updateStep, [step]);
    
    /**
     *  Step 2 - StepSymptoms
     * 
     *  Select - lang, allergy, pregnant, chronicdisease, 
     *  Radio - symptom
     */
    const lang = useInput("");
    const allergy = useSelect("NULL");
    const pregnant = useSelect("NULL")
    const chronicdisease = useSelect("NULL")

    const symptom = useRadio("");

    const [] = useMutation(CREATE_MEDICAL_RECORD);
    
    /**
     *  handleInitStepSymptom
     * 
     *  Step 2 -> Step 1로 이동할때,
     *  Symptom Step에서 Language Step으로 이동될때, 
     *  처음 값으로 초기화 시킨다.
     */
    const handleInitStepSymptom = () => {
        if(symptom.onInit) {
            symptom.onInit();
            const { onInit: handleAllergySelect } = allergy;
            const { onInit: handlePrgnantSelect } = pregnant
            const { onInit: handleChronicdisease } = chronicdisease;
            if(handleAllergySelect && handlePrgnantSelect && handleChronicdisease) {
                handleAllergySelect();
                handlePrgnantSelect();
                handleChronicdisease();
            }
        }
    }

    /**
     *  handleStep
     * 
     *  1) Step2 -> Step1로 변경될 때, 
     *  Step2의 모든 State를 초기화 시킬때 유용하다.
     *  state의 prev 데이터와 new데이터를 비교할 수 있게됨.
     *  (이전값과 변경될 값을 비교하는 로직이 되는것이다.)
     *  
     *  2) Step3 -> Step2로 변경될 때,
     *  Step3의 Feedback가능 여부를 제거하도록 한다.
     * 
     *  @param newStep 변경될 값
     */
    const handleStep = (newStep: number) => {
        console.log("currentStep : ", newStep);
        setStep((prevStep: number) => {
            if(prevStep === 1 && newStep === 0) {
                handleInitStepSymptom();   
            }
            if(prevStep === 2 && newStep === 1) {
                if(submitOk) {
                    handleSubmitOk(false);
                }
            }
            // newStep
            return newStep;
        });
        console.log("afterStep : ", newStep);
    }
    
    /**
     *  handleSubmitOk
     *  
     *  Step3에서 상세 증상을 하나라도 입력한경우,
     *  Step의 데이터를 전달할 수 있는지 확인한다.
     *  이걸통해 Feedback 버튼의 클릭여부를 보이도록 한다.
     */
    const handleSubmitOk = (isOk: boolean) => {
        setSubmitOk(isOk);
    }

    console.log("Current Language: ", lang);
    return {
        value: {
            lang,
            step,
            handleStep,
            symptom,
            allergy,
            pregnant,
            chronicdisease,
            submitOk,
            handleSubmitOk
        }
    };
}

const HomeProvider: React.FC<any> = ({
    children
}) => (
    <HomeContext.Provider { ...useFetch() }>
        {
            children
        }
    </HomeContext.Provider>
);

export { useHomeContext };
export default HomeProvider;
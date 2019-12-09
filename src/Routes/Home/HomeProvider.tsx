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
}

const InitContext: IContext = {
    step: 0,
    handleStep: () => {},
    lang: { value: "KO", onChange: () => {} },
    symptom: { value: "", onChange: () => {} },
    allergy: { value: "", onChange: () => {} },
    pregnant: { value: "", onChange: () => {} },
    chronicdisease: { value: "", onChange: () => {} }
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

    return {
        value,
        onChange
    }
};
const useSelect = (initValue: string): IUseSelect => {
    const [value, setValue] = useState<string>(initValue);
    
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { target: { name, value }} = event;
        console.log("onChange: ", value);
        setValue(value);
    }

    return {
        value,
        onChange
    };
};

const useFetch = (): {value: IContext} => {
    const { handleTitle } = useAppContext();
    const [step, setStep] = useState<number>(0);

    const updateStep = () => {
        switch(step) {
            case 0:
                handleTitle("Pill Link | Language");        
                break;
            case 1:
                handleTitle("Pill Link | Symptoms")
                break;
            default:
                break;
        }
    }
    useEffect(updateStep, [step]);
    
    
    const lang = useInput("");
    const allergy = useSelect("NULL");
    const pregnant = useSelect("NULL")
    const chronicdisease = useSelect("NULL")

    const symptom = useRadio("");

    const [] = useMutation(CREATE_MEDICAL_RECORD);
    
    const handleStep = (step: number) => {
        setStep(step);
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
            chronicdisease
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
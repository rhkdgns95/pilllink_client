import React, { useContext, createContext, useState, useEffect } from "react";
import { useMutation } from "react-apollo";
import { CREATE_MEDICAL_RECORD } from "./HomeQueries";
import { useAppContext } from "../App/AppProvider";
import translator from "../../Utils/translator";
import { createMedicalRecord, createMedicalRecordVariables }  from "../../Types/api";
import { GET_MY_PROFILE } from "../App/AppQueries";

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
    onCreateResultDetails: (data: any) => any;
    handleMedicalRecord: () => any;
    isModal: boolean;
    handleModal: () => any;
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
    handleSubmitOk: (isOk: boolean) => {},
    onCreateResultDetails: () => {},
    handleMedicalRecord: () => {},
    isModal: false,
    handleModal: () => {}
};

const HomeContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useHomeContext = () => useContext(HomeContext);

const useInput = (defaultName: TLanguage | string): IUseRadio => {
    const [value, setValue] = useState<string>(defaultName); 
    const [ , setCurrentValue] = useState<string>(defaultName); // 실제 저장될 LANG.
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
        setCurrentValue(value);
    };

    const onInit = () => {
        setValue(defaultName);
    }

    return {
        value,
        onChange,
        onInit
    };
}
const useRadio = (initValue: string): IUseRadio => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
        // console.log("Current Value: ", value);
    }
    const onInit = () => {
        setValue(initValue);
        // console.log("useRadio onInit: ", initValue);
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
        const { target: { value }} = event;
        // console.log("onChange: ", value);
        setValue(value);
    }

    const onInit = () => {
        setValue(initValue);
        // console.log("useSelect onInit: ", initValue);
    }
    return {
        value,
        onChange,
        onInit
    };
};

const useFetch = (history: any): {value: IContext} => {
    const { handleTitle, handleProgress, isProgress, timeOut } = useAppContext();
    const [ step, setStep ] = useState<number>(0);
    const [ submitOk, setSubmitOk ] = useState<boolean>(false);
    const [ resultDetails, setResultDetails ] = useState<Array<ISymptomDetails>>([]);
    
    const updateStep = () => {
        switch(step) {
            case 0:
                handleTitle("Pill Link | Nationality");
                // handleInitStepSymptom();
                break;
            case 1:
                handleTitle("Pill Link | Symptoms")
                break;
            case 2:
                const country = translator.find(item => item.value === lang.value);
                const symptomName: ISymptom  | undefined = country ? country.symptoms.find(item => item.value === symptom.value) : undefined;
                const title: string = symptomName ? symptomName.name : "No";
                handleTitle("Pill Link | " + title);
                break;
            case 3: 
                handleTitle("Pill Link | Result");
                break;
            default:
                break;
        }
    }
    
    
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

    /**
     *  Step - 3 Details
     * 
     *  Modal - isModal
     */
    const [ isModal, setIsModal ] = useState<boolean>(true);

    /**
     *  useEffect(() => {}, [lang])
     * 
     *  언어선택이 하나라도 된어있다면,
     *  뒤로가기시 Confirm message를 출력하도록 한다.
     */
    // window.onpopstate = (e: any) => {
    //     console.log("E : ", e);
    // }

    useEffect(() => {
        
        window.onbeforeunload = () => undefined;
        // window.addEventListener('')
        return () => {
            if(lang.value !== "") {
                // const isBack: boolean = window.confirm("이 페이지를 벗어나시겠습니까?");
                // if(isBack) {
                    
                // } else {

                // }
                // alert("Good Bye!");
            }
        }
    }, [lang]);
    useEffect(updateStep, [step]);

    /**
     *  handleInit
     *  
     *  CreateMedicalRecord가 실행 한 입력 값 초기화시키기.
     *  (실행 이후엔 선택값을 초기화 시킴)
     *  조건: step이 3일때 실행됨.
     */
    const handleInit = () => {
        if(step === 3) {
            lang.onInit!();
            allergy.onInit!();
            pregnant.onInit!();
            chronicdisease.onInit!();
            symptom.onInit!();
            onCreateResultDetails({});
            handleStep(0);
        }
    }
    const [ createMedicalRecordMutation ] = useMutation<createMedicalRecord, createMedicalRecordVariables>(CREATE_MEDICAL_RECORD, {
        onCompleted: data => {
            
            if(isProgress && data && data.CreateMedicalRecord && data.CreateMedicalRecord.medicalRecordId, data.CreateMedicalRecord.lang) {
                const { medicalRecordId: recordId, lang  } = data.CreateMedicalRecord;
                setTimeout(() => {
                    handleProgress(false);
                    handleInit();
                    
                    history.push({
                        pathname: "/feedback",
                        state: {
                            recordId,
                            lang
                        } 
                    });
                }, timeOut);
            }
            // console.log("create medical record completed: ", data);
        },
        onError: data => {
            if(isProgress) {
                setTimeout(() => {
                    handleProgress(false);
                    handleInit();
                    alert("error");
                    console.log("CreateMedicalRecord error: ", data);
                }, timeOut);
            }
            // console.log("create medical record error: ", data);
        },
        refetchQueries: [
            // { query: GET_MY_RECORDS }
            // GetMyProfile로 부터 갯수를 가져온다.
            { query: GET_MY_PROFILE }
        ]
    });
    
    /**
     *  onCreateResultDetails - 최종 선택된 값이 저장됨.
     *  @param newResult : 새로운 증상의 Details의 check값이 들어가있음.
     */
    const onCreateResultDetails = (newResult: any) => {
        setResultDetails(newResult);
        // console.log(resultDetails);    
    }

    /**
     *  handleMedicalRecord
     *  진단결과를 의사에게 알림 (Feedback)
     *  
     *  results: 선택된것들로 필터링함. (checked === true)
     */
    const handleMedicalRecord = () => {
        if(isProgress) {
            return;
        }
        handleProgress(true);
        // console.log("Hello Feed back");
        const results: Array<ISymptomDetails> = resultDetails.filter(detail => detail.checked === true);
        let newResult: any = {};
        results.map(item => {
            newResult[item.value] = true;
            return null;
        });
        
        // console.log("New Details: ", newResult);
        // console.log("알러지: ", allergy.value);
        // console.log("만성질환: ", chronicdisease.value);
        // console.log("임신여부: ", pregnant.value);

        createMedicalRecordMutation({
            variables: {
                lang: lang.value,
                status: symptom.value,
                allergy: allergy.value,
                pregnant: pregnant.value,
                chronicDiseases: chronicdisease.value,
                ...newResult  
            } 
        } as any);
        // console.log("results: ", results);
    }
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
        window.scrollTo({top: 0});
        
        setStep((prevStep: number) => {
            if(prevStep === 1 && newStep === 0) {
                handleInitStepSymptom();   
            }
            if(prevStep === 2 && newStep === 1) {
                if(submitOk) {
                    handleSubmitOk(false);
                }
            }
            if(prevStep === 3 && newStep === 2) {
                if(!isModal) {
                    setTimeout(() => {
                        setIsModal(true);
                    }, 500);
                }
            }
            // newStep
            return newStep;
        });
    }

    /**
     *  handleModal
     * 
     *  Step3의 Details페이지의 알림문구를
     *  보여주는것을 제어한다.
     */
    const handleModal = () => {
        setIsModal(!isModal);
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


    // console.log("Current Language: ", lang);
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
            handleSubmitOk,
            handleMedicalRecord,
            onCreateResultDetails,
            isModal,
            handleModal
        }
    };
}

const HomeProvider: React.FC<any> = ({
    children,
    history
}) => (
    <HomeContext.Provider { ...useFetch(history) }>
        {
            children
        }
    </HomeContext.Provider>
);

export { useHomeContext };
export default HomeProvider;
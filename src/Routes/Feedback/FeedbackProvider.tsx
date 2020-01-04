import React, { createContext, useContext, useState, useEffect } from "react";
import { PUBLIC_PATH, useAppContext } from "../App/AppProvider";
import { useMutation } from "react-apollo";
import { createConfirm, createConfirmVariables } from "../../Types/api";
import { CREATE_CONFIRM } from "./FeedbackQueries";

interface IContext {
    onCreateConfirm: () => any;
    loadingCreateConfirm: boolean;
    isTranslated: boolean;
    onToggleTranslate: () => any;
    lang: TLanguage | "NULL";
    formFeedback: Array<IUseFeedback>;
    currentIndex: number;
    count: number;
    handleChangeCount: (count: number) => any;
    handleCurrentIndex: (index: number) => any;
    isConfirm: boolean;
}
const InitContext: IContext = {
    onCreateConfirm: () => {},
    loadingCreateConfirm: false,
    isTranslated: false,
    onToggleTranslate: () => {},
    lang: "NULL",
    formFeedback: [],
    currentIndex: 0,
    count: 1,
    handleChangeCount: () => {},
    handleCurrentIndex: () => {},
    isConfirm: false
};

const FeedbackContext: React.Context<IContext> = createContext(InitContext);

const useFeedbackContext = () => useContext(FeedbackContext);

const useInputRadio = (initValue: string): IUseRadio => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    const onInit = () => {
        setValue(initValue);
    }
    return {
        value,
        onChange,
        onInit
    };
}

const useCheckbox = (initValue: Array<string>): IUseCheckboxArray => {
    const [value, setValue] = useState<Array<string>>(initValue);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value: newValue }} = event;
        const existValue = value.find(item => item === newValue);
        if(existValue) {
            // 있다면 제외한다.
            setValue(value.filter(item => item !== existValue));
        } else {
            // 없다면, 추가한다.
            setValue(
                [ 
                    ...value,
                    newValue
                ]
            );
        }
    };

    const onInit = () => {
        setValue(initValue);
    };

    return {
        value,
        onChange,
        onInit
    }
}
const useFeedback = (): IUseFeedback => {
    const InitFeedback = {
        recordPerOneTime: useInputRadio("1"), // 1회 복용알약
        recordAmount: useInputRadio("D3"), // 복용일
        recordTime: useCheckbox([]), // 복약횟수
        recordWay: useInputRadio("AGO_EAT"), // 복용방법
        recordCaution: useCheckbox([]), // 주의사항
    };
    return InitFeedback
}

const useFetch = (recordId: number, history: any, lang: TLanguage | "NULL"): { value: IContext } => {
    if(recordId === -1 || lang === "NULL") {
        history.push(PUBLIC_PATH);
    }
    const [ isTranslated, setIsTranslated ] = useState<boolean>(false);
    const [ currentIndex, setCurrentIndex ] = useState<number>(0);
    const [ count, setCount ] = useState<number>(1);
    const [ isConfirm, setIsConfirm ] = useState<boolean>(false);
    const { isProgress, handleProgress, timeOut } = useAppContext();
    /**
     *  formFeedback
     *  배열 복욕량의 객체들은 useState의 객체를 리턴받는다.
     *  useState의 객체는 한번만 초기화되며, 재사용성이 가능하다.
     *  그래서 정말로 큰 주의점으로는 다음과 같다.
     *  1. 대입을 두번하게되도 실제 대입되는 건 하나다. ex) const a = useState("test"); 이때 const b = a; const c = a;를 하면 b와 c는 하나 a를 갖으며, 각각의 독립적인 값이 아니라는 말이다.
     *  2. 하나의 useState()값을 각각의 객체에 대입하여, 독립적으로 수정하는것이 불가능하다. ex) 복사가 안된다.
     */
    const formFeedback = [
        useFeedback(),
        useFeedback(),
        useFeedback()
    ];
    
    useEffect(() => {
        // 현재 갯수만큼 체크된 feedback을 찾기위한 배열. 
        const currentFormFeedback = formFeedback.filter((_, key) => key < count);

        // 완료되지 않았던걸 찾은경우,
        const notConfirmformFeedback = currentFormFeedback.find(feedback => feedback.recordTime.value.length <= 0);
        if(notConfirmformFeedback && isConfirm) {
            setIsConfirm(false);
        } else if(!notConfirmformFeedback && !isConfirm) {
            setIsConfirm(true);
        }
    }, [...formFeedback]);

    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(prevData => index);
    }

    const handleChangeCount = (newCount: number) => {
        setCount((prevCount) => {
            if(prevCount < newCount) {
                handleCurrentIndex(prevCount);
            } else if(newCount === currentIndex) {
                handleCurrentIndex(currentIndex - 1);
            }
            return newCount;
        },);
    }
    
    const [createConfirm, { data, loading: loadingCreateConfirm }] = useMutation<createConfirm, createConfirmVariables>(CREATE_CONFIRM, {
        onCompleted: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(!isProgress);
                }
                history.push("/history");
            }, timeOut);
        },
        onError: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(!isProgress);
                }
                console.log("CreateConfirm onError: ", data);
                history.push("/");
            }, timeOut);
        }
    });
    
    const onToggleTranslate = () => {
        setIsTranslated(!isTranslated);
    }

    const onCreateConfirm = () => {
        
        if(!isProgress) {
            handleProgress(true);
            
            const tmpFeedback = formFeedback.filter((_, key) => key < count);
            const data = tmpFeedback.map((feedback) => {
                const { recordTime,recordCaution, recordWay, recordAmount, recordPerOneTime } = feedback;
                let times = {};
                let cautions = {};
                let args = {};
                recordTime.value.map(time => {
                    times = {
                        ...times,
                        [time]: true
                    }
                });
    
                if(recordCaution.value.length > 0) {
                    recordCaution.value.map(caution => {
                        cautions = {
                            ...cautions,
                            [caution]: true
                        };
                    });
                    args = {
                        ...cautions
                    };
                }
    
                args = {
                    ...args,
                    res_perOneTimeCnt: parseInt(recordPerOneTime.value),
                    medicalRecordId: recordId,
                    res_amount: recordAmount.value,
                    res_way: recordWay.value,
                    ...times,
                };

                return args;
            });
            
            createConfirm({
                variables: {
                    data
                } as any
            });
        }
    }
    
    return {
        value: {
            onCreateConfirm,
            loadingCreateConfirm,
            isTranslated,
            onToggleTranslate,
            lang,
            formFeedback,
            currentIndex,
            count,
            handleChangeCount,
            handleCurrentIndex,
            isConfirm
        }
    };
};

const FeedbackProvider: React.FC<any> = ({
    children,
    recordId,
    lang,
    history
}) => (
    <FeedbackContext.Provider { ...useFetch(recordId, history, lang) }>
        {
            children
        }
    </FeedbackContext.Provider>
);

export { useFeedbackContext }; 
export default FeedbackProvider;
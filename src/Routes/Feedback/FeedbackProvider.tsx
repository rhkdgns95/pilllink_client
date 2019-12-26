import React, { createContext, useContext, useState } from "react";
import { PUBLIC_PATH, useAppContext } from "../App/AppProvider";
import { useMutation } from "react-apollo";
import { createConfirm, createConfirmVariables } from "../../Types/api";
import { CREATE_CONFIRM } from "./FeedbackQueries";
interface IContext {
    recordAmount: IUseRadio;
    recordTime: IUseCheckboxArray
    recordWay: IUseRadio;
    recordCaution: IUseCheckboxArray;
    onCreateConfirm: () => any;
    loadingCreateConfirm: boolean;
    isTranslated: boolean;
    onToggleTranslate: () => any;
    lang: TLanguage | "NULL";
}
const InitContext: IContext = {
    recordAmount: { value: "", onChange: () => {} },
    recordTime: { value: [], onChange: () => {} },
    recordWay: { value: "", onChange: () => {} },
    recordCaution: { value: [], onChange: () => {} },
    onCreateConfirm: () => {},
    loadingCreateConfirm: false,
    isTranslated: false,
    onToggleTranslate: () => {},
    lang: "NULL"
};

const FeedbackContext: React.Context<IContext> = createContext(InitContext);

const useFeedbackContext = () => useContext(FeedbackContext);

const useInputRadio = (initValue: string): IUseRadio => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    return {
        value,
        onChange
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
    }
    return {
        value,
        onChange
    }
}
const useFetch = (recordId: number, history: any, lang: TLanguage | "NULL"): { value: IContext } => {
    if(recordId === -1 || lang === "NULL") {
        history.push(PUBLIC_PATH);
    }
    const { isProgress, handleProgress, timeOut } = useAppContext();
    const recordAmount = useInputRadio("D3");
    const recordTime = useCheckbox([]);
    const recordWay = useInputRadio("AGO_EAT");
    const [isTranslated, setIsTranslated] = useState<boolean>(false);

    const recordCaution = useCheckbox([]);

    const [createConfirm, { loading: loadingCreateConfirm }] = useMutation<createConfirm, createConfirmVariables>(CREATE_CONFIRM, {
        onCompleted: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(!isProgress);
                }
    
                history.push(PUBLIC_PATH);
            }, timeOut);
        },
        onError: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(!isProgress);
                }
                console.log("CreateConfirm onError: ", data);
                history.push(PUBLIC_PATH)
            }, timeOut);
        }
    });
    const onToggleTranslate = () => {
        setIsTranslated(!isTranslated);
    }
    const onCreateConfirm = () => {
        
        if(!isProgress) {
            handleProgress(!isProgress);
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
                medicalRecordId: recordId,
                res_amount: recordAmount.value,
                res_way: recordWay.value,
                ...times,
            };
            
            createConfirm({
               variables: {
                    ...args as any
               } 
            });
        }
    }
    
    return {
        value: {
            recordAmount,
            recordTime,
            recordWay,
            recordCaution,
            onCreateConfirm,
            loadingCreateConfirm,
            isTranslated,
            onToggleTranslate,
            lang
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
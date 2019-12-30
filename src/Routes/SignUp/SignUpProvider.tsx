import React, { useContext, useState, createContext, useEffect } from "react";
import { emailSignUp, emailSignUpVariables, Gender, Nationality } from "../../Types/api.d";
import { useAppContext } from "../App/AppProvider";
import { useMutation } from "react-apollo";
import { EMAIL_SIGNUP } from "./SignUpQueries";
import { USER_LOGIN } from "../App/AppQueries.local";


interface IContext {
    isModal: boolean;
    toggleModal: () => any;
    firstName: IUseInputText,
    lastName: IUseInputText,
    userId: IUseInputText, 
    email: IUseInputText,
    password: IUseInputText,
    age: IUseSelect,
    nationality: IUseSelect,
    gender: IUseRadio,
    isAbroad: IUseRadio,
    addressNationality: IUseSelect,
    agree: boolean,
    message: string,
    toggleAgree: () => any;
    onSubmit: () => any;
    addressList: IUseSelect;
    addressItem: IUseSelect;
}

const InitContext: IContext = {
    isModal: false,
    toggleModal: () => {},
    message:"",
    userId: { value: "", onChange: () => {}, placeholder: "" },
    firstName: { value: "", onChange: () => {}, placeholder: "" },
    lastName: { value: "", onChange: () => {}, placeholder: "" },
    email: { value: "", onChange: () => {}, placeholder: "" },
    password: { value: "", onChange: () => {}, placeholder: "" },
    age: { value: "", onChange: () => {} },
    nationality: { value: "", onChange: () => {} },
    gender: { value: "", onChange: () => {} },
    isAbroad: { value: "true", onChange: () => {} },
    addressNationality: { value: "", onChange: () => {} },
    agree: false,
    toggleAgree: () => {},
    onSubmit: () => {},
    addressList: { value: "", onChange: () => {} },
    addressItem: { value: "", onChange: () => {} }
}

const SignUpContext: React.Context<IContext> = createContext(InitContext);

const useSignUpContext = () => useContext(SignUpContext);

const useInput = (placeholder: string): IUseInputText => {
    const [value, setValue] = useState<string>("");

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }

    return {
        value,
        onChange,
        placeholder
    };
}
const useSelect = (initValue: string): IUseSelect => {
    const [value, setValue] = useState<string>(initValue);
    const onChange = (event: any) => {
        const { target: { value } } = event;
        // setvalue;
        setValue(value);
    }
    const onInit = () => {
        setValue(initValue);
    };
    return {
        value,
        onChange,
        onInit
    };
}
const useSelectNationality = (initValue: TNationality): IUseSelectNationality => {
    const [value, setValue] = useState<TNationality>(initValue);
    const onChange = (event: any) => {
        const { target: { value } } = event;
        // setvalue;
        setValue(value);
    }
    return {
        value,
        onChange
    };
}
const useRadio = (initValue: string): IUseRadio => {
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
/** 
 *  verifySignUpForm 회원가입 양식 검증
 * 
 *  1. 해외거주자가 아닌경우, Address선택을 안한경우. // 생략됨.
 *  1. UserId를 적지않은 경우.
 *  2. 이름입력을하지 않는경우,
 *  3. 패스워드 입력 6글자 이상작성하지 않는경우
 * 
 *  @param formData    => 회원가입 폼 데이터 
 *  @param callbackFn  => 에러 메시지 출력
 *  
 */
const verifySignUpForm = (formData: ISignUpFormData, callbackFn: any): boolean => {
    const { firstName, lastName, password, email } = formData;
    
    let errorMessage: string = "";
    if( formData.userId === "") {
        // [1] 
        errorMessage = "Please write your ID";
    } else if(firstName === "" || lastName === "") { 
        // [2]
        errorMessage = "Please write your Name";
    } else if(password.length <= 5) {
        // [3]
        errorMessage = "Please write at least 6 digit Password";
    } else if(email === "") {
        errorMessage = "Please write your E-mail"
    }

    if(errorMessage === "") { // 에러가 없는경우
        return true;
    } else { 
        window.scrollTo(0, 0);
        callbackFn(errorMessage);
        return false;
    }
}
const useFetch = (): {value: IContext} => {
    const { handleTitle, handleProgress, isProgress, timeOut } = useAppContext();
    const [ message, setMessage ] = useState<string>("");
    const [ isModal, setIsModal ] = useState<boolean>(false);
    const [ agree, setAgree ]  = useState<boolean>(false);
    // detailAddress : 삭제될 예정.
    // 추가됨 address List - Item
    const addressList = useSelect("SEOUL");
    const addressItem = useSelect("0");
    useEffect(() => {
        // 세부 주소사항을 맨 처음값으로 변경한다.
        if(addressItem.onInit) {
            addressItem.onInit();
        }
    }, [addressList.value])

    const userId = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const age = useSelect("5");
    const nationality = useSelectNationality("KO");
    const gender = useRadio("male");
    const isAbroad = useRadio("false");
    const addressNationality = useSelectNationality("EN");
    const email = useInput("ex) abc@XXX.XXX");
    const password = useInput("");
    const [ handleLogin ] = useMutation(USER_LOGIN);
    const [ signUp ] = useMutation<emailSignUp, emailSignUpVariables>(EMAIL_SIGNUP, {
        onCompleted: data => {
            const { EmailSignUp: { ok, error, token }} = data;
            if(isProgress) {
                handleProgress(false);
            }
            if(!ok && error) {
                setMessage(error);
                console.log("emailSignUp Error: ", data);
                window.scrollTo(0, 0);
            } else if(ok && token) {
                console.log("emailSignUp Completed: ", data);
                handleLogin({
                    variables: {
                        token
                    }
                });
            } else {
                console.log("emailSignUp onCompleted Empty data: ", data);
            }
        },
        onError: data => {
            console.log("emailSignUp onError: ", data);
        }
    });

    handleTitle("Pil+Link | Sign up");

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const toggleAgree = () => {
        setAgree(!agree);
    }

    const onSubmit = () => {
        if(agree && !isProgress) { // 동의한 경우 + 이미 실행중인경우
            
            const formData: ISignUpFormData= {
                userId: userId.value,
                firstName: firstName.value,
                lastName: lastName.value,
                gender: gender.value === "male" ? Gender["M"] : Gender["W"],
                age: parseInt(age.value),
                nationality: Nationality[nationality.value],
                isAbroad: isAbroad.value === "true" ? true : false,
                email: email.value,
                password: password.value,
                abroadAddress: isAbroad.value === "true" ? addressNationality.value : null,
                addressList: isAbroad.value === "false" ? addressList.value as any : null,
                addressItem: isAbroad.value === "false" ? addressItem.value : null,
            };
            const verified = verifySignUpForm(formData, setMessage);
            if(verified) {
                handleProgress(true);
                setTimeout(() => {
                    if(isProgress) {
                        handleProgress(false);  
                    }
                }, timeOut);
                signUp({
                    variables: {
                        ...formData
                    } as any
                });
            }
            
        }
    }  

    return {
        value: {
            isModal,
            toggleModal,
            userId,
            firstName,
            lastName,
            age,
            nationality,
            gender,
            isAbroad,
            addressNationality,
            email,
            password,
            agree,
            toggleAgree,
            onSubmit,
            message,
            addressList,
            addressItem
        }
    };
}

const SignUpProvider: React.FC<any> = ({
    children
}) => (
    <SignUpContext.Provider { ...useFetch() }>
        {
            children
        }
    </SignUpContext.Provider>
);
export { useSignUpContext };
export default SignUpProvider;
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "../App/AppProvider";

interface IContext {
    firstName: IUseInputEdit;
    lastName: IUseInputEdit;
    password: IUseInputEdit;
    gender: IUseInputEdit;
    age: IUseSelectEdit;
    nationality: IUseSelectEdit;
    isAbroad: IUseInputEdit;
    abroadAddress: IUseSelectEdit;
    detailAddress: string;
    handleDetailAddress: (address: string) => any;
    isModal: boolean;
    toggleModal: () => any;
    onFormInit: () => any;
    onUpdate: () => any;
}

const InitContext: IContext = {
    firstName: { value: "", onChange: () => {}, onInit: () => {} },
    lastName: { value: "", onChange: () => {}, onInit: () => {} },
    password: { value: "", onChange: () => {}, onInit: () => {} },
    gender: { value: "", onChange: () => {}, onInit: () => {} },
    age: { value: "", onChange: () => {}, onInit: () => {} },
    nationality: { value: "", onChange: () => {}, onInit: () => {} },
    isAbroad: { value: "", onChange: () => {}, onInit: () => {} },
    abroadAddress: { value: "", onChange: () => {}, onInit: () => {} },
    detailAddress: "",
    handleDetailAddress: () => {},
    isModal: false,
    toggleModal: () => {},
    onUpdate: () => {},
    onFormInit: () => {},
};

const EditContext: React.Context<IContext> = createContext<IContext>(InitContext);
const useEditContext = () => useContext(EditContext);

const useInput = (initValue: string): IUseInputEdit => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    const onInit = (value: string) => {
        setValue(value);
    }
    return {
        value,
        onChange,
        onInit
    };
}
const useSelect = (initValue: string): IUseSelectEdit => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    const onInit = (value: string) => {
        setValue(value);
    }
    return {
        value,
        onChange,
        onInit
    };
}


const useFetch = (): {value: IContext} => {
    const { handleTitle, user, isProgress, handleProgress, message, updateMyprofile } = useAppContext();
    const firstName = useInput(user ? user.firstName : "");
    const lastName = useInput(user ? user.lastName : "");
    const password = useInput(""); // 빈값으로 놓기.
    const gender = useInput(user ? user.gender : "");
    const age = useSelect(user ? user.age + "" : "");
    const nationality = useSelect("EN");
    const isAbroad = useInput("");
    const abroadAddress = useSelect("EN"); // 외국 거주
    const [ isModal, setIsModal ] = useState<boolean>(false);
    const [ detailAddress, setDetailAddress ] = useState<string>(""); // 한국 거주
    
    const handleDetailAddress = (data: string) => {
        setDetailAddress(data);
    }

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const onFormInit = () => {
        if(user) {
            firstName.onInit(user.firstName);
            lastName.onInit(user.lastName);
            password.onInit("");
            gender.onInit(user.gender);
            age.onInit(user.age + "");
            nationality.onInit(user.nationality);
            if(user.isAbroad) { // 외국 사는경우,
                isAbroad.onInit("true");
                abroadAddress.onInit(user.address);
                handleDetailAddress("");
            } else { // 한국 사는경우,
                isAbroad.onInit("false");
                handleDetailAddress(user.address);
                abroadAddress.onInit("");
            }
        }
    }
    /**
     *  verify = () => boolean 
     *   
     *  onUpdate의 데이터 검증
     * 
     *  1. first,last name은 빈값이면안된다.
     *  2. 국내 거주자라면 address가 빈값이면 안됨!
     */
    const verify = (): boolean => {
        let newMessage: string = "";
        if(firstName.value === "" || lastName.value === "") {
            // [1]    
            newMessage = "Please enter your name";
            message.onChangeMessage({
                ok: false,
                data: newMessage
            });
            return false;
        } else if(isAbroad.value === "false" && detailAddress === "") {
            // [2]
            newMessage = "Please select an address";
            message.onChangeMessage({
                ok: false,
                data: newMessage
            });
            return false;
        }

        return newMessage === "";
    }

    const onUpdate = () => {
        const isVerify = verify();
        if(isVerify && !isProgress) {
            handleProgress(true);
            const formData: IUpdateFormData = {
                firstName: firstName.value,
                lastName: lastName.value,
                age: parseInt(age.value),
                nationality: nationality.value,
                gender: gender.value === "M" ? "M" : "W",
                address: isAbroad ? abroadAddress.value : detailAddress,
                isAbroad: isAbroad.value === "true",
            }
            
            updateMyprofile({
                variables: {
                    ...formData as any
                },
            });
        }
    }

    useEffect(onFormInit, [user]);
    
    useEffect(() => {
        handleTitle("Pill Link | My Info");
        return () => {
            message.onChangeMessage({
                ok: true,
                data: ""
            });
        }
    }, []);
    
    return {
        value: {
            firstName,
            lastName,
            password,
            gender,
            age,
            nationality,
            abroadAddress,
            handleDetailAddress,
            isAbroad,
            detailAddress,
            isModal,
            toggleModal,
            onUpdate,
            onFormInit
        }
    };
};

const EditProvider: React.FC<any> = ({
    children
}) => (
    <EditContext.Provider { ...useFetch() }>
        {
            children
        }
    </EditContext.Provider>
);

export { useEditContext };
export default EditProvider;
import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import InputPwd from "../InputPwd";
import { useMutation } from "react-apollo";
import { UPDATE_MY_PASSWORD } from "../../Routes/Edit/EditQueries";
import { useAppContext } from "../../Routes/App/AppProvider";
import { updateMyPassword, updateMyPasswordVariables} from "../../Types/api";


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,0.6);
`;

const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
    max-width: 500px;
    max-height: 400px;
    border-radius: 5px;
    overflow: hidden;
`;
const Title = styled.h3`
    text-align: center;
    color: #0542b3;
    background-color: #f8f8f8;
    margin: 0;
    padding: 25px;
    font-size: 15px;
    position: relative;
    & > svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        fill: #b3b3b3;
        padding: 6px;
        cursor: pointer;
        transition: .2s;
        &:hover {
            fill: #c39393;
        }
    }
`;
const Form = styled.div`
    width: 90%;
    margin: 30px auto;
`;
const FormButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 31px;
`;
const FormButton = styled.input`
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    &:active,
    &:focus {

    }
    &:disabled {
        opacity: .5;
        cursor: default;
    }
`;
const CancelBtn = styled(FormButton)`
    background-color: white;
    color: #7887a2;
    transition: .1s;
    &:hover {
        color: #0063b2;
    }
`;

const UpdateBtn = styled(FormButton)`
    background-color: #0f3e64;
    color: white;
    transition: .1s;
    &:hover {
        background-color: #0063b2;
    }
`;

const useInput = (): IUseInputText => {
    const [value, setValue] = useState("");

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    };

    return {
        value,
        onChange,
        placeholder: ""
    };
}

interface IModalChangePwdForm {
    toggleModal: () => any;
    userId: number;
}
const ModalChangePwdForm: React.FC<IModalChangePwdForm> = ({
    toggleModal,
    userId
}) => {
    const { isProgress, handleProgress } = useAppContext();
    const currentPassword = useInput();
    const newPassword = useInput();
    const newPasswordConfirm = useInput();
    /**
     *  verify - form 데이터 입력
     *  
     *  [1] 비밀번호를 모두 입력했는지.
     *  [2] newPassword와 confirmPassword값이 같은지 확인.
     */
    const verify = () => {
        // [1]
        if(currentPassword.value === "" || newPassword.value === "" || newPasswordConfirm.value === "") {
            return {
                ok: false,
                error: "Please enter all password input."
            };
        }
        if(newPassword.value !== newPasswordConfirm.value) {
            return {
                ok: false,
                error: "Please confirm the password to change."
            }
        }
        return {
            ok: true,
            error: null
        };
    }
    const [updateMyPassword, {loading: updateLoading}] = useMutation<updateMyPassword, updateMyPasswordVariables>(UPDATE_MY_PASSWORD, {
        onCompleted: data => {
            setTimeout(() => {
                if(isProgress) {
                    const { UpdateMyPassword: { ok, error }} = data;
                    handleProgress(false);
                    if(ok) {
                        alert("Password Updated");
                        toggleModal();
                    } else {
                        alert(error);
                    }
                    
                }
            }, 500);  
        },
        onError: data => {
            console.log("UpdateMyPassword error: " , data);
            if(isProgress) {
                handleProgress(false);
            }
        }
    });

    const onUpdate = () => {
        if(!isProgress) {
            const isReady = verify();
            const { ok, error } = isReady;
            if(ok && userId !== -1) {
                // 실행함.
                handleProgress(true);
                updateMyPassword({
                    variables: {
                        currentPassword: currentPassword.value,
                        newPassword: newPassword.value
                    }
                });
            } else {
                alert(error);
            }
        }
    }

    return (
        <Container onClick={isProgress ? () => {} : toggleModal}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>
                    Change Password
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={isProgress ? () => {} : toggleModal} width="22" height="22" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </Title>
                <Form>
                    <InputPwd disabled={updateLoading} id={"0"} label={"Current Password"} color={"#244e8e"} { ...currentPassword }/>
                    <InputPwd disabled={updateLoading} id={"1"} label={"New Password"} color={"#24a03f"} { ...newPassword }/>
                    <InputPwd disabled={updateLoading} id={"2"} label={"Confirm Password"} color={"#24a03f"} { ...newPasswordConfirm }/>
                    <FormButtonBox>
                        <CancelBtn type={"button"} value={"Cancel"} onClick={isProgress ? () => {} : toggleModal} disabled={updateLoading}/>
                        <UpdateBtn type={"button"} value={"Update"} onClick={onUpdate} disabled={updateLoading}/>
                    </FormButtonBox>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default ModalChangePwdForm;
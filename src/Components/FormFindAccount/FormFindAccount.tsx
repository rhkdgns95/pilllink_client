import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import InputPwd from "../InputPwd";
import { FORGOT_MY_ACCOUNT } from "../../Routes/Login/LoginQueries";
import { useLazyQuery } from "react-apollo";
import { useAppContext } from "../../Routes/App/AppProvider";
import { forgotMyAccount, forgotMyAccountVariables } from "../../Types/api";

const Container = styled.div`

`;

const Wrapper = styled.div`
    position: relative;
    padding-top: 40px;
`;
const Message = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 18px;
    left: 50%;
    font-size: 13px;
    transform: translateX(-50%);
    color: #1087ed;
    &.active-error {
        color: #fe4d4d;
    }
`;
const Button = styled.input`
    display: block;
    border: 1px solid #e3e7ec;
    background-color: #1386e1;
    color: white;
    padding: 10px 25px;
    margin: 0 auto;
    margin-top: 45px;
    transition: .2s;
    opacity: 1;
    &:disabled {
        opacity: .7;
    }
    &:focus,
    &:active {
        border: 1px solid #e3e7ec;
    }
    &:not(:disabled) {
        cursor: pointer;
        &:active, 
        &:hover {
            background-color: #135192;
        }
    }
    @media(max-width: 510px) {
        margin-top: 30px;
    }
`;

const useInput = (): IUseInputText => {
    const [value, setValue] = useState<string>("");
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    return {
        value,
        onChange,
        placeholder: ""
    };
}
interface IMessage {
    ok: boolean;
    text: string;
}
const FormFindAccount = () => {
    const firstName = useInput();
    const lastName = useInput();
    const email = useInput();
    const { isProgress, handleProgress, timeOut } = useAppContext();
    
    const [message, setMessage] = useState<IMessage>({
        ok: false,
        text: ""
    });

    const [ forgotMyAccount, { loading: forgotMyAccountLoading }] = useLazyQuery<forgotMyAccount, forgotMyAccountVariables>(FORGOT_MY_ACCOUNT, {
        onCompleted: data => {
            setTimeout(() => {
                const { ForgotMyAccount: { ok, error="failed", userId }} = data;
                if(isProgress) {
                    handleProgress(false);
                }
                if(ok) {
                    setMessage({
                        ok,
                        text: `Your account ID:   '${userId}'`
                    })
                } else {
                    setMessage({
                        ok,
                        text: error + ""
                    });
                }
            }, timeOut);
        },
        onError: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(false);
                }
                setMessage({
                    ok: false,
                    text: data.message
                });
            }, timeOut);
            console.log("forgotMyAccount error: ", data);
        },
        fetchPolicy: "network-only"
    });

    const onSubmit = () => {
        if(!isProgress) {
            handleProgress(true);
            const args = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value
            };
            forgotMyAccount({
                variables: {
                    ...args
                }
            });
        }
    }
    
    return (
        <Container>
            <Wrapper>
                <Message className={message.ok ? "" : "active-error"}>{message.text}</Message>
                <InputPwd 
                    id={"1"}
                    label={"First Name"}
                    value={firstName.value}
                    onChange={firstName.onChange}
                    color={"#476c99"}
                    type={"text"}
                    disabled={isProgress || forgotMyAccountLoading}
                />
                <InputPwd 
                    id={"2"}
                    label={"Last Name"}
                    value={lastName.value}
                    onChange={lastName.onChange}
                    color={"#476c99"}
                    type={"text"}
                    disabled={isProgress || forgotMyAccountLoading}
                />
                <InputPwd 
                    id={"3"}
                    label={"E-mail"}
                    value={email.value}
                    onChange={email.onChange}
                    color={"#476c99"}
                    type={"text"}
                    disabled={isProgress || forgotMyAccountLoading}
                />
                <Button 
                    disabled={isProgress || forgotMyAccountLoading || firstName.value === "" || lastName.value === "" || email.value === ""}
                    type={"button"} 
                    value={"Done"}
                    onClick={isProgress || forgotMyAccountLoading ? () => {} : onSubmit}
                />
            </Wrapper>
        </Container>
    );
};

export default FormFindAccount;
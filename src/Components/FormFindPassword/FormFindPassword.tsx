import React, { useState } from "react";
import styled from "../../Styles/typed-components";
import InputPwd from "../InputPwd";
import { useMutation } from "react-apollo";
import { RESET_PASSWORD } from "../../Routes/Login/LoginQueries";
import { useAppContext } from "../../Routes/App/AppProvider";
import { resetPassword, resetPasswordVariables } from "../../Types/api";

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
    margin-top: 117.4px;
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
        margin-top: 102.4px;
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
const FormFindPassword = () => {
    const { isProgress, handleProgress, timeOut } = useAppContext();
    const id = useInput();
    const email = useInput();

    const [message, setMessage] = useState<IMessage>({
        ok: false,
        text: ""
    });

    const [ resetPasswordMutation, { loading }] = useMutation<resetPassword, resetPasswordVariables>(RESET_PASSWORD, {
        onCompleted: data => {
            setTimeout(() => {
                const { ResetPassword: { ok, error="failed." }} = data;
                
                if(isProgress) {
                    handleProgress(false);
                }
                
                if(ok) {
                    setMessage({
                        ok,
                        text: "Your reset password has been sent by E-mail."
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

                console.log("Reset Password error: ", data);
            }, timeOut);
        }
    })

    const onSubmit = () => {
        if(!isProgress) {
            handleProgress(true);
            const args = {
                email: email.value,
                userId: id.value
            }
            resetPasswordMutation({
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
                    label={"ID"}
                    value={id.value}
                    onChange={id.onChange}
                    color={"#476c99"}
                    type={"text"}
                    disabled={isProgress || loading}
                />
                <InputPwd 
                    id={"2"}
                    label={"E-mail"}
                    value={email.value}
                    onChange={email.onChange}
                    color={"#476c99"}
                    type={"text"}
                    disabled={isProgress || loading}
                />
                <Button 
                    disabled={ isProgress || loading || email.value === "" || id.value === ""}
                    type={"button"} 
                    value={"Done"}
                    onClick={isProgress || loading || email.value === "" || id.value === "" ? () => {} : onSubmit }
                />
            </Wrapper>
        </Container>
    );
};

export default FormFindPassword;
import React from "react";
import styled from "../../Styles/typed-components";
import InputText from "../../Components/InputText";
import { useLoginContext } from "./LoginProvider";
import Button from "../../Components/Button";
import { useAppContext } from "../App/AppProvider";
import { TextInputKeyPressEventData } from "react-native";
import Message from "../../Components/Message";

const Container = styled.div``;
const Wrapper = styled.div`
`;
const LoginForm = styled.form`
    width: 100%;
    display: block;
`;

const InputTextExtended = styled(InputText)`
    width: 100%;
    margin: 5px auto;
`;
interface IProps {
    onSubmit: () => any;
}
const LoginPresenter: React.FC<IProps> = ({
    onSubmit
}) => {
    const { isProgress } = useAppContext();
    const { email, password, loginLoading, element, error } = useLoginContext();
    return (
        <Container>
            <Wrapper className={"row"}>
            
                <LoginForm onKeyPress={
                    e => {
                        e.currentTarget.onkeyup = (data: TextInputKeyPressEventData) => {
                            const { key } = data;
                            if(key === "Enter") {
                                onSubmit();
                            }
                        }
                    }
                }>
                    <Message text={error}/>
                    <InputTextExtended 
                        element={element}
                        className={"input-email"}
                        { ...email }
                    />
                    <InputTextExtended 
                        className={"input-password"}
                        { ...password }
                        type={"password"}
                    />
                    <Button 
                        value={"Login"}
                        onClick={onSubmit}
                        disabled={ isProgress || loginLoading }
                    />
                </LoginForm>
            </Wrapper>
        </Container>    
    );
}

export default LoginPresenter;
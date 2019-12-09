import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import InputTitleText from "../../Components/InputTitleText";
import InputCell from "../../Components/InputCell";
import InputRadio from "../../Components/InputRadio";
import { useEditContext } from "./EditProvider";
import { Nationality } from "../../nationality";
import ModalAddressEdit from "../../Components/ModalAddressEdit";
import AddressEdit from "../../Components/AddressEdit";
import CircleButton from "../../Components/CircleButton";
import Message from "../../Components/Message";
import { useAppContext } from "../App/AppProvider";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: block;
`;
const Info = styled.div`
    display: flex;
    flex: 2;
    padding: 0 20px;
    & > div,
    & > form {
        flex: 1;
    }
`;
const Bg = styled.div`

`;
const EditForm = styled.form`

`;


const SelectorBox = styled.div`
    width: 100%;
    padding: 15px 10px;
    display: flex;
    flex: 4;
    align-items: center;
`;
const Title = styled.label`
    font-size: 12px;
    flex: 1;
    text-transform: uppercase;
    color: #147d51;
`;
const Select = styled.select`
    width: 100%;
    flex: 3;
    padding: 7px;
    padding-bottom: 6px;
    border: 1px solid #dfdfdf
    border-radius: 3px;
    font-size: 12px;
    &:focus {
        border: 1px solid ${props => props.theme.greenColor};
        box-shadow: none;
        outline: none;
    }
`;

const Option = styled.option`
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    & > div {
        margin: 0 7.5px;
    }
`;
interface IMessage {
    ok: boolean;
    message: string;
}
const MessageBox = styled.div<IMessage>`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    transition: .1s;
    opacity: ${props => props.message === "" ? 0 : 1};
    height: ${props => props.message === "" ? 0 : "auto"};
    & p {
        color: ${props => props.ok ? "blue" : "red"} !important;
    }
`;
const EditPresenter = () => {
    const { loadingUpdateMyProfile, message, } = useAppContext();
    const { firstName, lastName, password, age, gender, nationality, onFormInit, onUpdate } = useEditContext();
    let optionsAge: Array<any> = [];
    for(var i = 1; i <= 100; i++) { optionsAge[i - 1]  = i; }
    return (
        <Container>
            <Navbar
                title={"PillLink"}
                subTitle={"Show your symptoms to pharmacy and hospital"}
            />
            <Wrapper className={"row"}>
                <StepTitle 
                    title={"My page"}
                    subTitle={"You can update your information and see your history"}
                />
                <MyMenu isEdit={true}/>
                <MessageBox ok={message.ok} message={message.data}>
                    <Message className={"message"} text={message.data}/>
                </MessageBox>
                <Info>
                    <EditForm>
                        <InputTitleText 
                            title={"first name"}
                            { ...firstName }
                        />
                        <InputTitleText 
                            title={"last name"}
                            { ...lastName }
                        />
                        {/* <InputTitleText 
                            title={"password"}
                            type={"password"}
                            { ...password }
                        /> */}
                        <InputCell
                            title={"gender"}
                            input={
                                <>
                                    <InputRadio 
                                        id={1}
                                        label={"male"}
                                        value={"M"}
                                        name={"gender"}
                                        onChange={gender.onChange}
                                        checked={gender.value === "M"}
                                    />
                                    <InputRadio 
                                        id={2}
                                        label={"female"}
                                        value={"W"}
                                        onChange={gender.onChange}
                                        name={"gender"}
                                        checked={gender.value === "W"}
                                    />
                                </>
                            }
                        />
                        <SelectorBox>
                            <Title>Age</Title>
                            <Select value={age.value} onChange={age.onChange}>
                            {
                                optionsAge.map((option, key) => 
                                    <Option key={key} value={option}>{ option }</Option>
                                )
                            }
                            </Select>
                        </SelectorBox>
                        <SelectorBox>
                            <Title>Nationality</Title>
                            <Select value={nationality.value} onChange={nationality.onChange}>
                                {
                                    Nationality.map((option, key) => 
                                        <Option key={key} value={option.code}>{ option.name }</Option>
                                    )
                                }
                            </Select>
                        </SelectorBox>
                        <AddressEdit title={"Address"}/> 
                    </EditForm>
                    <Bg>
                        background
                    </Bg>
                </Info>

                <ButtonBox>
                    <CircleButton 
                        color={"gold"}
                        disabled={false}
                        value={"CANCEL"}
                        onClick={onFormInit}
                    />
                    <CircleButton 
                        color={"green"}
                        disabled={loadingUpdateMyProfile}
                        value={"UPDATE"}
                        onClick={ loadingUpdateMyProfile ? () => {} : onUpdate }
                    />
                </ButtonBox>
            </Wrapper>
            <ModalAddressEdit />
        </Container>
    );
}
    
export default EditPresenter;
import React, { useEffect, useState } from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import InputTitleText from "../../Components/InputTitleText";
import InputCell from "../../Components/InputCell";
import InputRadio from "../../Components/InputRadio";
import { useEditContext } from "./EditProvider";
import { Nationality, INationality } from "../../nationality";
import AddressEdit from "../../Components/AddressEdit";
import CircleButton from "../../Components/CircleButton";
import Message from "../../Components/Message";
import { useAppContext, PATH_IMG_BG } from "../App/AppProvider";

const Container = styled.div`

`;
const Box = styled.div`

`;
const Wrapper = styled.div`
    display: block;
    @media(max-width: 910px) {
        & {
            .info {
                padding: 0;
                .edit-form {
                    
                }
                .bg-box { 
                    display: none;
                }
            }
        }
    }
    @media(max-width: 510px) {
        & {
            .message-box {
                padding: 10px 0;
            }
            .info {
                .edit-form {
                     .select-box {
                         padding: 10px 0;
                         flex: 5;
                         select {
                            font-size: 11px;
                            flex: 4;
                         }
                         div {
                             flex: 4;
                         }
                         label {
                             padding-left: 10px;
                             flex: 2;
                             font-size: 11px;
                         }
                     }
                }
            }
            .circle-btn-box {
                padding-top: 50px;
            }
            form {
                padding-right: 10px;
            }
        }
    }
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
const Img = styled.img`
    width: 100%;
    display: block; 
`;
const EditForm = styled.form`

`;


const SelectorBox = styled.div`
    width: 100%;
    padding: 10px;
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
const NationalitySelectBox = styled.div`
    position: relative;
    flex: 3;
    & > select {
        width: 102%;
        @media(max-width: 910px) {
            width: 101%;
        }
        @media(max-width: 510px) {
            width: 102%;
        }
        padding: 7px 10px;
        border: 1px solid #dfdfdf
        border-radius: 3px;
        font-size: 12px;
        margin-left: -5px;
        &:focus {
            border: 1px solid ${props => props.theme.greenColor};
            box-shadow: none;
            outline: none;
        }
    }
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
const FlagImg = styled.img`
    position: absolute;
    top: 26%;
    right: 26px;
    width: 23px;
    @media(max-width: 510px) {
        right: 17px;
        top: 31%;
        width: 18px;
    }
`;
const GenderImg = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
`;
const Option = styled.option`
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    margin-bottom: 20px;
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
        color: ${props => props.ok ? "#2674d4" : "red"} !important;
    }
`;
const EditPresenter = () => {
    const { loadingUpdateMyProfile, message, } = useAppContext();
    const [ isEffected, setIsEffected ] = useState<boolean>(false);
    
    const { firstName, lastName, age, gender, nationality, onFormInit, onUpdate } = useEditContext();
    let optionsAge: Array<any> = [];
    const currentNationality: INationality | undefined = Nationality.find(item => item.code === nationality.value);
    
    const flagImg: string = currentNationality!.flag;
    
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);

    for(var i = 1; i <= 100; i++) { optionsAge[i - 1]  = i; }
    return (
        <Container className={"container"}>
            <Box className={"box"}>
                <Navbar
                    title={"PilLink"}
                    subTitle={"Show your symptoms to a pharmacy or hospital"}
                />
                <Wrapper className={"row"}>
                    <StepTitle 
                        title={"My page"}
                        subTitle={"You can update your information and see your history"}
                    />
                    <MyMenu isEdit={true}/>
                    <MessageBox className={"message-box"} ok={message.ok} message={message.data}>
                        <Message className={"message"} text={message.data}/>
                    </MessageBox>
                    <Info className={isEffected ? "info step-container active" : "info step-container"}>
                        <EditForm className={"edit-form"}>
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
                                        <GenderImg>
                                            {
                                                // gender.value === "M" ?
                                                // <svg fill={"blue"} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg> :
                                                // <svg fill={"red"} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/></svg>

                                            }    
                                        </GenderImg> 
                                    </>
                                }
                            />
                            <SelectorBox className={"select-box"}>
                                <Title>Age</Title>
                                <Select value={age.value} onChange={age.onChange}>
                                {
                                    optionsAge.map((option, key) => 
                                        <Option key={key} value={option}>{ option }</Option>
                                    )
                                }
                                </Select>
                            </SelectorBox>
                            <SelectorBox className={"select-box"}>
                                <Title>Nationality</Title>
                                <NationalitySelectBox>
                                    <Select value={nationality.value} onChange={nationality.onChange}>
                                        {
                                            Nationality.map((option, key) => 
                                                <Option key={key} value={option.code}>{ option.name }</Option>
                                            )
                                        }
                                    </Select>
                                    <FlagImg src={flagImg} />
                                </NationalitySelectBox>
                            </SelectorBox>
                            <AddressEdit title={"Address"}/> 
                        </EditForm>
                        <Bg className={"bg-box"}>
                            <Img src={PATH_IMG_BG + "/mypage.jpg"}/>
                        </Bg>
                    </Info>

                    <ButtonBox className={"circle-btn-box"}>
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
                {/* <ModalAddressEdit /> */}
            </Box>
        </Container>
    );
}
    
export default EditPresenter;
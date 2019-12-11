import React from "react";
import styled from "../../Styles/typed-components";
import InputRadio from "../InputRadio";
import { useSignUpContext } from "../../Routes/SignUp/SignUpProvider";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 4;
    padding: 15px 10px;
    @media(max-width: 510px) {
        padding: 10px 0;
        & {
            label {
                padding-left: 10px;
                font-size: 11px;
                flex: 2;
            }
            input, select {
                margin-top: 0;
            }
            .radio-cell {
                display: block;
                & > div {
                    margin-bottom: 10px;
                }
            }
            .input-box {
                margin-left: -14px;
            }
        }
    }
`;
const Label = styled.label`
    flex: 1;
    font-size: 12px;
    text-transform: uppercase;
    color: #147d51;
    align-self: flex-start;
`;
const Cell = styled.div`
    display: flex;
    align-items: center;
`;
const InputBox = styled.div`
    flex: 3;
    margin-left: -7px;
`;
const InputAddress = styled.input`
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    margin-top: 10px;
    &:focus {
        border: 1px solid #4bd38e;
        & ~ label {
            color: #0aa147;
        }      
    }
`;
const SelectAddress = styled.select`
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    margin-top: 10px;
    font-size: 12px;
    &:focus {
        border: 1px solid #4bd38e;
        & ~ label {
        }      
    }
`;
const Option = styled.option`

`;
interface IProps {
    title: string;
}
const Address: React.FC<IProps> = ({
    title
}) => {
    const { isModal, toggleModal, detailAddress, isAbroad, addressNationality } = useSignUpContext();
    return (
        <Container>
            <Wrapper>
                <Label> { title }</Label>
                <InputBox className={"input-box"}>
                    <Cell className={"radio-cell"}>
                        <InputRadio 
                            defaultChecked={isAbroad.value === "false"}
                            id={1}
                            label={"living in korea"}
                            onChange={isAbroad.onChange}
                            value={"false"}
                            name={"address"}
                        />
                        <InputRadio 
                            defaultChecked={isAbroad.value === "true"}
                            id={2}
                            onChange={isAbroad.onChange}
                            value={"true"}
                            label={"living abroad"}
                            name={"address"}
                        />
                    </Cell>
                    {
                        //In korea
                        isAbroad.value === "false" && (
                            <InputAddress 
                                disabled={false}
                                placeholder={"find address..."}
                                value={detailAddress}
                                onChange={e=> {}}
                                onClick={e => toggleModal()}
                                autoComplete={"off"}
                            />
                        )
                    }
                    {
                        //In no-korea
                        isAbroad.value === "true" && (
                            <SelectAddress defaultValue={addressNationality.value} onChange={addressNationality.onChange}>
                                <Option value={"EN"}>England</Option>
                                <Option value={"CH"}>China</Option>
                                <Option value={"FR"}>France</Option>
                            </SelectAddress>
                        )
                    }
                </InputBox>
            </Wrapper>
        </Container>
    );
}

export default Address;
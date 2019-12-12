import React from "react";
import styled from "../../Styles/typed-components";
import InputRadio from "../InputRadio";
import { useEditContext } from "../../Routes/Edit/EditProvider";
import { Nationality, INationality } from "../../nationality";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 4;
    padding: 15px 10px;
    .input-box {
        margin-left: -4px;
    }
    @media(max-width: 510px) {
        padding: 10px 0;
        flex: 5;
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
                margin-left: 1px;
                & > div {
                    margin-bottom: 10px;
                }
            }
            .input-box {
                margin-left: -7px;
                flex: 4;
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
    
`;
const InputAddress = styled.input`
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
            color: #0aa147;
        }      
    }
`;
const SelectAddress = styled.div`
    position: relative;
`;
const Select = styled.select`
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px;
    padding-bottom: 6px;
    transition: border .1s;
    margin-top: 10px;
    font-size: 12px;
    &:focus {
        border: 1px solid ${props => props.theme.greenColor};
        & ~ label {
        }      
    }
`;
const FlagImg = styled.img`
    position: absolute;
    top: 40%;
    right: 26px;
    width: 18px;
    @media(max-width: 510px) {
        right: 18px;
        top: 21%;
    }
`;
const Option = styled.option`

`;
interface IProps {
    title: string;
}
const AddressEdit: React.FC<IProps> = ({
    title
}) => {
    const { user } = useAppContext();
    const { isModal, toggleModal, detailAddress, isAbroad, abroadAddress } = useEditContext();
    const abroadNationality: Array<INationality> = Nationality.filter(item => item.code !== "KO");
    
    const currentAbroadImage = abroadNationality.find(item => item.code === abroadAddress.value);
    if(!user) {
        return <></>
    }
    return (
        <Container>
            <Wrapper>
                <Label> { title }</Label>
                <InputBox className={"input-box"}>
                    <Cell className={"radio-cell"}>
                        <InputRadio 
                            id={1}
                            label={"living in korea"}
                            onChange={isAbroad.onChange}
                            checked={isAbroad.value === "false"}
                            value={"false"}
                            name={"address"}
                        />
                        <InputRadio 
                            id={2}
                            onChange={isAbroad.onChange}
                            checked={isAbroad.value === "true"}
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
                            <SelectAddress>
                                <Select className={"select-address-box"} onChange={abroadAddress.onChange} value={abroadAddress.value}>
                                    {
                                        abroadNationality.map((item, key) => <Option key={key} value={item.code}>{ item.name }</Option>)
                                    }
                                </Select>
                                <FlagImg src={currentAbroadImage!.flag}/>
                            </SelectAddress>
                        )
                    }
                </InputBox>
            </Wrapper>
        </Container>
    );
}

export default AddressEdit;
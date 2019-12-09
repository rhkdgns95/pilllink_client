import React from "react";
import styled from "../../Styles/typed-components";
import InputRadio from "../InputRadio";
import { useEditContext } from "../../Routes/Edit/EditProvider";
import { Nationality } from "../../nationality";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 4;
    padding: 15px 10px;
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
const SelectAddress = styled.select`
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px;
    padding-bottom: 6px;
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
const AddressEdit: React.FC<IProps> = ({
    title
}) => {
    const { user } = useAppContext();
    const { isModal, toggleModal, detailAddress, isAbroad, abroadAddress } = useEditContext();
    const abroadNationality = Nationality.filter(item => item.code !== "KO");
    if(!user) {
        return <></>
    }
    return (
        <Container>
            <Wrapper>
                <Label> { title }</Label>
                <InputBox>
                    <Cell>
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
                            <SelectAddress onChange={abroadAddress.onChange} value={abroadAddress.value}>
                                {
                                    abroadNationality.map((item, key) => <Option key={key} value={item.code}>{ item.name }</Option>)
                                }
                            </SelectAddress>
                        )
                    }
                </InputBox>
            </Wrapper>
        </Container>
    );
}

export default AddressEdit;
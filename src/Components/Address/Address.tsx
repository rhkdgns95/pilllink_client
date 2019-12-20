import React from "react";
import styled from "../../Styles/typed-components";
import InputRadio from "../InputRadio";
import { useSignUpContext } from "../../Routes/SignUp/SignUpProvider";
import { Nationality, INationality } from "../../nationality";
import { AddressKOR } from "../../Utils/addressKOR";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 4;
    padding: 15px 10px;
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
                margin-top: 0 !important;
            }
            .radio-cell {
                display: block;
                margin-left: 1px;
                & > div {
                    margin-bottom: 10px;
                }
            }
            .input-box {
                margin-left: -10px;
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
    margin-left: -7px;
`;
const SelectAddress = styled.div`
    position: relative;
    & > .flag-img {
        
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
const Select = styled.select`
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    margin-top: 10px;
    font-size: 12px;
    position: relative;
    &:focus {
        border: 1px solid ${props => props.theme.greenColor};
        box-shadow: none;
        outline: none;
    }
`;
const Option = styled.option`
`;

const AddrBox = styled.div`
    width: 100%;
`;
const AddrSelect = styled(Select)`
    @media(max-width:510px) {
        margin: 5px 0;
    }
`;
const AddrOption = styled(Option)`

`;
interface IProps {
    title: string;
}
const Address: React.FC<IProps> = ({
    title
}) => {
    const { isAbroad, addressNationality, addressList, addressItem } = useSignUpContext();
    const abroadNational: Array<INationality> = Nationality.filter(item => item.code !== "KO" );
    const currentAbroadImage = abroadNational.find(item => item.code === addressNationality.value);
    const currentAddressList: IAddress | undefined = AddressKOR.find(list => list.value === addressList.value);
    
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
                        isAbroad.value === "false" && currentAddressList && (
                            <div>
                                {
                                    <>
                                        <AddrBox>
                                            <AddrSelect onChange={addressList.onChange} value={addressList.value}>
                                            {
                                                AddressKOR.map((addressList, key) => 
                                                    <AddrOption key={key} value={addressList.value}> { addressList.name } ({ addressList.en_name }) </AddrOption>
                                            )}
                                            </AddrSelect>
                                        </AddrBox>
                                        <AddrBox>
                                            {
                                                currentAddressList.details.length > 0 &&
                                                <AddrSelect onChange={addressItem.onChange} value={addressItem.value}>
                                                    {
                                                        currentAddressList.details.map((item, key) => 
                                                            <AddrOption key={key} value={item.value}>{item.name} ({item.en_name})</AddrOption>
                                                        )
                                                    }
                                                </AddrSelect>
                                            }
                                            
                                        </AddrBox>
                                    </>
                                }
                            </div>
                            // <div>
                            //     {
                                    
                            //     }
                            //     <select>

                            //     </select>
                            // </div>
                            // <div>
                            //     <select>

                            //     </select>
                            // </div>
                        )
                        // isAbroad.value === "false" && (
                        //     <InputAddress 
                        //         disabled={false}
                        //         placeholder={"find address..."}
                        //         value={detailAddress}
                        //         onChange={e=> {}}
                        //         onClick={e => toggleModal()}
                        //         autoComplete={"off"}
                        //     />
                        // )
                    }
                    {
                        //In no-korea
                        isAbroad.value === "true" && (
                            <SelectAddress>
                                    <Select className={"select-address-box"} defaultValue={addressNationality.value} onChange={addressNationality.onChange}>
                                        {
                                            abroadNational.map((nationality, key) => 
                                                <Option key={key} value={nationality.code}>{nationality.name} </Option>
                                            )
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

export default Address;
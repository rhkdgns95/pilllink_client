import React from "react";
import styled from "../../Styles/typed-components";
import { useSignUpContext } from "../../Routes/SignUp/SignUpProvider";
import { Nationality, INationality } from "../../nationality";

const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex: 4;
    align-items: center;
    @media(max-width: 510px) {
        flex: 5;
        padding: 10px 0;
        label {
            padding-left: 10px
            flex: 2;
            font-size: 11px;
        }
        select {
            flex: 4;
            font-size: 11px !important;
        }
        .national-select-box {
            flex: 4;
            margin-left: -3px;
        }
    }
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
    padding: 7px 10px;
    border: 1px solid #dfdfdf
    border-radius: 3px;
    font-size: 12px;
    &:focus {
        border: 1px solid ${props => props.theme.greenColor};
        box-shadow: none;
        outline: none;
    }
`;
const SelectBox = styled.div`
    display: flex;
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
const NationalSelect = styled.select`

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
const Option = styled.option`
`;
interface IProps {
    title: "Age" | "Nationality";
};
const Selector: React.FC<IProps> = ({
    title
}) => { 
    const { age, nationality } = useSignUpContext();
    let options: Array<any> = [];
    let flagImg: string = "";
    if(title === "Age") {
        for(var i = 1; i <= 100; i++) {
            options[i-1] = i + "";
        }
    } else {
        options = Nationality;
        const currentNationality: INationality | undefined = Nationality.find(item => item.code === nationality.value);
        flagImg = currentNationality!.flag;
    }
    return (
        <Container>
            <Wrapper>
                <Title>{ title }</Title>
                {
                    title === "Age" && (
                        <Select defaultValue={age.value} onChange={age.onChange}>
                            {
                                options.map((option, key) => 
                                    <Option key={key} value={option}>{ option }</Option>    
                                )
                            }
                        </Select>
                    )
                }
                {
                    title === "Nationality" && (
                        <SelectBox className={"national-select-box"}>
                            <NationalSelect defaultValue={nationality.value} onChange={nationality.onChange}>
                                {
                                    options.map((option, key) => 
                                        <Option key={key} value={option.code}>{ option.name }</Option>  
                                    )
                                }
                            </NationalSelect>
                            <FlagImg src={flagImg} />
                        </SelectBox>
                        // <Select defaultValue={nationality.value} onChange={nationality.onChange}>
                        //     {
                        //         options.map((option, key) => 
                        //             <Option key={key} value={option.code}>{ option.name }</Option>  
                        //         )
                        //     }
                        // </Select>
                    )
                }
            </Wrapper>
        </Container>
    )
}
export default Selector;
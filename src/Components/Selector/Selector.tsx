import React from "react";
import styled from "../../Styles/typed-components";
import { useSignUpContext } from "../../Routes/SignUp/SignUpProvider";
import { Nationality } from "../../nationality";

const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
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
    if(title === "Age") {
        for(var i = 1; i <= 100; i++) {
            options[i-1] = i + "";
        }
    } else {
        options = Nationality;
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
                        <Select defaultValue={nationality.value} onChange={nationality.onChange}>
                            {
                                options.map((option, key) => 
                                    <Option key={key} value={option.code}>{ option.name }</Option>  
                                )
                            }
                        </Select>
                    )
                }
            </Wrapper>
        </Container>
    )
}
export default Selector;
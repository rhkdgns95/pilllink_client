import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    padding-left: 16px;
`;
const Wrapper = styled.div`
    max-width: 250px;
`;
const Title = styled.p`
    margin-bottom: 5px;
    position: relative;
    font-size: 13px;
    color: #739281;
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -16px;
        padding: 3px;
        border-radius: 50%;
        background-color: ${props => props.theme.greenColor};
    }
`;
const Select = styled.select`
    padding: 7.5px 10px;
    padding-right: 20px;
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    font-size: 12px;
    color: #9a9595;
    &:focus {
        border: 1px solid #13a964;
    }
`;
const Option = styled.option`

`;

interface IProps {
    title: string;
    options: Array<{ name: string, value: string }>
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => any;
}
const SelectorSymptom: React.FC<IProps> = ({
    title,
    options,
    defaultValue,
    onChange
}) => (
    <Container>
        <Wrapper>
            <Title>{ title }</Title>
            <Select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map((option, key)=> 
                        <Option key={key} value={option.value}>{option.name}</Option>
                    )
                }
            </Select>
        </Wrapper>
    </Container>
);

export default SelectorSymptom;
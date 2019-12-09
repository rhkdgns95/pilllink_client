import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin: 10px 15px;
`;
const Wrapper = styled.div`

`;

const Radio = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -9;
    pointer-events: none;
    &:checked {
        & ~ label {
            border: 1px solid #13a964;
            box-shadow: 0 1px 2px rgba(0,0,0,.24), 0 -1px 4px rgba(0,0,0,.32);
            transition: .2s;
            opacity: 1;
            & > img {
                opacity: 1;
            }
            & > span {
                transition: .2s;
                color: #13a964;
            }
        }
    }
`;
const Label = styled.label`
    display: flex;
    flex-flow: column;
    border: 1px solid #dfdfdf;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    cursor: pointer;
    opacity: .8;
    &:hover {
        & > img {
            opacity: 1;
        }
    }
`;
const Img = styled.img`
    display: block;
    width: 50%;
    height: 50%;
    opacity: .8;
    transition: .2s;
`;
const Text = styled.span`
    margin: 0 auto;
    margin-top: 7px;
    font-size: 12px;
`;

interface IProps {
    name: string;
    value: string;
    group: string;
    imgPath: string;
    defaultChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const RadioButtonSymptom: React.FC<IProps> = ({
    name,
    value,
    imgPath,
    group,
    onChange,
    defaultChecked
}) => (
    <Container>
        <Wrapper>
            <Radio type={"radio"} onChange={onChange} id={value} value={value} name={group} defaultChecked={defaultChecked}/>
            <Label htmlFor={value}>
                <Img src={imgPath}/>
                <Text>{ name }</Text>
            </Label>
        </Wrapper>
    </Container>
);

export default RadioButtonSymptom;
import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;

const Wrapper = styled.div`

`;

const Radio = styled.input`
    opacity: 0;
    pointer-events: none;
    z-index: -9;
    transform: scale(0);
    position: absolute;
    &:checked {
        & ~ label {
            background-color: #197f29;
        }
    }
`;

const Label = styled.label`
    transition: .2s;
    border-radius: 30px;
    width: 90px;
    padding: 7.5px;
    text-align: center;
    background-color: #35d04f;
    font-size: 13px;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: #197f29;
    }
    @media(max-width: 510px) {
        width: 125px;
        margin: 6px 0;
    }
`;
interface IProps {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    text: string;
    id: number;
    name: string;
    value: string;
}
const RadioBoxText: React.FC<IProps> = ({
    checked,
    onChange,
    text,
    id,
    name,
    value
}) => (
    <Container>
        <Wrapper>
            <Radio id={"chart_radio_" + id} value={value} name={name} checked={checked} onChange={onChange} type={"radio"}/>
            <Label htmlFor={"chart_radio_" + id}>{ text }</Label>
        </Wrapper>
    </Container>
);

export default RadioBoxText;

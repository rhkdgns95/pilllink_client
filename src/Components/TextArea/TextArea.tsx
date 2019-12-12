import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    display: flex;
    flex: 4;
    flex-flow: row-reverse;
    padding: 10px;
    @media(max-width: 510px) {
        flex-flow: column-reverse;   
        label {
            margin-bottom: 10px;
        }
        textarea {
            font-size: 11px;
        }
    }
`;
const Wrapper = styled.textarea`
    display: block;
    border: 1px solid #dfdfdf;
    border-radius: 3px;
    padding: 7px 10px;
    transition: border .1s;
    flex: 3;
    font-size: 13px;
    max-height: 150px;
    overflow-y: scroll;
    line-height: 20px;
    background-color: #ffffff;
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.greenColor};
        & ~ label {
            color: #0aa147;
        }
    }
`;
const Label = styled.label`
    font-size: 12px;
    flex: 1;
    text-transform: uppercase;
    transition: color .1s;
    color: #147d51;
`;
interface IProps {
    title: string;
    value: string;
}
const TextArea: React.FC<IProps> = ({
    title,
    value
}) => (
    <Container>
        <Wrapper id={"agreement"}  value={value} rows={50} onChange={() => {}}/>
        <Label htmlFor={"agreement"}>{ title }</Label>
    </Container>
);

export default TextArea;
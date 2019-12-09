import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Wrapper = styled.div`
    position: relative;
    padding-left: 29px;
    margin: 15px 0;
`;
const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    &:checked {
        & ~ label {
            & > div {
                border: 1px solid #147d51;
                & > svg {
                    opacity: 1;
                    fill: #147d51;
                }
            }
        }
    }
`;
const Label = styled.label`
    font-size: 12px;
    cursor: pointer;
`;
const Square = styled.div`
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    padding: 8px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    & > svg {
        position: absolute;
        top: inherit;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .2s;
        opacity: 0;
    }
`;
interface IProps {
    isAgree: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {};
    name: string;
    title: string;
}

const AgreeCheckbox: React.FC<IProps> = ({
    isAgree,
    onChange,
    name,
    title
}) => (
    <Container>
        <Wrapper>
            <Checkbox type={"checkbox"} id={name} onChange={onChange} checked={isAgree}/>
            <Label htmlFor={name}>
                {
                    title
                }
                <Square>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                </Square>
            </Label>
        </Wrapper>
    </Container>
);

export default AgreeCheckbox;
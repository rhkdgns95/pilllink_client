import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

    &.active {
        &::before {
            content: "";
            display: block;
            position: fixed;
            top: 50%;
            left: 0;
            width: 100%;
            height: 50%;
            background-color: rgba(0,10,0,0.42);
            z-index: 1;
        }        
        & > div {
            position: relative;
            z-index: 2;
            &::before {
                content: "처방전을 작성하시려면 클릭해주세요.";
                position: absolute;
                z-index: 2;
                display: inline-block;
                top: 316%;
                left: 50%;
                width: 100%;
                text-align: center;
                transform: translateX(-50%);
                color: #e5fffb;
                font-size: 13px;
                text-shadow: 0 2px 4px rgba(0,0,0,.4);
                line-height: 18px;
            }
            &::after {
                content: "";
                position: absolute;
                display: block;
                width: 140px;
                height: 140px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                border-radius: 50%;
                box-shadow: inset 0.5px 0.5px 10px 6px rgba(0,50,0,0.2), inset -0.5px -0.5px 10px 6px rgba(0,0,50,0.2);
            }
            input {
                position: relative;
                z-index: 2;
            }
        }
    }
    @media(max-width: 510px) {
        &.active {
            & > div {
                &::before {
                    top: -350%;
                }
                &::after {
                    width: 103%;
                }
            }
        }
    }
`;

const Wrapper = styled.div`

`;
interface IButton {
    isNext?: boolean;
}
const Button = styled.input<IButton>`
    width: 130px;
    padding: 7.5px;
    opacity: .9;
    transition: .2s;
    background-color: ${props => props.isNext ? "#39b14d" : "#d5a51a"};
    color: white;
    border-radius: 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .6px;
    &:not(:disabled):hover {
        opacity: 1;
    }
    &:disabled {
        cursor: auto;
        opacity: .7;
    }
`;
interface IProps {
    value: string;
    onClick: () => any;
    isNext?: boolean;
    disabled: boolean;
    isModal?: boolean;
}
const StepButton: React.FC<IProps> = ({
    value,
    onClick,
    isNext,
    disabled,
    isModal
}) => (
    <Container className={isModal ? "active" : ""}>
        <Wrapper>
            <Button onClick={onClick} type={"button"} value={value} isNext={isNext} disabled={disabled}/>
        </Wrapper>
    </Container>
);

export default StepButton;
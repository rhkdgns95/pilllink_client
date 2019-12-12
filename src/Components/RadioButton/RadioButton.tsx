import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    // width: 100px;
    height: 100px;
    margin-bottom: 85px;
    @media(max-width: 510px) {
        & {
            margin-bottom: 40px;
            input:checked {
                & ~ .label {
                    & .circle {
                        width: 20px;
                        height: 20px;
                        svg {
                            width: 10px;
                        }
                    }
                }
            }

            .label {

            }
        }
    }
`;
const Radio = styled.input`
    position: absolute;
    z-index: -9;
    opacity: 0;
    pointer-events: none;
    
    &:checked {
        & ~ .label {
            & .circle {
                margin-top: 10px;
                opacity: 1;
                transform: scale(1);
                transition: transform .3s, opacity .4s;
            }
            .lang-img-box {
                box-shadow: 0 0.1px 10px rgba(40,80,130,.4);
                img {
                    opacity: 1;
                }
            }
            & p {
                color: #567685;
                font-weight: bold;
            }
        }
    }
`;
const Label = styled.label`
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: green;
    
`;

const ImgBox = styled.div`
    width: 100%;
    height: 74px;
    border: 1px solid rgba(0,0,0,0);
    box-shadow: 0 0.5px 10px rgba(0,0,0,.2);
    transition: .2s;
`;
const Img = styled.img`
    width: 110px;
    margin-top: -19px;
    display: block;
    // width: 100%;
    transition: .2s;
    opacity: .9;
`;
const Text = styled.p`
    margin-top: 10px;
    font-size: 13px;
    text-align: center;
    color: #999999;
`;
const Circle = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(42,144,16,1) 0%, rgba(75,201,43,1) 50%, rgba(42,144,16,1) 100%);
    opacity: 0;
    transform: scale(0);
    margin-top: -50px;
    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: white;
    }
`;
interface IProps {
    defaultChecked?: boolean;
    id: string;
    name: string;
    value: string;
    imgPath: string;
    group: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}
const RadioButton: React.FC<IProps> = ({
    defaultChecked,
    id,
    name,
    value,
    imgPath,
    group,
    onChange,
}) => (
    <Container>
        <Wrapper>
            <Radio type={"radio"} name={group} id={id} onChange={onChange} value={value} defaultChecked={defaultChecked} />
            <Label htmlFor={id} className={'label'}>
                <ImgBox className={"lang-img-box"}>
                    <Img src={imgPath}/>
                </ImgBox>
                <Text>{ name }</Text>
                <Circle className={'circle'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                </Circle>
            </Label>
        </Wrapper>
    </Container>
);

export default RadioButton;
import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    @media(max-width: 600px) {
        justify-content: flex-start;
        & {
            & > div {
                margin-left: 0;
                padding-left: 27px;
                &::before {
                    width: 6px;
                }
            }
            p {
                letter-spacing: 15px;
                font-size: 30px;
                margin-bottom: 2px; 
            }
            span {
                font-size: 12px;
                white-space: nowrap;
                &.top-header {
                    margin-top: 10px;
                    letter-spacing: 5px;
                }
            }
        }
    }
    @media(max-width: 430px) {
        & {
            & > div {
                padding-left: 22px;
                &::before {
                    left: 5px;
                }
            }
            p {
            }
            span {
                font-size: 10px;

                &.top-header {
                }
            }
        }
    }
`;
const TopHeader = styled.span`
    position: relative;
    font-size: 13px;
    letter-spacing: 8px;
    font-size: 18px;
    padding-left: 5px;
    color: #d48a03;
    margin-bottom: 40px;
    width: fit-content;
    &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 1100px;
        height: 3px;
        right: 0;
        background-color: white;
    }
`;
const Wrapper = styled.div`
    position: relative;
    padding-left: 3%;
    margin-left: 5px;
    // padding-left: 30px;
    margin-bottom: 40px;
    &::before {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        position: absolute;
        content: "";
        background-color: ${props => props.theme.greenColor};
        width: 9px;
        height: 90%;
    }
`;
const Title = styled.p`
    color: ${props => props.theme.greenColor};
    font-size: 50px;
    letter-spacing: 25px;
    line-height: 100%;
    margin-bottom: 8px;
`;
const SubTitle = styled.span`
    color: ${props => props.theme.grayColor};
`;
interface IProps {
    className: string;
    topTitle: string;
    title: string;
    subTitle: string;
}
const MainHeader: React.FC<IProps> = ({
    className,
    topTitle,
    title,
    subTitle
}) => (
    <Container className={className}>
        <TopHeader className={"top-header"}> { topTitle } </TopHeader>
        <Wrapper>
            <Title>{ title }</Title>
            <SubTitle>{ subTitle }</SubTitle>
        </Wrapper>
    </Container>
);

export default MainHeader;
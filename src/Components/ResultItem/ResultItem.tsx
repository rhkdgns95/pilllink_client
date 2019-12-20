import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    width: 140px;
    height: 140px;
    margin: 15px 10px;
    @media(max-width: 510px) {
        & {
            span {
                position: absolute;
                top: 95%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    border-radius: 50%;
    box-shadow: 0 0.5px 10px rgba(0,50,100,.2);
    background-color: white;
`;
const Img = styled.img`
    width: 50%;
    height: 50%;
    display: block;
`;
const Text = styled.span`
    margin-top: 12px;
    font-size: 12px;
    max-width: 100px;
    text-align: center;
`;
interface IProps {
    name: string;
    imgPath: string;
    className: string;
}
const ResultItem: React.FC<IProps> = ({
    name,
    imgPath,
    className
}) => (
    <Container className={className}>
        <Wrapper>
            <Img src={imgPath}/>
            <Text>{ name }</Text>
        </Wrapper>
    </Container>
);

export default ResultItem;
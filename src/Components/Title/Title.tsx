import React from "react";
import styled from "../../Styles/typed-components";
import Message from "../Message";

const Container = styled.div`

`;
const Wrapper = styled.div`
    position: relative;
    display: flex;

    &::before {
        content: "";
        position: absolute;
        left: -5px;
        top: 50%; 
        transform: translateY(-50%);
        width: 6px;
        height: 95%;
        background-color: ${props => props.theme.greenColor};
    }
`;
const MainTitle = styled.span`
    text-transform: uppercase;
    margin-left: 10px;
    color: #727272;
    font-weight: bold;
    letter-spacing: .5px;
`;
const MessageExtended = styled(Message)`
    margin-left: auto
    margin-right: 20px;
`;
interface IProps {
    className?: string;
    title: string;
    subTitle?: string;
    error?: string | null;
}
const Title: React.FC<IProps> = ({
    className,
    title,
    subTitle,
    error
}) => (
    <Container className={className}>
        <Wrapper>
            <MainTitle>{ title }</MainTitle>
            { subTitle && subTitle }
            { 
                error && <MessageExtended text={error}/>
            }
        </Wrapper>  
    </Container>
);

export default Title;
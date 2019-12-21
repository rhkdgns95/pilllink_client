import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const Title = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    
    padding: 10px;
    & svg {
        margin-right: 10px;
        fill: #386735;
    }
`;

const TitleText = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: #0f7209;
`;

interface IProps {
    svg: any;
    title: string;
    buttonGroup: any;
}
const FeedItem: React.FC<IProps> = ({
    svg,
    title,
    buttonGroup,
    
}) => (
    <Container>
        <Wrapper>
            <Title>
                { svg }   
                <TitleText>{ title }</TitleText>
            </Title>
            { buttonGroup }
        </Wrapper>
    </Container>
);

export default FeedItem;
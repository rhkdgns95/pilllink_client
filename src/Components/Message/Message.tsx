import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div``;
const Text = styled.p`
    display: none;
    padding: 5px 0;
    font-size: 13px;
    &.active {
        display: block;
        color: ${props => props.theme.redColor};
    }
`;
interface IProps {
    text: string | null;
}
const Message: React.FC<IProps> = ({
    text
}) => (
    <Container>
        <Text className={text ? "active" : ""}>
            { text }
        </Text>
    </Container>
);

export default Message;
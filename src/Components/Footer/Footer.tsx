import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin-top: 30px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
    border-top: 1px solid #e8e8e8;
`;
const Text = styled.span`
    color: #bebebe;
    font-size: 12px;
`;
const Footer = () => (
    <Container>
        <Wrapper>
            <Text>2019 PILLLINK ⓒ All Copyrights Reserved.</Text>
        </Wrapper>
    </Container>
);

export default Footer;
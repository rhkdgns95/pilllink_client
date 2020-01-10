import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    display: flex;
`;
const Wrapper = styled.div`
    background: linear-gradient(90deg, rgba(55,208,77,1) 0%, rgba(7,200,142,1) 100%);
    display: inline-block;
`;

const Button = styled.input`
    padding: 7.5px 15px;
    margin: 2.5px;
    color: white;
    transition: .3s;
    cursor: pointer;
    background: none;    
    font-size: 11px;
    &:hover {
        color: #39b14d;
        background: white;
    }
    @media(max-width: 510px) {
        padding: 5.5px 13px;
        font-size: 10px;
        
    }
`;

interface IProps {
    value: string;
    onClick: () => any;
}
const ButtonDetails: React.FC<IProps> = ({
    value,
    onClick
}) => (
    <Container>
        <Wrapper>
            <Button onClick={onClick} value={value} type={"button"}/>
        </Wrapper>
    </Container>
)
export default ButtonDetails;
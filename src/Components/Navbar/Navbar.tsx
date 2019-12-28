import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";
import Tab from "../Tab";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`
    width: 100%;
    @media(max-width: 500px) {
        & {
            .title {
                letter-spacing: 12.7px;
            }
            .sub-title {
                font-size: 6.5px;
            }
        }
    }
`;
const Line = styled.div`
    background-color: ${props => props.theme.greenColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
`;
const BottomLine = styled(Line)`
    top: 70px;
    height: 1px;
    background-color: #dfdfdf;
`;
const Wrapper = styled.div`
    justify-content: space-between;
`;
const HomeLink = styled(Link)`
    margin: 15px 0;
`;
const Title = styled.p`
    color: ${props => props.theme.greenColor};
    font-size: 23px;
    letter-spacing: 25.3px;
    font-weight: bold;
`;
const SubTitle = styled.span`
    color: ${props => props.theme.grayColor};
    font-size: 10px;
`;

interface IProps {
    title: string;
    subTitle: string;    
}
const Navbar: React.FC<IProps> = ({
    title,
    subTitle
}) => {
    const { user } = useAppContext();
    return (
        <Container>
            <Line/>
            <BottomLine/>
            <Wrapper className={"row"}>
                <HomeLink to={"/"}>
                    <Title className={"title"}>{ title }</Title>          
                    <SubTitle className={"sub-title"}>{ subTitle }</SubTitle>          
                </HomeLink>    
                { user && <Tab /> }
            </Wrapper>
        </Container>
    )
}

export default Navbar;
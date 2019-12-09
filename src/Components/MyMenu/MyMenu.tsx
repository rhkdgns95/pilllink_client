import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex: 2;
`;
const GoLink = styled(Link)`
    cursor: pointer;
    flex: 1;
    text-align: center;
    padding: 15px;
    font-size: 13px;
    background-color: ${props => props.theme.greenColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
        fill: white;
        margin-left: -5px;
        margin-right: 10px;
        opacity: 0;
    }
    &.active {
        & > svg {
            opacity: 1;
        }
        background-color: #119458;
    }
`;
const GoProfile = styled(GoLink)`
    
`;
const GoHistory = styled(GoLink)`

`;
interface IProps {
    isEdit: boolean;
}
const MyMenu: React.FC<IProps> = ({
    isEdit
}) => (
    <Container>
        <Wrapper>
            <GoProfile className={isEdit ? "active" : ""} to={"/edit"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                My Information
            </GoProfile>
            <GoHistory className={isEdit ? "" : "active"} to={"/history"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                My History
            </GoHistory>
        </Wrapper>
    </Container>
);

export default MyMenu;
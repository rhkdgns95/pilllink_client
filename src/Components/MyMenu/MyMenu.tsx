import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex: 2;
    @media(max-width: 510px) {
        & {
            a {
                font-size: 11px;
                & > svg {
                    margin-left: -20px;
                }
            }
        }
    }
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
    & svg {
        fill: white;
        margin-left: -5px;
        margin-right: 10px;
        opacity: 0;
    }
    transition: .2s;
    &:hover {
        background-color: #389e6f;
    }
    &.active {
        & svg {
            opacity: 1;
        }
        background-color: #119458;
    }
    white-space: nowrap;
    @media(max-width: 510px) {
        & svg {
            display: none;
        }
    }
`;
const GoProfile = styled(GoLink)`
    
`;
const GoHistory = styled(GoLink)`

`;
const GoSuggestion = styled(GoLink)`

`;
interface IProps {
    active: string;
}
const MyMenu: React.FC<IProps> = ({
    active
}) => {
    const { user } = useAppContext();
    
    return (
        <Container>
            <Wrapper>
                <GoProfile className={active === "info" ? "active" : ""} to={"/edit"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                    Information
                </GoProfile>
                <GoHistory className={active === "history" ? "active" : ""} to={"/history"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                    History
                    { user && " ("+ user.medicalRecordsCount + ")"}
                </GoHistory>
                <GoSuggestion className={active === "suggestion" ? "active" : ""} to={"/suggestion"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                    Suggestion
                    { user && " ("+ user.boardCount + ")"}
                </GoSuggestion>
            </Wrapper>
        </Container>
    );
}

export default MyMenu;
import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import { useAdminContext } from "./AdminProvider";
import AdminRecord from "../../Components/AdminRecord/AdminRecord";
import AdminUsers from "../../Components/AdminUsers";
import AdminStatistics from "../../Components/AdminStatistics";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: block;
`;
const Tab = styled.div`
    display: flex;
    margin: 15px 0;
`;

const TabItem = styled.div`
    transition: .2s;
    cursor: pointer;
    position: relative;
    &.active {
        font-weight: bold;
        &::before,
        &::after {
            width: 50%;
            background-color: #34af77;
        }
    }
    &:hover {
        &::before,
        &::after { 
            width: 50%;
            background-color: #34af77;
        }
    }
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 10px;
        transition: .3s;
        background-color: black;
    }
    &::after {
        left: auto;
        right: 10px;
    }
    padding: 10px 20px;
`;

const AdminPresenter = () => {
    const { tab, handleTab, tabArray } = useAdminContext();

    return (
        <Container className={"container"}>
            <Navbar
                title={"PilLink"}
                subTitle={"Show your symptoms to a pharmacy or hospital"}
            />
            <Wrapper className={"row"}>
                <Tab>
                    {
                        tabArray.map((item, key) => 
                            <TabItem className={tab.no === item.no ? "active" : ""} key={key} onClick={e => handleTab(item.no)}>{item.text}</TabItem>
                        )
                    }
                    
                </Tab>
                { 
                    // 0 -> Records, 1 -> Users 2 -> Total Data 
                }
                { tab.no === 0 && <AdminRecord/> }
                { tab.no === 1 && <AdminUsers/> }
                { tab.no === 2 && <AdminStatistics/> }
            </Wrapper>
        </Container>
    )
}

export default AdminPresenter;
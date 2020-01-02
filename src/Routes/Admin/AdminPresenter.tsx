import React from "react";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import { useAdminContext } from "./AdminProvider";
import AdminUsers from "../../Components/AdminUsers";
import AdminStatistics from "../../Components/AdminStatistics";
import AdminRecord from "../../Components/AdminRecord";

const Container = styled.div`

`;
const Box = styled.div`

`;

const Wrapper = styled.div`
    display: block;
`;
const Tab = styled.div`
    display: flex;
    margin: 15px 0;
    font-size: 12px;
    margin-bottom: 22px;
`;

const TabItem = styled.div`
    transition: .2s;
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    
    text-align: center;
    @media(max-width: 510px) {
        flex: 1;
    }
    &.active {
        color: #34af77;
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
        background-color: green;
        z-index: -1; 
    }
    &::after {
        left: auto;
        right: 10px;
    }
    
`;

const AdminPresenter = () => {
    const { tab, handleTab, tabArray } = useAdminContext();

    return (
        <Container className={"container"}>
            <Box className={"box"}>
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
            </Box>
        </Container>
    )
}

export default AdminPresenter;
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
    margin-top: 25px;
    margin-bottom: 22px;
`;

const TabItem = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #f4f4f4;
    text-align: center;
    transition: .2s;
    border: .5px solid #d3d3d3;
    & svg {
        padding: 4px;
        fill: gray;
        margin-right: 10px;
    }
    @media(max-width: 910px) {
        flex: 1;   
        flex-flow: column;
        & svg {
            margin-right: 0;
            margin-bottom: 3px;
        }
    }
    
    &::before,
    &::after {
        z-index: 1;
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        top: 0;
        left: 0;
        transition: .3s;
        transition-timing-function: ease-in-out;
        background-color: green;
    }
    &::after {
        left: auto;
        right: 0;
    }
    &.active {
        color: #34af77;
        font-weight: bold;
        background-color: white;
        border-bottom: 0;
        & svg {
            fill: #34af77;
        }
        &::before,
        &::after {
            width: 50.5%;
            background-color: #34af77;
        }
    }
    &:hover {
        background-color: white;
        &::before,
        &::after {
            width: 50.5%;
            background-color: #34af77;
        }
    }
    &:disabled {
        cursor: default;
        opacity: 1;
    }

`;
const TabIcon = [
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/></svg>
];

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
                                <TabItem disabled={tab.no === item.no} className={tab.no === item.no ? "active" : ""} key={key} onClick={e => handleTab(item.no)}>{ TabIcon[key] }{item.text}</TabItem>
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
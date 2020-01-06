import React, { createContext, useContext, useState, useEffect } from "react";

interface IContext {
    tab: IUseTab;
    tabArray: Array<IUseTab>;
    handleTab: (no: number) => any;
}
const InitContext: IContext = {
    tab: { no: 0, text: "" },
    tabArray: [],
    handleTab: () => {}
};
const AdminContext = createContext<IContext>(InitContext);

const useAdminContext = () => useContext(AdminContext);

const tabArray: Array<IUseTab> = [
    {
        no: 0,
        text: "리스트" 
    },
    {
        no: 1,
        text: "회원"
    },
    {
        no: 2,
        text: "통계"
    }
];


const useFetch = (): { value: IContext } => {
    const [tab, setTab] = useState<IUseTab>(tabArray[2]);
    
    

    const handleTab = (no: number) => {
        setTab(tabArray[no]);
    }

    return {
        value: {
            tab,
            handleTab,
            tabArray
        }
    };
}
interface IProps {

}
const AdminProvider: React.FC<IProps> = ({
    children
}) => (
    <AdminContext.Provider { ...useFetch() }>
        {
            children
        }
    </AdminContext.Provider>
);

export { useAdminContext };
export default AdminProvider;
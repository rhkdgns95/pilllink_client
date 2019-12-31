import React from "react";
import AdminProvider from "./AdminProvider";
import AdminPresenter from "./AdminPresenter";

const Admin = () => (
    <AdminProvider>
        <AdminContainer/>
    </AdminProvider>
);

const AdminContainer = () => (
    <AdminPresenter/>
);

export default Admin;
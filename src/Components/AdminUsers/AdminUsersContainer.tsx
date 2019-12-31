import React from "react";
import styled from "../../Styles/typed-components";
import AdminUsersProvider from "./AdminUsersProvider";
import AdminUsersPresenter from "./AdminUsersPresenter";

const AdminUsers = () => (
    <AdminUsersProvider>
        <AdminUsersContainer />
    </AdminUsersProvider>
);

const AdminUsersContainer = () => <AdminUsersPresenter/>;

export default AdminUsers;
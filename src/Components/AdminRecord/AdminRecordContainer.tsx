import React from "react";
import AdminRecordProvider from "./AdminRecordProvider";
import AdminRecordPresenter from "./AdminRecordPresenter";

const AdminRecord = () => (
    <AdminRecordProvider>
        <AdminRecordContainer/>
    </AdminRecordProvider>
)

const AdminRecordContainer = () => <AdminRecordPresenter />

export default AdminRecord;
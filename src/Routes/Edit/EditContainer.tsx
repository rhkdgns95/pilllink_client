import React from "react";
import EditPresenter from "./EditPresenter";
import EditProvider from "./EditProvider";


const Edit = () => (
    <EditProvider>
        <EditContainer />
    </EditProvider>
);

const EditContainer = () => <EditPresenter />

export default Edit;
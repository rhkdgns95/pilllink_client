import React from "react";
import GenderPresenter from "./GenderPresenter";
import GenderProvider from "./GenderProvider";

const Gender = () => (
    <GenderProvider>
        <GenderContainer/>
    </GenderProvider>
);

const GenderContainer = () => <GenderPresenter />;

export default Gender;
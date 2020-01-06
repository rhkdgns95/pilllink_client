import React from "react";
import GenderDetailsPresenter from "./GenderDetailsPresenter";
import GenderDetailsProvider from "./GenderDetailsProvider";

const GenderDetails  = () => (
    <GenderDetailsProvider>
        <GenderDetailsContainer/>
    </GenderDetailsProvider>
);

const GenderDetailsContainer = () => <GenderDetailsPresenter/>;

export default GenderDetails;
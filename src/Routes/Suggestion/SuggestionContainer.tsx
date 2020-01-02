import React from "react";
import SuggestionProvider from "./SuggestionProvider";
import SuggestionPresenter from "./SuggestionPresenter";

const Suggestion = () => (
    <SuggestionProvider>
        <SuggestionContainer/>
    </SuggestionProvider>
);

const SuggestionContainer = () => <SuggestionPresenter/>;

export default Suggestion;
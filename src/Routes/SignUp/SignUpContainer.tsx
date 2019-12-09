import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import SignUpProvider from "./SignUpProvider";

const SignUp = () => (
    <SignUpProvider>
        <SignUpContainer />
    </SignUpProvider>
)
const SignUpContainer = () => <SignUpPresenter/>

export default SignUp;
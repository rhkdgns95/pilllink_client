import { createGlobalStyle } from "./typed-components";

export const GlobalStlyes = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    html, body {
        margin: 0;
        border: 0;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        font-family: 'Nanum Gothic', sans-serif;
        padding-bottom: 30px;
    }
    * {
        box-sizing: border-box;
    }
    ul, li, a, p {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        color: inherit; 
    }
    select,
    input {
        border: 0;
        margin: 0;
        &:active,
        &:focus {
            outline: 0;
            border: 0;
            box-shadow: none;
        }
    }
    select {
        // margin-bottom: -1px;
    }
    button {
        border: 0;
        &:focus,
        &:active {
            outline: none;
        }
    }
    &:disabled {
        opacity: .5;
    }
    .row {
        display: flex;
        flex-flow: row warp;
        width: 100%;
        margin: 0 auto;
        max-width: 900px;
        @media(max-width: 910px) {
            width: 90%;
        }
        @media(max-width: 510px) {
            width: 95%;
        }
    }
`;
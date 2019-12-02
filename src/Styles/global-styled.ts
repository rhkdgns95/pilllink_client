import { createGlobalStyle } from "./typed-components";

export const GlobalStlyes = createGlobalStyle`
    html, body {
        margin: 0;
        border: 0;
    }
    body {
        background-color: ${props => props.theme.bgColor};
    }
    * {
        box-sizing: border-box;
    }
    ul, li, a {
        margin: 0;
        padding: 0;
        list-style: none;
        color: inherit;
    }
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
        max-width: 1100px;
    }
`;
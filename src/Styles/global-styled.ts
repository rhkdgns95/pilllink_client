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
`;
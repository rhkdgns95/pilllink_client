import { createGlobalStyle } from "./typed-components";

export const GlobalStlyes = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    html, body {
        margin: 0;
        border: 0;
        height: 100%;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        font-family: 'Nanum Gothic', sans-serif;
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
        color: #2c3e50;
        &:active,
        &:focus {
            outline: 0;
            border: 0;
            box-shadow: none;
        }
    }
    select {
        // margin-bottom: -1px;
        background-color: #ffffff;
        min-height: 32px;
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
        flex-flow: row;
        width: 100%;
        margin: 0 auto;
        max-width: 900px;
        @media(max-width: 910px) {
            width: 90%;
        }
        @media(max-width: 510px) {
            width: 95%;
            flex-flow: row wrap;
        }
    }
    .step-container {
        transition: opacity .4s, transform .3s;
        transform: translateY(-30px);
        opacity: 0;
        transition-timing-function: ease-in-out;
        &.active {
            opacity: 1;
            transform: translate(0);
        }
    }
    label {
        display: inline-block;
        user-select: none;
        img {
            pointer-events: none;
        }
    }

    // footer - 조절
    #root {
        height: 100%;
    }

    .container {
        min-height: 100%;
        & > .box {
            width: 100%;
            padding-bottom: 75px;
        }
    }
    @media(max-width: 510px) {
        body {
            .container {
                & > .box {
                    padding-bottom: 0;
                }
            }
            .footer {
                padding-top: 50px;
                margin-top: 0;
            }
        }
    }
    
`;
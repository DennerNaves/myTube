import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /*Reset*/
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    body {
        font-family: sans-serif;
    }

    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    //Next
    body {
        display: flex;
        flex: 1;
    }

    #_next {
        display: flex;
        flex: 1;  
    }

    //Global
    button,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
    }
`

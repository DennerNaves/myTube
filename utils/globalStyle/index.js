import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*Reset*/

    :root{
        --font-size-big: 20px;
        --font-size-title: 18px;
        --font-size-normal: 15px;
        --font-weight-title: 700;
        --font-weight-normal: 600;
        --font-color: #222222;
        --color-light-grey: #c2c2c2;
        --color-medium-grey: #a1a1a1;
        --color-strong-grey: #757575;
        overflow: hidden;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    body {
        font-family: Arial;
        background-color: ${({theme}) => theme.backgroundBase};
        color: ${({theme}) => theme.textColorBase};
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

export default GlobalStyle;

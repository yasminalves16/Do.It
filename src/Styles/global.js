import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white: #f5f5f5;
        --pink: #FF2253;
        --black: #0c0d0d;
        --orange: #c85311;
    }
    
    body{
        background: var(--pink);
        color: var(--black);

    }

    body, input, button {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

`
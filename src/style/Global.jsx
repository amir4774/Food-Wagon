import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            text-decoration: underline;
        }
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;

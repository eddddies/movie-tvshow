import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration : none;
        color : inherit;

    }

    *{
        box-sizing : border-box;
    }

    body{
        font-sixe : 12px;
        background-color : rgba(20,20,20,1);
        color : white;
    }
`

export default GlobalStyles;
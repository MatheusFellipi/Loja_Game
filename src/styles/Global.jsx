import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background:#f2f3f5;
  }
  a{
    text-decoration:none;
  }
  li{
    list-style-type: none;
  }
  button{
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

`;


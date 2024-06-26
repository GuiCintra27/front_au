"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  * {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    font-family: var(--poppins);
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 62.5%;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  a {
    color: inherit;
  }

  .sweet-toast{
    font-size: 18px;
  }
`;

export default GlobalStyle;

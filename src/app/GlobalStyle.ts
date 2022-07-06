import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap");
  
  * {
    /* equals to 10px but allows for the font-size to scale with the browser's "zoom in/out" feature */
    font-size: 62.5%;
    padding: 0;
    margin: 0;
    font-family: "Sarabun", sans-serif;
    box-sizing: border-box;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  span {
    color: ${({ theme }) => theme.colors.text} 
  }
`;

export default GlobalStyle;

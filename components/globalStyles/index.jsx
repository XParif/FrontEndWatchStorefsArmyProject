import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}
body {
  font-family: ${({ theme }) => theme?.typography} , sans-serif;
}

span{
  display: inline-block;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme?.color?.text};
}

`;
export default GlobalStyle;

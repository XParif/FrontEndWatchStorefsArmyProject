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

input {
  font-family: ${({ theme }) => theme?.typography} , sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme?.color?.text};
}
#nprogress .bar {
  background: #fff !important;
  // height : 15px;
  // border-radius : 4px;
}

#nprogress .peg {
  box-shadow: 0 0 10px #FFF, 0 0 5px #FFF;
}

#nprogress .spinner-icon {
  border-top-color: #FFF;
  border-left-color: #FFF;
}
`;
export default GlobalStyle;

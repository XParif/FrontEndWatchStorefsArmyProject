import styled from "styled-components";
import { justifyAlignCenter } from './../../utils/display.styled';

const LoadingStyle = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  ${justifyAlignCenter}
`;

export default LoadingStyle;

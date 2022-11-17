import styled from "styled-components";
import { justifySpaceBetween } from './../../../utils/display.styled';

const ProductBlockStyle = styled.div`
  ${justifySpaceBetween}
  align-items: flex-start;

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ProductBlockStyle;

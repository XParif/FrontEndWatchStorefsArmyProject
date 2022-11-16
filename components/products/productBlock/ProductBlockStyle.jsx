import styled from "styled-components";

const ProductBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ProductBlockStyle;

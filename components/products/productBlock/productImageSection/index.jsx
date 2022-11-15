import styled from "styled-components";

const ImageStyle = styled.div``;

const ProductImageSection = ({children}) => {
  return (
    <ImageStyle>
      { children }
    </ImageStyle>
  );
};

export default ProductImageSection;

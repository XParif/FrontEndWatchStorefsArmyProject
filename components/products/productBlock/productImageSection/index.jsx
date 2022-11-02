import styled from "styled-components";
import MainView from "./MainView";
import SmallView from "./SmallView";

const ImageStyle = styled.div``;

const ProductImageSection = () => {
  return (
    <ImageStyle>
      <MainView />
      <SmallView />
    </ImageStyle>
  );
};

export default ProductImageSection;

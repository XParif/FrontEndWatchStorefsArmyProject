import SectionHeading from "./../../shared/sectionHeaders";
import Background from "./../../shared/backgrounds";
import Container from "./../../shared/container";
import styled from "styled-components";
import SectionBody from "./SectionBody";


const ProductReviewVideo = () => {
  return (
    <Background bg="white">
      <Container>
        <SectionHeading
          title="Our Product Review in Youtube"
          size="lg"
          weight="semiBold"
        />
        <SectionBody />
      </Container>
    </Background>
  );
};

export default ProductReviewVideo;

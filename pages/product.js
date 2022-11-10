import Background from "./../components/shared/backgrounds/index";
import Container from "./../components/shared/container/index";
import BlockText from "./../components/shared/texts/BlockText";
import Bar from "./../components/shared/texts/Bar";
import ProductBlock from "../components/products/productBlock";
import DetailsSection from "../components/products/detailsSection";
import RelatedWatch from './../components/products/RelatedWatch';

const Product = () => {
  return (
    <Background bg="white">
      <Container>
        <BlockText>Home / Collection</BlockText>
        <Bar width="full" />
        <ProductBlock/>
        <DetailsSection />
        <RelatedWatch />
      </Container>
    </Background>
  );
};

export default Product;

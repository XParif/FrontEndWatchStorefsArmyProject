import ProductBlockStyle from "./ProductBlockStyle";
import ProductImageSection from './productImageSection';
import ProductInformationSection from './productInformationSection/index';

const ProductBlock = () => {
  return (
    <ProductBlockStyle>
      <ProductImageSection />
      <ProductInformationSection />
    </ProductBlockStyle>
  );
};

export default ProductBlock;

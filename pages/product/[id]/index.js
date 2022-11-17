import BlockText from '../../../components/shared/texts/BlockText';
import Bar from '../../../components/shared/texts/Bar';
import ProductBlock from '../../../components/products/productBlock/index';
import RelatedWatch from '../../../components/products/relatedWatch/RelatedWatchStyle';
import Background from '../../../components/shared/backgrounds/index';
import Container from '../../../components/shared/container/index';
import {client} from '../../../apolloClient/index';
import { getSingleProduct } from '../../../graphql';
const Product = ({productInfo , loading}) => {
  
  return (
    <Background bg="white">
      <Container>
        <BlockText>Home / Product </BlockText>
        <Bar width="full" />
        <ProductBlock productInfo = {productInfo} />
        <RelatedWatch />
      </Container>
    </Background>
  );
};
export async function getServerSideProps(context) {
  const {id} = context.params
  const {data , loading , error} = await client
  .query({
    query: getSingleProduct(id),
  })
  return {
    props: {
      productInfo : data.allProduct,
      loading : loading
    }, // will be passed to the page component as props
  }
}
export default Product;

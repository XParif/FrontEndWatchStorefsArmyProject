import Slider from '../components/home/slider/index';
import HotOffer from '../components/home/hotOffer/index';
import SummerSale from '../components/home/summerSale/index';
import FeaturedProducts from '../components/home/featuredProducts/index';
import Upcoming from '../components/home/upcoming/index';
import SpecialFeatures from '../components/home/specialFeatures/index';
import WeeklyProducts from '../components/home/weeklyProducts/index';
import MostPremiumWatch from '../components/home/mostPremiumWatch/index';
import OurHappyCustomer from '../components/home/happyCustomer/index';
import ProductReviewVideo from '../components/home/productReviewVideo/index';
import { client } from '../apolloClient/index';
import {GetProduct} from '../graphql/index';


const  Home = ({allProducts})=> {

  return (
    <>
      {/* <Slider /> */}
      {/* <HotOffer /> */}
      {/* <SummerSale /> */}
      <FeaturedProducts list = {allProducts} />
      {/* <Upcoming /> */}
      {/* <SpecialFeatures /> */}
      {/* <WeeklyProducts /> */}
      {/* <MostPremiumWatch /> */}
      {/* <OurHappyCustomer /> */}
      {/* <ProductReviewVideo /> */}
    </>
  );
}

export async function getServerSideProps() {
  const {data , error} = await client
  .query({
    query: GetProduct,
  })
  const {allProducts ,meta} = data
  return {
    props: {
      allProducts,
    },
  }
}
export default  Home
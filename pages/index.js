import Slider from '../components/home/slider/index';
import HotOffer from '../components/home/hotOffer/index';
import SummerSale from '../components/home/summerSale/index';
import AllProduct from '../components/home/allProduct/index';
import Upcoming from '../components/home/upcoming/index';
import SpecialFeatures from '../components/home/specialFeatures/index';
import WeeklyProducts from '../components/home/weeklyProducts/index';
import MostPremiumWatch from '../components/home/mostPremiumWatch/index';
import OurHappyCustomer from '../components/home/happyCustomer/index';
import ProductReviewVideo from '../components/home/productReviewVideo/index';

export default function Home() {
  return (
    <>
      <Slider />
      <HotOffer />
      <SummerSale />
      <AllProduct />
      <Upcoming />
      <SpecialFeatures />
      <WeeklyProducts />
      <MostPremiumWatch />
      <OurHappyCustomer />
      <ProductReviewVideo />
    </>
  );
}

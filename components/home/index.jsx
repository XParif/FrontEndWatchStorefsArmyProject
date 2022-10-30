import WeeklyProducts from "./weeklyProducts";
import SummerSale from "./summerSale";
import SpecialFeatures from "./specialFeatures";
import MostPremiumWatch from "./mostPremiumWatch";
import Slider from "./slider";
import HotOffer from "./hotOffer";
import AllProduct from "./allProduct";
import Upcoming from "./upcoming";
import OurHappyCustomer from "./happyCustomer";
import ProductReviewVideo from './productReviewVideo'

const HomgePage = () => {
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
      <OurHappyCustomer/>
      <ProductReviewVideo/>
    </>
  );
};

export default HomgePage;

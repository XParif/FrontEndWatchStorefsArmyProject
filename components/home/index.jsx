import WeeklyProducts from "./weeklyProducts";
import SummerSale from "./summerSale";
import SpecialFeatures from "./specialFeatures";
import MostPremiumWatch from "./mostPremiumWatch";
import Slider from "./slider";
import HotOffer from "./hotOffer";
import AllProduct from "./allProduct";

const HomgePage = () => {
  return (
    <>
      <Slider />
      <HotOffer/>
      {/* <WeeklyProducts /> */}
      <SummerSale />
      <AllProduct/>
      <SpecialFeatures />
      <MostPremiumWatch />
    </>
  );
};

export default HomgePage;

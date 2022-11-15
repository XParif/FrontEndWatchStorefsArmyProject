import PriceStyle from "./price/PriceStyle";

const Price = ({children}) => {
  return (
    <PriceStyle>
      {children}
    </PriceStyle>
  );
};

export default Price;

import PriceStyle from "./price/PriceStyle";
import InlineText from "./../../../shared/texts/InlineText";

const Price = () => {
  return (
    <PriceStyle>
      <InlineText size="md" color="primary" weight="semiBold">
        $60.00
      </InlineText>
      <InlineText size="md" cross>
        $60.00
      </InlineText>
    </PriceStyle>
  );
};

export default Price;

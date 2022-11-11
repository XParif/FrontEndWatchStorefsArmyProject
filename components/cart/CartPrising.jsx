import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";
import Button from "./../shared/buttons";
import {
  CartPrisingContainer,
  CheckOutBtn,
  PrisingTitle,
  TagName,
} from "./CartComponents";

const CartPrising = ({ subTotal, vatRate, checkout, setCheckout }) => {
  const vat = (subTotal / 100) * vatRate;
  const grandTotal = subTotal + vat;

  return (
    <CartPrisingContainer>
      <PrisingTitle>Pricing Summary</PrisingTitle>
      <Bar width="full" height="sm" />

      <BlockText size="md">
        <TagName>Sub Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{subTotal}</TagName>
      </BlockText>

      <BlockText size="md">
        <TagName>Vat({vatRate}%)</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{vat}</TagName>
      </BlockText>
      <BlockText size="md" weight="semiBold">
        <TagName>Grand Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{grandTotal}</TagName>
      </BlockText>
      <CheckOutBtn>
        {checkout ? (
          <Button bg="primary" fontSize="md" onClick={() => setCheckout(true)}>
            Confirm My Order
          </Button>
        ) : grandTotal > 0 ? (
          <Button bg="primary" fontSize="md" onClick={() => setCheckout(true)}>
            Checkout
          </Button>
        ) : (
          ""
        )}
      </CheckOutBtn>
    </CartPrisingContainer>
  );
};
export default CartPrising;

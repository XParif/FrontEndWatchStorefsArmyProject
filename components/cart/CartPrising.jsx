import styled from "styled-components";
import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";
import Button from "./../shared/buttons";

const CartPrisingContainer = styled.div`
  flex: 1;
  padding: 2%;
  background-color: #f6f6f6;
  text-align: center;
`;

const PrisingTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;
const TagContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const TagName = styled.span`
  margin: 3px 0;
`;

const CheckOutBtn = styled.div`
  margin-top: 20px;
`;

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
        ) : (
          <Button bg="primary" fontSize="md" onClick={() => setCheckout(true)}>
            Checkout
          </Button>
        )}
      </CheckOutBtn>
    </CartPrisingContainer>
  );
};
export default CartPrising;

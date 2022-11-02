import Link from "next/link";
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

const CartPrising = (props) => {
  const subTotal = 250; // get from props
  const vatRate = 3; // get from props
  const vat = (subTotal / 100) * vatRate;
  const grandTotal = subTotal + vat;

  return (
    <CartPrisingContainer>
      <PrisingTitle>Prising Summery</PrisingTitle>
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
      <BlockText size="md" weight="bold">
        <TagName>Grand Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{grandTotal}</TagName>
      </BlockText>
      <CheckOutBtn>
        <Link href="/checkout">
          <Button bg="primary" fontSize="md">
            Checkout
          </Button>
        </Link>
      </CheckOutBtn>
    </CartPrisingContainer>
  );
};
export default CartPrising;

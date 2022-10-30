import styled from "styled-components"; // Getting Hydtration Error for this File
import Bar from "../shared/texts/Bar";

const CartPrisingContainer = styled.div`
  flex: 1;
  padding: 2%;
  background-color: #f6f6f6;
`;

const PrisingTitle = styled.h3`
  /* text-align: center; */
`;

const PriceTable = styled.table`
  margin: 0 auto;
`;
const PriceTableTh = styled.th``;
const PriceTableTr = styled.tr``;
const PriceTableTd = styled.td``;

const CartPrising = () => {
  return (
    <CartPrisingContainer>
      <PrisingTitle>Prising Summery</PrisingTitle>
      <Bar />
      {/* 
      <PriceTable>
        <PriceTableTr>
          <PriceTableTd>Sub Total</PriceTableTd>
          <PriceTableTd>:</PriceTableTd>
          <PriceTableTd>700</PriceTableTd>
        </PriceTableTr>
        <PriceTableTr>
          <PriceTableTd>Vat(5%)</PriceTableTd>
          <PriceTableTd>:</PriceTableTd>
          <PriceTableTd>35</PriceTableTd>
        </PriceTableTr>
        <PriceTableTr>
          <PriceTableTd>Grand Total</PriceTableTd>
          <PriceTableTd>:</PriceTableTd>
          <PriceTableTd>735</PriceTableTd>
        </PriceTableTr>
      </PriceTable> */}
    </CartPrisingContainer>
  );
};
export default CartPrising;

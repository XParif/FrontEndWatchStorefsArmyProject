import styled from "styled-components";
import Bar from "../shared/texts/Bar";
import CartItem from "./CartItem";

const CartInfoWrap = styled.div`
  flex: 3;
  padding: 2%;
  background-color: white;
`;

const Hader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CartTitle = styled.h3``;
const CartItemCount = styled.h3``;

const ItemTitle = styled.div`
  color: #7678ed;
  font-weight: bold;
  display: flex;
`;
const ProductDetailTitle = styled.span`
  margin: 10px 70px;
`;
const ProductQuantityTitle = styled.span`
  margin: 10px;
  margin-left: 50px;
`;
const ProductPriceTitle = styled.span`
  margin: 10px 80px;
`;
const ProductTotalTitle = styled.span`
  margin: 10px;
`;

const CartItemList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartInfo = () => {
  const count = 1;
  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Shopping Cart - Watch Store</CartTitle>
        <CartItemCount>
          {" "}
          {count > 1 ? `${count} Items` : `${count} Item`}{" "}
        </CartItemCount>
      </Hader>
      {/* <HrLine /> */}
      <Bar />
      <ItemTitle>
        <ProductDetailTitle>Product Details</ProductDetailTitle>
        <ProductQuantityTitle>Quantity</ProductQuantityTitle>
        <ProductPriceTitle>Price</ProductPriceTitle>
        <ProductTotalTitle>Total</ProductTotalTitle>
      </ItemTitle>

      <CartItemList>
        <CartItem />
      </CartItemList>
    </CartInfoWrap>
  );
};

export default CartInfo;

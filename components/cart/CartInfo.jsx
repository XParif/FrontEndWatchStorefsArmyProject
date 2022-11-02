import styled from "styled-components";
import Button from "../shared/buttons";
import Bar from "../shared/texts/Bar";
import CartItem from "./CartItem";

const CartInfoWrap = styled.div`
  flex: 3;
  padding: 2%;
  background-color: ${({ theme }) => theme?.color?.white};
`;

const Hader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CartTitle = styled.h3``;
const CartItemCount = styled.h3``;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme?.color?.primary};
  font-weight: bold;
  display: flex;
`;
const ProductDetailTitle = styled.span`
  margin: 10px 70px;
`;
const ProductQuantityTitle = styled.span`
  margin: 10px;
  margin-left: 70px;
`;
const ProductPriceTitle = styled.span`
  margin: 10px 80px;
`;
const ProductTotalTitle = styled.span`
  margin: 10px;
`;

const CartItemList = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;
const ClearAll = styled.div`
  text-align: center;
`;
const CartInfo = () => {
  const data = [{ ann: "1" }, { sadjk: 3 }];

  const count = data.length;
  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Shopping Cart - Watch Store</CartTitle>
        <CartItemCount>
          {" "}
          {count > 1 ? `${count} Items` : `${count} Item`}{" "}
        </CartItemCount>
      </Hader>

      <Bar width="full" height="sm" />

      <ItemTitle>
        <ProductDetailTitle>Product Details</ProductDetailTitle>
        <ProductQuantityTitle>Quantity</ProductQuantityTitle>
        <ProductPriceTitle>Price</ProductPriceTitle>
        <ProductTotalTitle>Total</ProductTotalTitle>
      </ItemTitle>

      <CartItemList>
        <CartItem />
        <CartItem />
        <CartItem />
      </CartItemList>
      <ClearAll>
        <Button bg="red" fontSize="lg">
          Clear All
        </Button>
      </ClearAll>
    </CartInfoWrap>
  );
};

export default CartInfo;

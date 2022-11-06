import { FaTrash } from "react-icons/fa";
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
const CartTitle = styled.h3`
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;
const CartItemCount = styled.h3`
  color: ${({ theme }) => theme?.color?.text};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme?.color?.primary};
  font-weight: bold;
  /* display: flex; */
  display: grid;
  grid-template-columns: 45% 25% 12% 13% 5%;
  text-align: center;
`;
const ProductDetailTitle = styled.span`
  /* margin: 10px 80px; */
`;
const ProductQuantityTitle = styled.span`
  /* margin: 10px;
  margin-left: 95px; */
`;
const ProductPriceTitle = styled.span`
  /* margin: 10px 60px;
  margin-right: 0px; */
`;
const ProductTotalTitle = styled.span`
  /* margin: 10px 45px; */
`;

const CartItemList = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;
const ClearAllContainer = styled.div`
  text-align: center;
`;
const ClearAllButton = styled.button`
  border: 2px red solid;
  font-size: 2rem;
  color: red;
  border-radius: 10px;
  padding: 10px;
  opacity: calc() 0.5;
  transition: 0.5s;
  :hover {
    color: white;
    background-color: red;
  }
`;

const CartInfo = ({ data }) => {
  const count = data.length ? data.length : 0;

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
        <ProductPriceTitle>Rate</ProductPriceTitle>
        <ProductTotalTitle>Total</ProductTotalTitle>
      </ItemTitle>

      <CartItemList>
        {data.map((item) => (
          // console.log(item.name);
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            unitePrice={item.unitePrice}
          />
        ))}
      </CartItemList>
      <ClearAllContainer>
        <Button fontSize={"md"}>
          Clear All <FaTrash />
        </Button>
      </ClearAllContainer>
    </CartInfoWrap>
  );
};

export default CartInfo;

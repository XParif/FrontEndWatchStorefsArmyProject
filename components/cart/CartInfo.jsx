import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Button from "../shared/buttons";
import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";

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

const HrLine = styled.hr`
  color: #7678ed;
`;
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
const ProdInfo = styled.div`
  display: flex;
`;
const ProdImage = styled.div`
  height: 80px;
  width: 80px;
  background-color: green;
`;
const ProdDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const ProdQty = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
        <ProdInfo>
          <ProdImage>
            <Image />
          </ProdImage>
          <ProdDetails>
            <span> Name : AppleWatch</span>
            <span> Brand : Apple</span>
            <span> Category : Smart</span>
            <span> Sub Category : Smart</span>
          </ProdDetails>
        </ProdInfo>

        <ProdQty>
          <Button bg="primary" shape="square">
            <FaMinus />
          </Button>
          <BlockText size="lg">2</BlockText>
          <Button bg="primary" shape="square">
            <FaPlus />
          </Button>
        </ProdQty>
        <BlockText size="lg">$700</BlockText>
        <BlockText size="lg">$1400</BlockText>
      </CartItemList>
    </CartInfoWrap>
  );
};

export default CartInfo;

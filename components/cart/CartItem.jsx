import styled from "styled-components";

const CartItemContainer = styled.div``;

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
  /* align-items: center; */
  gap: 0.5rem;
`;
const AmountText = styled.h2``;

const CartItem = () => {
  return (
    <CartItemContainer>
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

      <AmountText size="lg">$700</AmountText>

      <AmountText size="lg">$1400</AmountText>
    </CartItemContainer>
  );
};
export default CartItem;

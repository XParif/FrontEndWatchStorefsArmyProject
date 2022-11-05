import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Button from "./../shared/buttons";
import BlockText from "./../shared/texts/BlockText";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px;
  /* border: 1px black solid; */
`;

const ProdInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ProdImage = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
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
const AmountText = styled.h3``;

const DeletItem = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  /* color: ${({ theme }) => theme?.color?.text}; */
  color: ${({ theme }) => theme?.color?.red};
  font-size: 25px;
  transition: 0.5s;
  /* font-weight: bold; */
  cursor: pointer;
  /* &:hover {
    color: ${({ theme }) => theme?.color?.red};
  } */
`;

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

      <BlockText size="md">$700</BlockText>

      <BlockText size="md">$1400</BlockText>
      <DeletItem>x{/* <FaTrashAlt /> */}</DeletItem>
    </CartItemContainer>
  );
};
export default CartItem;

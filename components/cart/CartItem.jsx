import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Button from "./../shared/buttons";
import BlockText from "./../shared/texts/BlockText";

const CartItemContainer = styled.div`
  /* display: flex;
  align-items: center; */
  justify-content: space-between;
  padding: 3px 5px;
  display: grid;
  grid-template-columns: 45% 25% 12% 13% 5%;
  align-items: center;
  text-align: center;
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
  width: 200px;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 5px;
`;

const ProdQty = styled.div`
  margin: 0 auto;
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
  opacity: 0.5;
  /* font-weight: bold; */
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const CartItem = ({ id, name, brand, unitePrice }) => {
  const [quantity, setQuantity] = useState(1);

  const [Total, setTotal] = useState(quantity * unitePrice);

  const qtyDec = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };

  const qtyInc = () => {
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    setTotal(quantity * unitePrice);
  }, [quantity]);

  return (
    <CartItemContainer>
      <ProdInfo>
        <ProdImage>
          <Image />
        </ProdImage>
        <ProdDetails>
          <span> Name : {name}</span>
          <span> Brand : {brand}</span>
          {/* <span> Category : Smart</span>
          <span> Sub Category : Smart</span> */}
        </ProdDetails>
      </ProdInfo>

      <ProdQty>
        <Button bg="primary" shape="square" onClick={qtyDec}>
          <FaMinus />
        </Button>
        <BlockText size="lg">{quantity}</BlockText>
        <Button bg="primary" shape="square" onClick={qtyInc}>
          <FaPlus />
        </Button>
      </ProdQty>

      <BlockText size="md">${unitePrice}</BlockText>

      <BlockText size="md">${Total}</BlockText>
      <DeletItem onClick={() => console.log(id)}>
        x{/* <FaTrashAlt /> */}
      </DeletItem>
    </CartItemContainer>
  );
};
export default CartItem;

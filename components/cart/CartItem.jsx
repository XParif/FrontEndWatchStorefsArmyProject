import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./../shared/buttons";
import BlockText from "./../shared/texts/BlockText";
import {
  CartItemContainer,
  DeletItem,
  ProdDetails,
  ProdImage,
  ProdInfo,
  ProdQty,
} from "./CartComponents";

const CartItem = ({
  id,
  name,
  brand,
  unitePrice,
  quantityHandler,
  removeItemHandler,
}) => {
  const [quantity, setQuantity] = useState(1);

  const [Total, setTotal] = useState(quantity * unitePrice);

  const qtyDec = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };

  const qtyInc = () => {
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    quantityHandler(id, quantity);
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
      <DeletItem onClick={() => removeItemHandler(id)}>
        x{/* <FaTrashAlt /> */}
      </DeletItem>
    </CartItemContainer>
  );
};
export default CartItem;

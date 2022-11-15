import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
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
import { RedButton } from "./../shared/buttons";

const CartItem = ({
  productBrand,
  product_quantity,
  productImage,
  productName,
  color,
  quantityHandler,
  removeItemHandler,
  index,
  price,
  isActionButton
}) => {
  if(isActionButton){
    return(
      <CartItemContainer>
      <ProdInfo>
        <ProdImage style={{display : "flex" , justifyContent: "center" , alignItems : "center"}}>
          <img style={{width : 60, height : 60 , boxSizing: "border-box"}} src={productImage} alt={productName} />
        </ProdImage>
        <ProdDetails>
          <span> Name : {productName.slice(0,20)}</span>
          <span> Brand : {productBrand}</span>
          {/* {/* <span> Category : Smart</span> */}
          <span> Color : {color}</span> 
        </ProdDetails>
      </ProdInfo>

      <ProdQty>

        <BlockText size="lg">{product_quantity}</BlockText>
     
      </ProdQty>

      <BlockText size="md">${price}</BlockText>

      <BlockText size="md">${product_quantity * price}</BlockText>
    </CartItemContainer>
    )
  }
  return (
    <CartItemContainer>
      <ProdInfo>
        <ProdImage style={{display : "flex" , justifyContent: "center" , alignItems : "center"}}>
          <img style={{width : 60, height : 60 , boxSizing: "border-box"}} src={productImage} alt={productName} />
        </ProdImage>
        <ProdDetails>
          <span> Name : {productName.slice(0,20)}</span>
          <span> Brand : {productBrand}</span>
          {/* {/* <span> Category : Smart</span> */}
          <span> Color : {color}</span> 
        </ProdDetails>
      </ProdInfo>

      <ProdQty>
        <Button bg="primary" shape="square" onClick={()=>quantityHandler("-" , index)}>
          <FaMinus />
        </Button>
        <BlockText size="lg">{product_quantity}</BlockText>
        <Button bg="primary" shape="square" onClick={()=>quantityHandler("+" , index)} >
          <FaPlus />
        </Button>
      </ProdQty>

      <BlockText size="md">${price}</BlockText>

      <BlockText size="md">${product_quantity * price}</BlockText>
      <RedButton onClick={() => removeItemHandler(index)}>
        <FaTrashAlt />
      </RedButton>
    </CartItemContainer>
  );
};
export default CartItem;

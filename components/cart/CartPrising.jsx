import { useReactiveVar } from "@apollo/client";
import { isLogin, message, modalController } from "../../apolloClient";
import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";
import Button from "./../shared/buttons";

import {
  CartPrisingContainer,
  CheckOutBtn,
  PrisingTitle,
  TagName,
} from "./CartComponents";

const CartPrising = ({ shippingCost, subTotal, vatRate, setCheckout , isCartValied}) => {
  const logInChecked = useReactiveVar(isLogin)
  const vat = (subTotal / 100) * vatRate;
  let grandTotal = subTotal + vat;
  if(shippingCost){
    grandTotal+=shippingCost
  }

  const emptyCartChecked = () =>{
      if(subTotal === 0){
        message({type : "alert" , body : "You Cart Is Empty ,Plz Add Some Item in this Cart"})
        return
      }
      setCheckout(true)
  }
  const ChekOutButton = (
    <CheckOutBtn>
      {logInChecked ? (
        <Button onClick={emptyCartChecked} bg="primary" fontSize="md">
          CheckOut
        </Button>
      ) : grandTotal > 0 ? (
        <Button  bg="primary" fontSize="md" onClick={() => {modalController(true) ; message({type : "alert" , body : "Plz LogIn First"}) }}>
          CheckOut
        </Button>
      ) : (
        ""
      )}
    </CheckOutBtn>
  )
  return (
    <CartPrisingContainer>
      <PrisingTitle>Pricing Summary</PrisingTitle>
      <Bar width="full" height="sm" />

      <BlockText size="md">
        <TagName>Sub Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{subTotal}</TagName>
      </BlockText>

      <BlockText size="md">
        <TagName>Vat({vatRate}%)</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{vat}</TagName>
      </BlockText>
      {shippingCost && (<BlockText size="md">
        <TagName>Shipping Cost</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{shippingCost}</TagName>
      </BlockText>)}
      
      <BlockText size="md" weight="semiBold">
        <TagName>Grand Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{grandTotal}</TagName>
      </BlockText>
      {
        isCartValied && ChekOutButton 
      }
      
    </CartPrisingContainer>
  );
};
export default CartPrising;

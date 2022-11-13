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

const CartPrising = ({ subTotal, vatRate, setCheckout }) => {
  const logInChecked = useReactiveVar(isLogin)
  const forLogInModal = useReactiveVar(modalController)
  const vat = (subTotal / 100) * vatRate;
  const grandTotal = subTotal + vat;

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
      <BlockText size="md" weight="semiBold">
        <TagName>Grand Total</TagName> <TagName>:</TagName>
        {" $"}
        <TagName>{grandTotal}</TagName>
      </BlockText>
      <CheckOutBtn>
        {logInChecked ? (
          <Button onClick={()=> setCheckout(true)} bg="primary" fontSize="md">
            CheckOut
          </Button>
        ) : grandTotal > 0 ? (
          <Button bg="primary" fontSize="md" onClick={() => {modalController(true) ; message({type : "alert" , body : "Plz LogIn First"}) }}>
            CheckOut
          </Button>
        ) : (
          ""
        )}
      </CheckOutBtn>
    </CartPrisingContainer>
  );
};
export default CartPrising;

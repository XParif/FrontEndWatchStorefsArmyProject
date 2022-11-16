import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../shared/buttons";
import {FaArrowLeft} from 'react-icons/fa'
import {
  BackButtonContainer,
  CartContainer,
  InfoContainer,
} from "./CartComponents";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";
import CheckoutForm from "./checkout";
import { cartItemsVar, extraCost, pocketKhali } from "../../apolloClient/index";
import { useReactiveVar, useQuery } from "@apollo/client";
import { getExtraCost } from "../../graphql/index";

const CartBody = () => {
  const { data } = useQuery(getExtraCost);
  const forextraCost = data?.extraCost;
  extraCost({
    vat: forextraCost ? forextraCost?.vat : 5,
    shipingCost: forextraCost ? forextraCost?.shipingCost : 20,
  });

  const checkout = useReactiveVar(pocketKhali);
  const cartData = useReactiveVar(cartItemsVar);
  const { vat, shipingCost } = useReactiveVar(extraCost);

  const [userID , setUseID ] = useState("") ;
  useEffect(()=>{
    if(typeof window !== undefined){
      setUseID(Number(localStorage.getItem("logedInUserId")))
    }
  },[checkout])

  const subTotal = cartData.reduce((acc, cu) => {
    acc += cu.product_quantity * cu.price;
    return acc;
  }, 0);

  const quantityHandler = (action, index) => {
    if (action == "+") {
      cartData[index].product_quantity = cartData[index].product_quantity + 1;
    } else if (action == "-" && cartData[index].product_quantity > 1) {
      cartData[index].product_quantity = cartData[index].product_quantity - 1;
    }
    cartItemsVar([...cartData]);
  };

  const removeItemHandler = (index) => {
    cartData.splice(index, 1);
    cartItemsVar([...cartData]);
  };
  if (checkout) {
    return (
      <>
        {/* <button onClick={() => pocketKhali(false)} >Back To Cart</button> */}
        <CheckoutForm userID={userID} pocketKhali={pocketKhali}>
          <CartPrising
            subTotal={subTotal}
            vatRate={vat}
            setCheckout={pocketKhali}
            shippingCost={shipingCost}
          />
        </CheckoutForm>
      </>
    );
  }

  return (
    <>
      <CartContainer>
        <BackButtonContainer>
          <Link href="/">
            <Button bg="primary">
              <FaArrowLeft/>
              Back To Store
            </Button>
          </Link>
        </BackButtonContainer>
        <InfoContainer>
          <CartInfo
            cartData={cartData}
            quantityHandler={quantityHandler}
            removeItemHandler={removeItemHandler}
            cartItemsVar={cartItemsVar}
          />
          <CartPrising
            subTotal={subTotal}
            vatRate={vat}
            setCheckout={pocketKhali}
            isCartValied={true}
          />
        </InfoContainer>
      </CartContainer>
    </>
  );
};

export default CartBody;

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../shared/buttons";
import {
  BackButtonContainer,
  CartContainer,
  InfoContainer,
} from "./CartComponents";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";
import CheckoutForm from "./checkout";

const CartBody = () => {
  const [checkout, setCheckout] = useState(false);

  const data = [
    {
      id: 1,
      name: "AppleWatch",
      brand: "Apple",
      unitePrice: 100,
      initQuantity: 1,
    },
    {
      id: 2,
      name: "Mi Band 3",
      brand: "xiaomi",
      unitePrice: 80,
      initQuantity: 1,
    },
    {
      id: 3,
      name: "Oraimo Band 5",
      brand: "orima",
      unitePrice: 50,
      initQuantity: 1,
    },
  ];

  const [cartData, setCartData] = useState(data);
  const [subTotal, setSubTotal] = useState(0);

  const quantityHandler = (id, quantity) => {
    const objIndex = cartData.findIndex((obj) => obj.id == id);
    cartData[objIndex].initQuantity = quantity;
    let Total = 0;
    cartData.map((item) => (Total += item.initQuantity * item.unitePrice));
    setSubTotal(Total);
  };

  const removeItemHandler = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    let Total = 0;
    cartData.map((item) => (Total += item.initQuantity * item.unitePrice));
    setSubTotal(Total);
  }, [cartData]);

  return (
    <>
      <CartContainer>
        <InfoContainer>
          {checkout ? (
            <CheckoutForm />
          ) : (
            <CartInfo
              cartData={cartData}
              setCartData={setCartData}
              quantityHandler={quantityHandler}
              removeItemHandler={removeItemHandler}
            />
          )}

          <CartPrising
            subTotal={subTotal}
            vatRate={5}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        </InfoContainer>
      </CartContainer>
      <BackButtonContainer>
        <Link href="/">
          <Button bg="primary" fontSize={"md"}>
            Back To Store
          </Button>
        </Link>
      </BackButtonContainer>
    </>
  );
};

export default CartBody;

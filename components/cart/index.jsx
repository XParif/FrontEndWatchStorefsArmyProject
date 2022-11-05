import Link from "next/link";
import Button from "../shared/buttons";
// import {
//   BackButtonContainer,
//   CartContainer,
//   InfoContainer,
// } from "./CartComponents";
import { useState } from "react";
import styled from "styled-components";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";
import CheckoutForm from "./checkout";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  width: 90%;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
  min-height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
  margin: 0 auto;
`;

const BackButtonContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const CartBody = () => {
  const [checkout, setCheckout] = useState(false);

  const data = [
    {
      id: 1,
      name: "AppleWatch",
      brand: "Apple",
      unitePrice: 100,
    },
    {
      id: 2,
      name: "Mi Band 3",
      brand: "xiaomi",
      unitePrice: 80,
    },
    {
      id: 3,
      name: "Oraimo Band 5",
      brand: "orima",
      unitePrice: 50,
    },
  ];

  let subTotal = 0;

  data.map((item) => (subTotal += item.initQuantity * item.unitePrice));
  // console.log(subTotal);

  return (
    <>
      <CartContainer>
        <InfoContainer>
          {checkout ? <CheckoutForm /> : <CartInfo data={data} />}

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

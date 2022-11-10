import Link from "next/link";
import styled from "styled-components";
import Button from "../components/shared/buttons";
import CartInfo from "../components/cart/CartInfo";
import CartPrising from "../components/cart/CartPrising";
import CheckoutForm from './../components/cart/checkout/';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5% auto;
  width: 90%;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
  min-height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* text-align: center; */
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

const Checkout = () => {
  return (
    <>
      <CartContainer>
        <InfoContainer>
          <CheckoutForm/>
          <CartPrising />
        </InfoContainer>
      </CartContainer>
      <BackButtonContainer>
        <Link href="/">
          <Button bg="primary" fontSize={"lg"}>
            Back To Collections
          </Button>
        </Link>
      </BackButtonContainer>
    </>
  );
};

export default Checkout;

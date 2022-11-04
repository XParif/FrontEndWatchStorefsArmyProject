import Link from "next/link";
import styled from "styled-components";
import Button from "../shared/buttons";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";

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

const CartBody = () => {
  const data = [
    {
      id: 1,
      name: "AppleWatch",
      brand: "Apple",
      quantity: 1,
      unitePrice: 100,
      total: 100,
    },
    {
      id: 2,
      name: "Mi Band 3",
      brand: "xaomi",
      quantity: 1,
      unitePrice: 80,
      total: 80,
    },
  ];

  let subTotal = 0;

  subTotal += data.map((item) => parseInt(item.quantity * item.unitePrice));
  console.log(subTotal);

  return (
    <>
      <CartContainer>
        <InfoContainer>
          <CartInfo data={data} />
          <CartPrising subTotal={subTotal} vatRate={3} />
        </InfoContainer>
      </CartContainer>
      <BackButtonContainer>
        <Link href="/">
          <Button bg="primary" fontSize={"md"}>
            Back To Collections
          </Button>
        </Link>
      </BackButtonContainer>
    </>
  );
};

export default CartBody;

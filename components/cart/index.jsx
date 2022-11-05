import Link from "next/link";
import Button from "../shared/buttons";
import {
  BackButtonContainer,
  CartContainer,
  InfoContainer,
} from "./CartComponents";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";

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
      brand: "xiaomi",
      quantity: 1,
      unitePrice: 80,
      total: 80,
    },
    {
      id: 3,
      name: "Oraimo Band 5",
      brand: "orima",
      quantity: 2,
      unitePrice: 50,
      total: 100,
    },
  ];

  let subTotal = 0;

  data.map((item) => (subTotal += item.quantity * item.unitePrice));
  console.log(subTotal);

  return (
    <>
      <CartContainer>
        <InfoContainer>
          <CartInfo data={data} />
          <CartPrising subTotal={subTotal} vatRate={5} />
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

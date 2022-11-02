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
  return (
    <>
      <CartContainer>
        <InfoContainer>
          <CartInfo />
          <CartPrising />
        </InfoContainer>
      </CartContainer>
      <BackButtonContainer>
        <Button bg="primary" fontSize={"lg"}>
          Back To Store
        </Button>
      </BackButtonContainer>
    </>
  );
};

export default CartBody;

import styled from "styled-components";
import CartInfo from "./CartInfo";
import CartPrising from "./CartPrising";
const CartContainer = styled.div`
  display: flex;
  margin: 0.5% auto;
  width: 80%;
  background-color: #e9eaff;
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

const CartBody = () => {
  return (
    <CartContainer>
      <InfoContainer>
        <CartInfo />
        <CartPrising />
      </InfoContainer>
    </CartContainer>
  );
};

export default CartBody;

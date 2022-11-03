import styled from "styled-components";
import Bar from "../../shared/texts/Bar";
import Form from "./forms";

const CartInfoWrap = styled.div`
  flex: 3;
  padding: 2%;
  background-color: ${({ theme }) => theme?.color?.white};
`;

const Hader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CartTitle = styled.h3``;

const CheckoutForm = () => {
  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Shopping Cart - Watch Store</CartTitle>
      </Hader>
      <Bar width="full" height="sm" />
      <Form />
    </CartInfoWrap>
  );
};

export default CheckoutForm;

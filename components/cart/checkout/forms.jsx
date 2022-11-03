import styled from "styled-components";
import BlockText from "./../../shared/texts/BlockText";

const FormStyle = styled.form``;

const Field = styled.div`
  width: 100%;

  & > p {
    margin: 0 0 10px;
  }

  & > input {
    outline: none;
    /* display: block; */
    background: ${({ theme }) => theme?.color?.secondary};
    width: 100%;
    border: 0;
    border-radius: 4px;
    color: ${({ theme }) => theme?.color?.text};
    /* box-sizing: border-box; */
    padding: 12px 20px;
    font-family: inherit;
    font-size: inherit;
    font-weight: $semibold;
    line-height: inherit;
    transition: 0.3s ease;
  }

  & > input::placeholder {
    color: ${({ theme }) => theme?.color?.primary};
  }
`;

const Input = ({ title, type, placeholder }) => {
  return (
    <Field>
      <BlockText size="md">{title}</BlockText>
      <input type={type} placeholder={placeholder} />
    </Field>
  );
};

const MultipleColumn = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const SingleColumn = styled.div`
  margin: 1rem;
`;

const CheckBox = styled.div`
  input {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: none;
    border: 0;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme?.color?.primary};
    appearance: none;
    padding: 0;
    margin: .5rem;
    transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &:checked {
      box-shadow: inset 0 0 0 6px ${({ theme }) => theme?.color?.primary};
    }
  }
`;

const Form = () => {
  return (
    <FormStyle id="checkout-form">
      <MultipleColumn>
        <Input title="First Name" type="text" placeholder="John" />
        <Input title="Last Name" type="text" placeholder="Smith" />
      </MultipleColumn>
      <SingleColumn>
        <Input
          title="Street Address"
          type="text"
          placeholder="Madaripur Sadar, Dhaka"
        />
      </SingleColumn>
      <SingleColumn>
        <Input
          title="Apartment/Suite"
          type="text"
          placeholder="E-3/7, Shahjalal road"
        />
      </SingleColumn>
      <SingleColumn>
        <Input title="City" type="text" placeholder="Dhaka" />
      </SingleColumn>
      <MultipleColumn>
        <Input title="State" type="text" placeholder="Dhaka" />
        <Input title="Zip Code" type="text" placeholder="1217" />
      </MultipleColumn>
      <SingleColumn>
        <Input title="Phone" type="number" placeholder="01776655443" />
      </SingleColumn>
      <MultipleColumn>
        <BlockText size="md">Select payment method :</BlockText>
        <CheckBox>
          <input type="radio" id="cod" name="payment" value="cod" />
          <label for="cod">Cash on delivery</label>
          <input type="radio" id="visa" name="payment" value="visa" />
          <label for="visa">Visa</label>
          <input
            type="radio"
            id="mastercard"
            name="payment"
            value="mastercard"
          />
          <label for="mastercard">MasterCard</label>
        </CheckBox>
      </MultipleColumn>
      <SingleColumn>
        <Input
          title="Card Number"
          type="number"
          placeholder="1234 1234 1234 1234"
        />
      </SingleColumn>
      <MultipleColumn>
        <Input title="Month" type="number" placeholder="12" />
        <Input title="Year" type="number" placeholder="22" />
        <Input title="CVVC" type="number" placeholder="123" />
      </MultipleColumn>
    </FormStyle>
  );
};

export default Form;

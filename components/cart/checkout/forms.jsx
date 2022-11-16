import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as yup from "yup";
import BlockText from "./../../shared/texts/BlockText";

import { useState } from "react";
import { useForm } from "react-hook-form";

const FormStyle = styled.form``;

const Field = styled.div`
  width: 600px;

  & > p {
    margin: 0 0 10px;
  }

  & > input {
    outline: none;
    /* display: block; */
    background: ${({ theme }) => theme?.color?.secondary};
    width: 40%;
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

const ErrorMessageStyle = styled.div``;

const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageStyle>
      <BlockText>{children}</BlockText>
    </ErrorMessageStyle>
  );
};

const Input = ({
  title,
  type,
  placeholder,
  register,
  keyValue,
  error,
  errorMessage,
}) => {
  return (
    <Field>
      <BlockText size="md">{title}</BlockText>
      <input type={type} placeholder={placeholder} {...register(keyValue)} />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Field>
  );
};

const MultipleColumn = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

const SingleColumn = styled.div`
  margin: 1rem;
  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
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
    margin: 0.5rem;
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
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    streetAddress: yup.string().required(),
    apartment: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().positive().integer().max(9999).required(),
    phoneNumber: yup
      .number()
      .positive()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .required(),
    cardNumber: yup
      .number()
      .positive()
      .integer()
      .min(1000000000000000)
      .max(9999999999999999),
    month: yup.number().positive().integer().min(1).max(12),
    year: yup.number().positive().integer().min(22).max(32),
    cvv: yup.number().positive().integer().min(100).max(999),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = (event) => {
    if (event.target.id === "cod") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormStyle id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <MultipleColumn>
        <Input
          title="First Name"
          type="text"
          placeholder="John"
          register={register}
          keyValue="firstName"
          error={errors.firstName}
          errorMessage="First Name is required !"
        />
        <Input
          title="Last Name"
          type="text"
          placeholder="Smith"
          register={register}
          keyValue="lastName"
          error={errors.lastName}
          errorMessage="Last Name is required !"
        />
      </MultipleColumn>
      <SingleColumn>
        <Input
          title="Street Address"
          type="text"
          placeholder="Madaripur Sadar, Dhaka"
          register={register}
          keyValue="streetAddress"
          error={errors.streetAddress}
          errorMessage="Street Address is required !"
        />
      </SingleColumn>
      <SingleColumn>
        <Input
          title="Apartment/Suite"
          type="text"
          placeholder="E-3/7, Shahjalal road"
          register={register}
          keyValue="apartment"
          error={errors.apartment}
          errorMessage="Apartment is required !"
        />
      </SingleColumn>
      <SingleColumn>
        <Input
          title="City"
          type="text"
          placeholder="Dhaka"
          register={register}
          keyValue="city"
          error={errors.city}
          errorMessage="City is required !"
        />
      </SingleColumn>
      <MultipleColumn>
        <Input
          title="State"
          type="text"
          placeholder="Dhaka"
          register={register}
          keyValue="state"
          error={errors.state}
          errorMessage="State is required !"
        />
        <Input
          title="Zip Code"
          type="text"
          placeholder="1217"
          register={register}
          keyValue="zipCode"
          error={errors.zipCode}
          errorMessage="Zip is required and must be 4 digit number !"
        />
      </MultipleColumn>
      <SingleColumn>
        <Input
          title="Phone"
          type="number"
          placeholder="01776655443"
          register={register}
          keyValue="phoneNumber"
          error={errors.phoneNumber}
          errorMessage="Phone Number is required and must be 11 digit number !"
        />
      </SingleColumn>
      <MultipleColumn>
        <BlockText size="md">Select payment method :</BlockText>
        <CheckBox onChange={handleCheck}>
          <input
            type="radio"
            id="cod"
            name="payment"
            value="cod"
            defaultChecked
          />
          <label htmlFor="cod">Cash on delivery</label>
          <input type="radio" id="visa" name="payment" value="visa" />
          <label htmlFor="visa">Visa</label>
          <input
            type="radio"
            id="mastercard"
            name="payment"
            value="mastercard"
          />
          <label htmlFor="mastercard">MasterCard</label>
        </CheckBox>
      </MultipleColumn>
      {!isChecked && (
        <>
          <SingleColumn>
            <Input
              title="Card Number"
              type="number"
              placeholder="1234 1234 1234 1234"
              register={register}
              keyValue="cardNumber"
            />
          </SingleColumn>
          <MultipleColumn>
            <Input
              title="Month"
              type="number"
              placeholder="12"
              register={register}
              keyValue="month"
            />
            <Input
              title="Year"
              type="number"
              placeholder="22"
              register={register}
              keyValue="year"
            />
            <Input
              title="CVV"
              type="number"
              placeholder="123"
              register={register}
              keyValue="cvv"
            />
          </MultipleColumn>
        </>
      )}
    </FormStyle>
  );
};

export default Form;

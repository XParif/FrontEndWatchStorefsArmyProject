import { useState } from "react";
import styled from "styled-components";
import { InputField, InputForm, InputLabel } from "./common";

const RegisterFormContainer = styled.div`
  width: 900px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  margin: 5px;
`;

const RegisterForm = () => {
  const [formInput, setFormInput] = useState({});
  const regHandler = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  const handleChange = (e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <RegisterFormContainer>
      <InputForm onSubmit={regHandler}>
        <SectionWrapper>
          <Section>
            <InputLabel>
              {"UserName : "}
              <InputField
                type="text"
                id="name"
                name="name"
                placeholder="UserName"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"Email : "}
              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"Password : "}
              <InputField
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </InputLabel>
          </Section>
          <Section>
          <InputLabel>
              {"Phone : "}
              <InputField
                type="number"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                onChange={handleChange}
              ></InputField>
            </InputLabel>
            <InputLabel>
              {"Address : "}
              <InputField
                type="text"
                id="Address"
                name="Address"
                placeholder="Your Address"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"Street : "}
              <InputField
                type="text"
                id="street"
                name="street"
                placeholder="Street"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"City : "}
              <InputField
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
                onChange={handleChange}
              />
            </InputLabel>
            <InputLabel>
              {"Country : "}
              <InputField
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                required
              />
            </InputLabel>
          </Section>
        </SectionWrapper>
        <InputField type="submit" value="Register" />
      </InputForm>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

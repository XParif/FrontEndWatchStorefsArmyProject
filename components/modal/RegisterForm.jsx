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
  return (
    <RegisterFormContainer>
      <InputForm>
        <SectionWrapper>
          <Section>
            <InputLabel>
              {"Name : "}
              <InputField
                type="text"
                id="name"
                placeholder="Your Full Name"
                required
              />
            </InputLabel>
            <InputLabel>
              {"Phone : "}
              <InputField
                type="number"
                id="phone"
                placeholder="Your Phone Number"
              ></InputField>
            </InputLabel>
            <InputLabel>
              {"Email : "}
              <InputField
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </InputLabel>
            <InputLabel>
              {"Password : "}
              <InputField
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </InputLabel>
          </Section>
          <Section>
            <InputLabel>
              {"Address : "}
              <InputField
                type="text"
                id="Address"
                placeholder="Your Address"
                required
              />
            </InputLabel>
            <InputLabel>
              {"Street : "}
              <InputField
                type="text"
                id="street"
                placeholder="Street"
                required
              />
            </InputLabel>
            <InputLabel>
              {"City : "}
              <InputField type="text" id="city" placeholder="City" required />
            </InputLabel>
            <InputLabel>
              {"Country : "}
              <InputField
                type="text"
                id="country"
                placeholder="Country"
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

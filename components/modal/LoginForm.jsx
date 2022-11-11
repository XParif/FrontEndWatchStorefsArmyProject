import { useState } from "react";
import styled from "styled-components";
import { InputField, InputForm, InputLabel } from "./common";

const LoginFormContainer = styled.div`
  width: 500px;
`;

const LoginForm = () => {
  const [formInput, setFormInput] = useState({});

  const loginHandler = (e) => {
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
    <LoginFormContainer>
      <InputForm onSubmit={loginHandler}>
        <InputLabel>
          {"Email : "}
          <InputField
            type="email"
            name="email"
            id="email"
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
        <InputField type="submit" value="Login" />
      </InputForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

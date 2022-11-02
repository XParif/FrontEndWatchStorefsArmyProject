import styled from "styled-components";
import { InputField, InputForm, InputLabel } from "./common";

const LoginFormContainer = styled.div`
  width: 500px;
`;

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <InputForm>
        <InputLabel>
          {"Email : "}
          <InputField type="email" id="email" placeholder="Email" required />
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
        <InputField type="submit" value="Login" />
      </InputForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

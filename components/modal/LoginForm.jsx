import { useState } from "react";
import styled from "styled-components";
import { client, isLogin, Loading2, message } from "../../apolloClient";
import { getLogIn } from "../../graphql";
import Button from "../shared/buttons/index";
import { InputField, InputForm, InputLabel } from "./common";

// import buttonLoading from "../../buttonLoading.svg"
const LoginFormContainer = styled.div`
  width: 500px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 720px) and (max-width: 976px) {
    width: 300px;
  }
`;

const LoginForm = ({ modalController }) => {
  const [formInput, setFormInput] = useState({});

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      Loading2(true);
      const { data, error } = await client.mutate({
        mutation: getLogIn(formInput.email, formInput.password),
      });
      const jwt = data?.login?.jwt;
      if (typeof window !== undefined) {
        localStorage.setItem("jwt_token", `Bearer ${jwt}`);
        localStorage.setItem("logedInUserId", data?.login?.user?.id);
      }
      isLogin(true);
      Loading2(false);
      modalController(false);
      message({ type: "success", body: "Loged In Success" });
      setFormInput({});
    } catch (error) {
      Loading2(false);
      message({
        type: "failed",
        body: "UserEmail/UserName OR PassWord dosen't Match",
      });
      setFormInput({});

    }
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
            placeholder="example@email.com"
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
            placeholder="enter your password"
            onChange={handleChange}
            required
          />
        </InputLabel>
        <Button bg="primary" type="submit">
          Log In
        </Button>
      </InputForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

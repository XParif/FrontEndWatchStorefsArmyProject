import { useState } from "react";
import styled from "styled-components";
import { client, isLogin, Loading2, message  } from "../../apolloClient";
import { getLogIn } from "../../graphql";
import { InputField, InputForm, InputLabel } from "./common";

// import buttonLoading from "../../buttonLoading.svg"
const LoginFormContainer = styled.div`
  width: 500px;
`;

const LoginForm = ({modalController}) => {
  const [formInput, setFormInput] = useState({});


  const loginHandler = async(e) => {
    e.preventDefault();
    try{
      Loading2(true)
      const {data , error} = await client.mutate({
        mutation : getLogIn(formInput.email , formInput.password)
      })
      const jwt = data?.login?.jwt
      localStorage.setItem('jwt_token', `Bearer ${jwt}`);
      localStorage.setItem('logedInUserId', data?.login?.user?.id);
      isLogin(true)
      Loading2(false)
      modalController(false)
      message({type : "success" ,body : "Loged In Success"})
      setFormInput({})
    }catch(error){
      Loading2(false)
      message({type : "failed" ,body : "UserEmail/UserName OR PassWord dosen't Match"})
      setFormInput({})
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
        <InputField type="submit" value="LogIn..."/>
      </InputForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

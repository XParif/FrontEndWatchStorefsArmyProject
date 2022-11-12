import { useState } from "react";
import styled from "styled-components";
import { client, isLogin, message  } from "../../apolloClient";
import { getLogIn } from "../../graphql";
import { InputField, InputForm, InputLabel } from "./common";
// import buttonLoading from "../../buttonLoading.svg"
const LoginFormContainer = styled.div`
  width: 500px;
`;

const LoginForm = ({modalController}) => {
  const [formInput, setFormInput] = useState({});
  const [loading , setLoading] = useState(false)

  const loginHandler = async(e) => {
    e.preventDefault();
    try{
      setLoading((
        <div style={{width : "100vw" , height : "100vh", backgroundColor : "rgb(255,255,255, 0.3)" , position : "fixed" , top : 0 , left : 0 , display : "flex" , justifyContent: "center" , alignItems : "center"}}>
          <img src="/buttonLoading.svg" alt="Button Loading"/>
        </div>
        ))
      const {data , error} = await client.mutate({
        mutation : getLogIn(formInput.email , formInput.password)
      })
      const jwt = data?.login?.jwt
      localStorage.setItem('jwt_token', `Bearer ${jwt}`);
      localStorage.setItem('logedInUserId', data?.login?.user?.id);
      isLogin(true)
      setLoading(false)
      modalController(false)
      message({type : "success" ,body : "Loged In Success"})
    }catch(error){
      setLoading(false)
      message({type : "failed" ,body : "UserEmail/UserName OR PassWord dosen't Match"})
    }
      
  };

  const handleChange = (e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const btnloading = 
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
        {loading || ""}
        <InputField type="submit" value="LogIn..."/>
      </InputForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

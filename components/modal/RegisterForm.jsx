import { useState } from "react";
import styled from "styled-components";
import { client, isLogin, Loading2 , message } from "../../apolloClient";
import { getRegister } from "../../graphql";
import AddressForm from "./address";
import { InputField, InputForm, InputLabel } from "./common";
import Button from '../shared/buttons/index'
import Checkbox from './../shared/checkboxes/index';


const RegisterFormContainer = styled.div`
  width: 900px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin: 5px;
`;

const RegisterForm = ({modalController}) => {
  const [formInput, setFormInput] = useState({});
  const [addressInput , setAddressInput] = useState({});
  const [putAddress,setPutAddress] = useState(false)
  const regHandler = async(e) => {
    e.preventDefault();
    try {
      Loading2(true)
      let query ;
      if(putAddress){
        query = getRegister(formInput , addressInput)
      }else{
        query = getRegister(formInput)
      }
      const {data , error} = await client.mutate({
        mutation : query
      })
      console.log(data)
      const jwt = data?.userReg?.jwt
      localStorage.setItem('jwt_token', `Bearer ${jwt}`);
      localStorage.setItem('logedInUserId', data?.userReg?.user?.id);
      isLogin(true)
      Loading2(false)
      modalController(false)
      message({type : "success" ,body : data?.userReg?.message})
    } catch (error) {
      message({type : "failed" ,body : "SomeThing Went Worng , Plz Type Correctly"})
      Loading2(false)
    }
    
  };

  const handleChange = (e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddressInputChange = (e) => {
    setAddressInput((prev) => ({
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
                id="username"
                name="username"
                placeholder="username"
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
              {"Phone : "}
              <InputField
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                onChange={handleChange}
                required
              ></InputField>
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
          {/* <div  onClick={()=> setPutAddress(prv => (prv? false : true)) } > */}
          {/* <InputField type="button" value={(putAddress? "Skip For Now" : "Put Address" )} /> */}
          {/* </div> */}
          <Checkbox text="I want to add my address now" onClick={()=> setPutAddress(prv => (prv? false : true)) } />
          {putAddress? <AddressForm handleChange={handleAddressInputChange} /> : ""}
        </SectionWrapper>
        <Button bg="primary" type="submit">
          Register
        </Button>
      </InputForm>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

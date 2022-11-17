import { useState } from "react";
import styled from "styled-components";
import { client, isLogin, Loading2, message } from "../../apolloClient";
import { getRegister } from "../../graphql";
import Button from "../shared/buttons/index";
import Checkbox from "./../shared/checkboxes/index";
import AddressForm from "./address";
import { InputField, InputForm, InputLabel } from "./common";
import { justifyAlignCenter } from './../../utils/display.styled';

const RegisterFormContainer = styled.div`
  width: 900px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 720px) and (max-width: 976px) {
    width: 300px;
  }
`;

const SectionWrapper = styled.div`
  ${justifyAlignCenter}
  flex-direction: column;
`;

const Section = styled.div`
  margin: 5px;
`;

const RegBtnWrapper = styled.div`
  /* width: 300px; */
  /* margin: 0 auto; */
`;

const RegisterForm = ({ modalController }) => {
  const [formInput, setFormInput] = useState({});
  const [addressInput, setAddressInput] = useState({});
  const [putAddress, setPutAddress] = useState(false);
  const regHandler = async (e) => {
    e.preventDefault();
    try {
      Loading2(true);
      let query;
      if (putAddress) {
        query = getRegister(formInput, addressInput);
      } else {
        query = getRegister(formInput);
      }


      const {data , error} = await client.mutate({
        mutation : query
      })

      const jwt = data?.userReg?.jwt
      if(typeof window !== undefined){
        localStorage.setItem('jwt_token', `Bearer ${jwt}`);
        localStorage.setItem('logedInUserId', data?.userReg?.user?.id);
    }
      isLogin(true)
      Loading2(false)
      modalController(false)
      message({type : "success" ,body : data?.userReg?.message})


    } catch (error) {
      message({
        type: "failed",
        body: "SomeThing Went Worng , Plz Type Correctly",
      });
      Loading2(false);
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

          <div onClick={() => setPutAddress((prv) => (prv ? false : true))}>
            <Checkbox text="I want to add my address now" />
          </div>


          {putAddress ? (
            <AddressForm handleChange={handleAddressInputChange} />
          ) : (
            ""
          )}

        </SectionWrapper>
        <RegBtnWrapper>
          <Button bg="primary" type="submit">
            Register
          </Button>
        </RegBtnWrapper>
      </InputForm>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

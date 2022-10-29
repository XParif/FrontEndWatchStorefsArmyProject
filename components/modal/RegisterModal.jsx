import { BsWatch } from "react-icons/bs";
import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-item: center;
  padding-top: 1%;
`;
const ModalContainer = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
const ModalClose = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  color: red;
  font-size: 25px;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
  color: #7678ed;
`;
const ModalTitleLogo = styled.div`
  font-size: 3rem;
`;
const ModalTitleText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const ModalBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
const ModalFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;

const InputForm = styled.form`
  width: 90%;
`;

const InputLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: #7678ed;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-weight: bold;
  color: #7678ed;
`;
const SelectOptions = styled.option``;

const RegisterModal = ({ closeModal, loginModal }) => {
  console.log("RegisterModal Called");
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalClose onClick={() => closeModal(false)}> X </ModalClose>
        <ModalTitle>
          <ModalTitleLogo>
            <BsWatch />
          </ModalTitleLogo>
          <ModalTitleText>{"Watch Store"}</ModalTitleText>
        </ModalTitle>
        <ModalBody>
          <InputForm>
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
              <InputField type="number" id="phone"></InputField>
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
            <InputField type="submit" value="Register" />
          </InputForm>
        </ModalBody>
        <ModalFooter onClick={() => loginModal(true)}>
          Already Registered? Login here
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default RegisterModal;

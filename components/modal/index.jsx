import { useState } from "react";
import { BsWatch } from "react-icons/bs";
import LoginForm from "./LoginForm";
import {
  ModalBackground,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalTitle,
  ModalTitleLogo,
  ModalTitleText,
  ModalWrapper,
  ModalUnfocused
} from "./ModalComponents";
import RegisterForm from "./RegisterForm";

const Modal = ({ modalController }) => {
  const [loginPart, setLoginPart] = useState(true);

  return (
    <ModalWrapper>
      <ModalUnfocused onClick={() => modalController(false)} />
      <ModalBackground>
        <ModalContainer>
          <ModalClose onClick={() => modalController(false)}> X </ModalClose>
          <ModalTitle>
            <ModalTitleLogo>
              <BsWatch />
            </ModalTitleLogo>
            <ModalTitleText>{"Watch Store"}</ModalTitleText>
          </ModalTitle>
          <ModalBody>
            {loginPart ? (
              <>
                <LoginForm modalController={modalController} />
                <ModalFooter onClick={() => setLoginPart(false)}>
                  Don't you have id? Register here
                </ModalFooter>
              </>
            ) : (
              <>
                <RegisterForm modalController={modalController}  setLoginPart={setLoginPart} />
                <ModalFooter onClick={() => setLoginPart(true)}>
                  Already Registered? Login here
                </ModalFooter>
              </>
            )}
          </ModalBody>
        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
};

export default Modal;

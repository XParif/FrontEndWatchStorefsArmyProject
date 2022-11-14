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
  ModalUnfocused,
  ClickableLink,
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
                <ModalFooter>
                  Don't you have id ?
                  <ClickableLink onClick={() => setLoginPart(false)}>
                    Register here
                  </ClickableLink>
                </ModalFooter>
              </>
            ) : (
              <>
                <RegisterForm
                  modalController={modalController}
                  setLoginPart={setLoginPart}
                />
                <ModalFooter>
                  Already registered ?
                  <ClickableLink onClick={() => setLoginPart(true)}>
                    Login here
                  </ClickableLink>
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

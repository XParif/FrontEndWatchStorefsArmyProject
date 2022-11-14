import { BsWatch } from "react-icons/bs";

import {
  ModalBackground,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalTitle,
  ModalTitleLogo,
  ModalTitleText,
  ModalWrapper,
  ModalUnfocused
} from "./ModalComponents";

const Modal2 = ({ modalController  , children}) => {

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
              {children}
          </ModalBody>
        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
};

export default Modal2;

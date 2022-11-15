import styled from "styled-components";
import { RedButton } from "../shared/buttons";

export const ModalWrapper = styled.div`
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(200, 200, 200, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalUnfocused = styled.div`
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  z-index: 100003;
`;

export const ModalContainer = styled.div`
  max-height: 85vh;
  max-width: 60vw;
  border-radius: ${({theme}) => theme?.borderRadius};
  background-color: ${({ theme }) => theme?.color?.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  overflow: scroll;
`;

export const ModalClose = styled(RedButton)`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
`;

export const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
  color: ${({ theme }) => theme?.color?.primary};
`;

export const ModalTitleLogo = styled.div`
  font-size: 3rem;
`;

export const ModalTitleText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const ModalBody = styled.div`
  flex-direction: column;
  font-size: 1.2rem;
`;

export const ModalFooter = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes?.default};
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

export const ClickableLink = styled.div`
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  cursor: pointer;
  color: ${({ theme }) => theme?.color?.primary};
`;

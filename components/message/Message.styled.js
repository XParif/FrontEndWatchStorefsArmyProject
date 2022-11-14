import styled from "styled-components";

export const MessageContainer = styled.div`
  border-radius: ${({theme}) => theme?.borderRadius};
  transition: 2s linear;
  margin: 10px;
  background-color: ${({theme}) => theme?.color?.white};
  padding: 1rem;
  color: ${({theme}) => theme?.color?.primary};
  border: 1px solid ${({theme}) => theme?.color?.primary};
  display: flex;
  gap: .5rem;
`;

export const MessageBody = styled.div`
  margin-right: 10px;
  font-size: ${({theme}) => theme?.fontSizes?.sm};
`;

export const MessageStyle = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  z-index: 10;
`;


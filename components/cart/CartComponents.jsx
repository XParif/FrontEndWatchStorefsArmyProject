import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  width: 90%;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
  min-height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* text-align: center; */
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5%;
  margin: 0 auto;
`;

export const BackButtonContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

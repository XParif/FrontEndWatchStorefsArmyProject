import styled from "styled-components";

export const InputForm = styled.form`
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme?.color?.primary};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-weight: bold;
  /* color: ${({ theme }) => theme?.color?.primary}; */
`;

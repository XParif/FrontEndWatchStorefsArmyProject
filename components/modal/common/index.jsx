import styled from "styled-components";

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 420px) and (max-width: 960px) {
    display: grid;
    grid-template-rows: 1fr;
    flex-wrap: wrap;
    /* display: flex; */
    /* align-items: center; */
  }
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme?.fontSizes?.md};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  color: ${({ theme }) => theme?.color?.primary};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
  border-radius: ${({ theme }) => theme?.borderRadius};
  outline: none;
`;

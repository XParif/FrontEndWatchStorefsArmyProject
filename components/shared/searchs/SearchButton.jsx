import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 11px 10px;
  font-size: 12px;
  background: ${({ theme }) => theme?.color?.secondary};
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: ${({ theme }) => theme?.color?.primary}; ;
`;
const SearchButton = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default SearchButton;

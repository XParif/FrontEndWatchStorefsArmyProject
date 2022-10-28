import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 6px 10px;
  background: ${({ theme }) => theme?.color?.secondary};
  font-size: 0.9rem;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
const SearchButton = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default SearchButton;

import styled from "styled-components";

const InputStyle = styled.input`
  padding: 9.5px 20px;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
`;

const SearchInput = ({ placeholder }) => {
  return <InputStyle placeholder={placeholder} />;
};

export default SearchInput;

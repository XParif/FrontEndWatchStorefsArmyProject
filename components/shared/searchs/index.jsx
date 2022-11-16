import styled from "styled-components";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const SearchStyle = styled.div`
  font-family: ${({ theme }) => theme?.typography};
  border-radius: 5px;
  display: flex;
  align-items: top;
  & input {
    font-size: ${({ theme }) => theme?.fontSizes?.sm};
  }
`;

const Search = ({ placeholder, children }) => {
  return (
    <SearchStyle>
      <SearchInput placeholder={placeholder} />
      <SearchButton >  
        { children}
      </SearchButton >
    </SearchStyle>
  );
};

export default Search;

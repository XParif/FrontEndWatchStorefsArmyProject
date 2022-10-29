import styled from "styled-components";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const SearchStyle = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Search = ({ placeholder, children }) => {
  return (
    <SearchStyle>
      <SearchInput placeholder={placeholder} />
      <SearchButton children={children} />
    </SearchStyle>
  );
};

export default Search;

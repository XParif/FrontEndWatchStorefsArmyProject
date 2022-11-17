import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Search from "./../shared/searchs";
import { justifyAlignCenter } from './../../utils/display.styled';

const SearchContainer = styled.div`
  ${justifyAlignCenter}
`;

const SearchForm = styled.form``;
// const SearchInput = styled.input`
//   min-width: 300px;
//   font-size: 1.3rem;
//   height: 2rem;
// `;

// const SearchSubmit = styled.input`
//   font-size: 1.2rem;
//   color: #7678ed; //${({ theme }) => theme?.color?.primary}
//   width: 4rem;
// `;

const SearchOption = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <Search placeholder="Search in watch store">
          <FaSearch />
        </Search>
        {/* <SearchSubmit type="submit" value="&#x1F50D;" /> */}
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchOption;

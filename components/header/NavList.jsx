import styled from "styled-components";
import { alignItemsCenter } from './../../utils/display.styled';

const NavItem = styled.h3`
  ${alignItemsCenter}
  gap: 0.5rem;
  margin: 0 7px;
  padding: 5px;
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({ theme }) => theme?.fontSizes?.default};

  @media screen and (min-width: 720px) and (max-width: 976px) {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center; */
    gap: 0.2rem;
    padding: 0;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: ${({ theme }) => theme?.fontSizes?.md};
  }
`;

const NavList = (props) => {
  const { title, logo } = props;
  return (
    <NavItem>
      {title} {logo}
    </NavItem>
  );
};

export default NavList;

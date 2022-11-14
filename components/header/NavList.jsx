import styled from "styled-components";

const NavItem = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 7px;
  padding: 5px;
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  font-size: ${({theme}) => theme?.fontSizes?.default};
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

import styled from "styled-components";
import Background from "./../Shared/backgrounds";
import Container from "./../Shared/container/";
import BrandLogo from "./BrandLogo";
import NavBar from "./NavBar";
import SearchOption from "./SearchOption";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 5rem; */
  background-color: ${({ bg = "primary", theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
`;

const Header = ({ modalController }) => {
  return (
    <Background bg="primary">
      <Container>
        <HeaderContainer>
          <BrandLogo />
          <SearchOption />
          <NavBar openModal={modalController} />
        </HeaderContainer>
      </Container>
    </Background>
  );
};

export default Header;

import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { cartItemsVar } from "../../apolloClient/index";
import Background from "./../shared/backgrounds";
import Container from "./../shared/container/";
import BrandLogo from "./BrandLogo";
import NavBar from "./NavBar";
import SearchOption from "./SearchOption";
import { alignItemsCenter } from './../../utils/display.styled';

const Wrapper = styled.div`
  @media screen and (min-width: 976px) {
    position: sticky;
    top : 0;
    width: 100%;
    z-index: 100;
  }
`;

const HeaderContainer = styled.div`
${alignItemsCenter}
  justify-content: space-between;

  /* height: 5rem; */
  background-color: ${({ bg = "primary", theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};

  @media screen and (min-width: 720px) and (max-width: 976px) {
    ${alignItemsCenter}
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (min-width: 440px) and (max-width: 560px) {
    ${alignItemsCenter}
    flex-direction: column;
    flex-wrap: wrap;
    font-weight: ${({ theme }) => theme?.fontWeight?.small};
    font-size: ${({ theme }) => theme?.fontSizes?.default};
  }
`;

const Header = ({ modalController }) => {
  const CartValue = useReactiveVar(cartItemsVar);
  let CartItemCount = 0;
  CartValue.forEach(
    (v) => (CartItemCount = CartItemCount + v.product_quantity)
  );
  return (
    <Wrapper>
      <Background bg="primary">
        <Container>
          <HeaderContainer>
            <BrandLogo />
            <SearchOption />
            <NavBar
              CartItemCount={CartItemCount}
              modalController={modalController}
            />
          </HeaderContainer>
        </Container>
      </Background>
    </Wrapper>
  );
};

export default Header;

import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { cartItemsVar } from "../../apolloClient/index";
import Background from "./../shared/backgrounds";
import Container from "./../shared/container/";
import BrandLogo from "./BrandLogo";
import NavBar from "./NavBar";
import SearchOption from "./SearchOption";

const Wrapper = styled.div`
  /* position: fixed; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* height: 5rem; */
  background-color: ${({ bg = "primary", theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};

  @media screen and (min-width: 720px) and (max-width: 976px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (min-width: 440px) and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
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

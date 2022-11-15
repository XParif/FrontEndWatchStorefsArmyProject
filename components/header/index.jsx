import styled from "styled-components";
import Background from "./../shared/backgrounds";
import Container from "./../shared/container/";
import BrandLogo from "./BrandLogo";
import NavBar from "./NavBar";
import SearchOption from "./SearchOption";
import { useReactiveVar } from '@apollo/client';
import { cartItemsVar } from '../../apolloClient/index';

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
`;

const Header = ({ modalController }) => {
  const CartValue = useReactiveVar(cartItemsVar)
  let CartItemCount = 0
   CartValue.forEach(v => CartItemCount= CartItemCount + v.product_quantity)
  return (
    <Wrapper>
      <Background bg="primary">
        <Container>
          <HeaderContainer>
            <BrandLogo />
            <SearchOption />
            <NavBar CartItemCount={CartItemCount} modalController={modalController} />
          </HeaderContainer>
        </Container>
      </Background>
    </Wrapper>
  );
};

export default Header;

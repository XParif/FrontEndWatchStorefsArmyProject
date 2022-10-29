import styled from "styled-components";
import Background from "../Shared/backgrounds";
import Container from "../Shared/container";
import FBodyItem from "./FBodyItem";
import Subscribe from "./Subscribe";

const CopyrightMsg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: White;
  width: 100%;
  height: 2.5rem;
  background-color: ${({ bg = "primary", theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
`;

const FooterBody = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ bg, theme }) =>
    theme.color[bg] ?? theme?.color?.secondary};
`;

const Footer = () => {
  return (
    <>
      <Background>
        <Container>
          <FooterBody>
            <FBodyItem
              title="Address"
              line1="Madaripur Sadar,"
              line2="Dhaka Bangladesh"
              line3=""
            />

            <Subscribe title="Newsletter" />

            <FBodyItem
              title="Support"
              line1="FAQs"
              line2="Order Tracking"
              line3="Shipping and Returns"
            />
            <FBodyItem
              title="Shop by"
              line1="New Arrival"
              line2="Best Saller"
              line3="Sale Off"
            />
            <FBodyItem
              title="Social Link"
              line1="Facebook"
              line2="Twitter"
              line3="Youtube"
            />
          </FooterBody>
        </Container>
      </Background>

      <CopyrightMsg>&copy; All Right Reserved 2022 By Team F</CopyrightMsg>
    </>
  );
};

export default Footer;

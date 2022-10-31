import Background from "../../shared/backgrounds";
import Container from "../../shared/container";
import SectionHeading from "../../shared/sectionHeaders";
import Display from "./Display";
import SectionBody from "./SectionBody";

const HotOffer = () => {
  return (
    <Background bg="white">
      <Container>
        <SectionHeading size="lg" weight="semiBold" title="Hot Offer">
          <Display>Ends: 10 : 00 : 00</Display>
        </SectionHeading>
        <SectionBody />
      </Container>
    </Background>
  );
};

export default HotOffer;

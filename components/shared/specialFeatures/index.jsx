import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import Feature from "../../ui/feature";
import Background from "../../ui/backgrounds";
import Container from "../../ui/container";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 3.5rem 0;
`;

const SpecialFeatures = () => {
  return (
    <Background>
      <Container>
        <Wrapper>
          <Feature
            title="Unique Everything"
            description="Lorem Ipsum simply and text of the printing."
            icon={<AiOutlineHeart />}
          />
          <Feature
            title="Free Shipping"
            description="Lorem Ipsum simply and text of the printing."
            icon={<MdOutlineLocalShipping />}
          />
          <Feature
            title="Secure Payments"
            description="Lorem Ipsum simply and text of the printing."
            icon={<AiOutlineLock />}
          />
          <Feature
            title="Support Customer"
            description="Lorem Ipsum simply and text of the printing."
            icon={<MdOutlineSupportAgent />}
          />
        </Wrapper>
      </Container>
    </Background>
  );
};

export default SpecialFeatures;

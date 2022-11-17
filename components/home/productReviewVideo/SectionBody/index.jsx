import styled from "styled-components";
import VideoSection from "./VideoSection";
import ContactUs from './ContactUs'
import { justifySpaceBetween } from './../../../../utils/display.styled';

const SectionBodyStyle = styled.div`
  ${justifySpaceBetween}
  align-items: flex-start;
`;

const SectionBody = () => {
  return (
    <SectionBodyStyle>
      <VideoSection />
      <ContactUs />
    </SectionBodyStyle>
  );
};

export default SectionBody;

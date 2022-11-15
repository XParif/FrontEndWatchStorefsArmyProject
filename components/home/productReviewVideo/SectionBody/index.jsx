import styled from "styled-components";
import VideoSection from "./VideoSection";
import ContactUs from './ContactUs'

const SectionBodyStyle = styled.div`
  display: flex;
  justify-content: space-between;
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

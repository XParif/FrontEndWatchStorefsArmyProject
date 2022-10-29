import styled from "styled-components";
import BlockText from "../../../shared/texts/BlockText";
import Button from "../../../shared/buttons";
import { FaCoffee } from "react-icons/fa";

const ContactUsStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 20%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1rem;
  padding: 2rem;

  & > button {
    margin-top: 1rem;
  }
`;

const ContactUs = () => {
  return (
    <ContactUsStyle>
      <BlockText>
        Are You interested to review our products need review unit you can
        contact us!!
      </BlockText>
      <Button>
        Contact <FaCoffee />{" "}
      </Button>
    </ContactUsStyle>
  );
};

export default ContactUs
import styled from "styled-components";
import Button from "../../buttons";
import { FaCartPlus, FaInfo } from "react-icons/fa";

const ButtonGroupStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const CardButtonGroup = () => {
  return (
    <ButtonGroupStyle>
      <Button bg="primary">
        Add Card <FaCartPlus />{" "}
      </Button>
      <Button>
        Details <FaInfo />{" "}
      </Button>
    </ButtonGroupStyle>
  );
};

export default CardButtonGroup;

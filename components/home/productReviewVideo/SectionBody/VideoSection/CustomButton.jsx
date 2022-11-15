import styled from "styled-components";
import Button from "../../../../shared/buttons";
import { FaChevronDown } from "react-icons/fa";

const CustomButtonStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomButton = () => {
  return (
    <CustomButtonStyle>
      <Button>
        Show More <FaChevronDown />
      </Button>
    </CustomButtonStyle>
  );
};

export default CustomButton;

import styled from "styled-components";
import Button from "../../../../shared/buttons";
import { FaChevronDown } from "react-icons/fa";
import { justifySpaceCenter } from './../../../../../utils/display.styled';

const CustomButtonStyle = styled.div`
  ${justifySpaceCenter}
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

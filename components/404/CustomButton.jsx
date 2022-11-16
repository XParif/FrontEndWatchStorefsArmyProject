import styled from "styled-components";
import { BaseButton } from "./../shared/buttons";
import { alignItemsCenter } from "../../utils/display.styled";

const CustomButton = styled(BaseButton)`
  margin-top: 2rem;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  ${alignItemsCenter}
  
  & > a {
    color: white;
    margin-left: 1rem;
  }
`;

export default CustomButton;

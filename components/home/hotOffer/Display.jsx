import styled from "styled-components";
import {BaseButton} from "../../shared/buttons";

const Display = styled(BaseButton)`
  background-color: ${({ theme }) => theme?.color?.primary};
  color: ${({ theme }) => theme?.color?.white};
  cursor: auto;

  &:hover {
    background-color: ${({ theme }) => theme?.color?.primary};
  }
`;

export default Display;

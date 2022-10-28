import styled from "styled-components";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Button from "../../shared/buttons"

const Pagination = styled.div`
  & button {
    margin-left: 1rem;
    background-color: ${({ theme }) => theme?.color?.primary};
    color: ${({ theme }) => theme?.color?.white};
  }
`;
const TwoButtonPagination = () => {
  return (
    <Pagination>
      <Button fontSize="sm">
        <FaArrowLeft />
      </Button>
      <Button fontSize="sm">
        <FaArrowRight />
      </Button>
    </Pagination>
  );
};

export default TwoButtonPagination
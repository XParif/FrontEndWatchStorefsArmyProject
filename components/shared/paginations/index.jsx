import styled from "styled-components";
import { Button } from "../buttons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0.5rem;
`;

const Pagination = ({ totalPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(<Button>{i}</Button>);
  }
  return (
    <PaginationStyle>
      <Button bg="primary" shape="square">
        <FaAngleLeft />
      </Button>
      {pages}
      <Button bg="primary" shape="square">
        <FaAngleRight />
      </Button>
    </PaginationStyle>
  );
};

export default Pagination;

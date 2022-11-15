import styled from "styled-components";
import Button from "../buttons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import  Link  from 'next/link';

const PaginationStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0.5rem;
`;

const Pagination = ({qureParamsArray, totalPage }) => {
  if(totalPage == undefined){
    totalPage = 1
  }
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <Link key={i} href={{ pathname: '/collections', query: { catagories: qureParamsArray , page : i }}}>
        <Button>{i}</Button>
      </Link>
    )
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

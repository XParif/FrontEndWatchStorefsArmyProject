import styled from "styled-components";
import Button from "../buttons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import  Link  from 'next/link';

const PaginationStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0.5rem;
`;

const Pagination = ({uiState , setUiState ,page ,qureParamsArray, totalPage , sorting }) => {
  let nextPage = page < totalPage ? page+1 : page
  let prvPage = page > 2 ? page-1 : page
  if(totalPage == undefined){
    totalPage = 1
  }
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <Link onClick={()=> setUiState( uiState ? false : true)} key={i} href={{ pathname: '/collections', query: { catagories: qureParamsArray , page : i , sorting : sorting}}}>
        {page == i ?<Button bg="primary" >{i}</Button> : <Button>{i}</Button> }
        
      </Link>
    )
  }

  return (
    <PaginationStyle>
      {page >= 2 ?

          <Link onClick={()=> setUiState( uiState ? false : true)} key={1} href={{ pathname: '/collections', query: { catagories: qureParamsArray , page : prvPage , sorting : sorting}}}>
          <Button bg="primary" shape="square">
            <FaAngleLeft />
          </Button>
          </Link> 
        
    :
    <Button bg="primary" shape="square">
    <FaAngleLeft />
  </Button>
      
    }

      
      {pages}

    { page < totalPage ?
      <Link onClick={()=> setUiState( uiState ? false : true)} key={2} href={{ pathname: '/collections', query: { catagories: qureParamsArray , page : nextPage , sorting : sorting}}}>
      <Button bg="primary" shape="square">
        <FaAngleRight />
      </Button>
    </Link> :
    
    <Button bg="primary" shape="square">
    <FaAngleRight />
  </Button>

    }
      
    </PaginationStyle>
  );
};

export default Pagination;

import styled from "styled-components";
import InlineText from "./../../../shared/texts/InlineText";
import Button from "./../../../shared/buttons";
import Link from "next/link";
import { useState } from "react";

const Dropdown = styled.span`
  position: relative;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    & div {
      display: inline-block;
    }
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 10px;
  background-color: ${({ theme }) => theme?.color?.secondary};
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    color: ${({ theme }) => theme?.color?.primary};
  }
`;

const ProductSorting = ({sorting , qureParamsArray}) => {
  const [uiState , setUiState] = useState(false)
  


  return (
    <InlineText>
      Sort by :{" "}
      <Dropdown>
        <Button bg="primary" shape="square">
          {sorting == "asc" ? `price low to high`  :  `price High to Low<`}
          
        </Button>
        <DropDownContent>
        {sorting === "asc" ? "" :
          <Link onClick={()=> setUiState( uiState ? false : true)} key={1} href={{ pathname: '/collections', query: { catagories: qureParamsArray ,  sorting : `asc`}}}>
                price Low to High
          </Link>
        }
        
        {sorting === "desc" ? "" : 
          <Link onClick={()=> setUiState( uiState ? false : true)} key={2} href={{ pathname: '/collections', query: { catagories: qureParamsArray ,  sorting : `desc`}}}>
            price Hgh to Low
          </Link>
        }
        

        </DropDownContent>
      </Dropdown>
    </InlineText>
  );
};

export default ProductSorting;

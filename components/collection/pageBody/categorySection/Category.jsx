import Link from "next/link";
import styled from "styled-components";
import Checkbox from "./../../../shared/checkboxes/index";
import Title from "./../../../shared/texts/Title";
import { useState, useEffect } from 'react';

const CheckboxGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryStyle = styled.div`
  margin-bottom: 2rem;
`;

const Category = ({sorting , title, list , qureParamsArray }) => {
  const [uiState , setUiState] = useState(false);
  const qureObj = list.reduce((acc , cu)=>{
    acc[`${cu}`] =  qureParamsArray.find(v => v == cu) ? true : false;
    return acc
},{})
  return (
    <CategoryStyle>
      <Title size="md" weight="semiBold">
        {title}
      </Title>
      <CheckboxGroupStyle>
        {list.map((item ,index) => {
          const refineArray = qureParamsArray.filter(v=> v !== item) ;
          if(!qureObj[`${item}`]){
            refineArray.push(item)
          }

          return(
            <Link   key={index} href={{ pathname: '/collections', query: { catagories: refineArray , sorting : sorting}}}>
              <Checkbox onClick={()=> setUiState( uiState ? false : true)}  defaultChecked={qureObj[`${item}`]}  text={item} />
            </Link>
          )

          })
        }
      </CheckboxGroupStyle>
    </CategoryStyle>
  );
};

export default Category;

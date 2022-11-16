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
  const [uiStateQureParamsArray , setUiStateQureParamsArray] = useState([...qureParamsArray]);
  
  const [qureObj , setQureObj] =   useState(list.reduce((acc , cu)=>{
    acc[`${cu}`] =  qureParamsArray.find(v => v == cu) ? true : false;
    return acc
},{}))

console.log(uiStateQureParamsArray)
  const reFIneUiStateQureParamsArray = (item)=>{
    if(!qureObj[`${item}`]){

      setUiStateQureParamsArray((prv)=>{
        return [...prv , item]
      })

      setQureObj((prv) => {
        prv[`${item}`] = true;
        return {
        ...prv,
      }
      })

    }else{

      setUiStateQureParamsArray((prv)=>{
        prv = prv.filter(v=> v !== item)
        return [...prv]
      })

      setQureObj((prv) => {
        prv[`${item}`] = false;
        return {
        ...prv,
      }
      })

    }
  }


  return (
    <CategoryStyle>
      <Title size="md" weight="semiBold">
        {title}
      </Title>
      <CheckboxGroupStyle>
        {list.map((item ,index) => {

          const reFinequreParamsArray = uiStateQureParamsArray.filter(v=> v !== item) ;
          if(!qureObj[`${item}`]){
            reFinequreParamsArray.push(item)
          }

          return(
            <Link onClick={()=> reFIneUiStateQureParamsArray(item)}  key={index} href={{ pathname: '/collections', query: { catagories: reFinequreParamsArray , sorting : sorting}}}>
              <Checkbox   defaultChecked={qureObj[`${item}`]}  text={item} />
            </Link>
          )

          })
        }
      </CheckboxGroupStyle>
    </CategoryStyle>
  );
};

export default Category;

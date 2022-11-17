import Link from "next/link";
import styled from "styled-components";
import Checkbox from "./../../../shared/checkboxes/index";
import Title from "./../../../shared/texts/Title";
import { useState, useEffect } from "react";
import BlockText from "../../../shared/texts/BlockText";
import { FaCheck } from "react-icons/fa";
import { alignItemsCenter } from './../../../../utils/display.styled';

const CheckboxGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const CategoryStyle = styled.div`
  margin-bottom: 2rem;
  position: sticky;
  top: 5rem;
`;


const CheckBoxDesign = styled.div`
  ${alignItemsCenter}
  gap: 0.75rem;
`;


const Box = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid white;
  border-radius: 1px;
  outline: 2px solid ${({ theme }) => theme?.color?.primary};


  * {
    color: ${({theme}) => theme?.color?.primary}
  }
`;

const Category = ({ sorting, title, list, qureParamsArray }) => {
  qureParamsArray = qureParamsArray.split("+");
  const [uiStateQureParamsArray, setUiStateQureParamsArray] = useState([
    ...qureParamsArray,
  ]);

  const [qureObj, setQureObj] = useState(
    list.reduce((acc, cu) => {
      acc[`${cu}`] = qureParamsArray.find((v) => v == cu) ? true : false;
      return acc;
    }, {})
  );

  console.log(qureObj);

  const reFIneUiStateQureParamsArray = (item) => {
    if (!qureObj[`${item}`]) {
      setUiStateQureParamsArray((prv) => {
        return [...prv, item];
      });

      setQureObj((prv) => {
        prv[`${item}`] = true;
        return {
          ...prv,
        };
      });
    } else {
      setUiStateQureParamsArray((prv) => {
        prv = prv.filter((v) => v !== item);
        return [...prv];
      });

      setQureObj((prv) => {
        prv[`${item}`] = false;
        return {
          ...prv,
        };
      });
    }
  };


  return (
    <CategoryStyle>
      <Title size="md" weight="semiBold">
        {title}
      </Title>
      <CheckboxGroupStyle>
        {list.map((item, index) => {
          const reFinequreParamsArray = [];

          if (!qureObj[`${item}`]) {
            reFinequreParamsArray[index] = reFinequreParamsArray[index] =
              uiStateQureParamsArray.reduce((acc, cu) => {
                acc = acc + "+" + cu;
                return acc;
              });
            reFinequreParamsArray[index] += `+${item}`;
          } else {
            reFinequreParamsArray[index] = uiStateQureParamsArray.reduce(
              (acc, cu) => {
                if (cu == item) {
                  return acc;
                }
                acc = acc + "+" + cu;
                return acc;
              }
            );
          }

          reFinequreParamsArray[index] = reFinequreParamsArray[index].slice(1);
          // if(!Array.isArray(reFinequreParamsArray[index])){

          return (
            <Link
              onClick={() => reFIneUiStateQureParamsArray(item)}
              key={index}
              href={{
                pathname: "/collections",
                query: {
                  catagories: reFinequreParamsArray[index],
                  sorting: sorting,
                },
              }}
            >
              <CheckBoxDesign>
                {/* {qureObj[item] ? <CheckedBox/> : <Box />  } */}
                <Box>{qureObj[item] && <FaCheck />}</Box>
                <BlockText color={qureObj[item] && "primary"} weight={qureObj[item] && "semiBold"}>{item}</BlockText>
              </CheckBoxDesign>
              {/* <Checkbox   defaultChecked={( -1 !== uiStateQureParamsArray.findIndex(v => v == item))}  text={item} /> */}
            </Link>
          );
        })}
      </CheckboxGroupStyle>
    </CategoryStyle>
  );
};

export default Category;

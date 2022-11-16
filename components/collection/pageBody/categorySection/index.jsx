import styled from "styled-components";
import Category from "./Category";
import { useState } from "react";

const CategorySectionStyle = styled.div`
  margin-top: 1rem;
  width: 15%;
  text-transform: capitalize;
`;

// const categoryList = {
//   "categories" : [
//     "men",
//     "women",
//     "modern",
//     "sports",
//     "swimming",
//     "smart Watch"
//   ],
//   "brands": [
//     "Tudor",
//     "Rolex",
//     "Omega",
//     "Panerai",
//     "Hublot",
//     "Breitling",
//     "Chopard",
//     "Bulgari"
//   ],
//   "price": [
//     "$10 - $20",
//     "$21 - $30",
//     "$31 - $40",
//     "$41 - $50",
//     "$51 - $60",
//     "$61 - $99",
//     "$100 - $200",
//     "$200++"
//   ],
//   "color": [
//     "Red",
//     "Blue",
//     "White",
//     "Gray",
//     "Maroon",
//     "Gold",
//     "Navy"
//   ],
//   "material": [
//     "Leather",
//     "Steel",
//     "Aluminium",
//     "Artificial Leather"
//   ]
// }

const CategorySection = ({ qureParamsArray, list, sorting }) => {
  // const [qureParamsArray , setqureParamsArray] = useState([])
  return (
    <CategorySectionStyle>
      <Category
        sorting={sorting}
        qureParamsArray={qureParamsArray}
        title="Categories"
        list={list}
      />
      {/* <Category title="Brands" list={categoryList.brands} />
      <Category title="Price" list={categoryList.price} />
      <Category title="Color" list={categoryList.color} />
      <Category title="Meterial" list={categoryList.material} /> */}
    </CategorySectionStyle>
  );
};

export default CategorySection;

import styled from "styled-components";
import Category from './Category'


const CategorySectionStyle = styled.div`
  width: 25%;
`;

const categoryList = {
  "categories" : [
    "Men",
    "Women",
    "Modern",
    "Sports",
    "Swimming",
    "Smart Watch"
  ],
  "brands": [
    "Tudor",
    "Rolex",
    "Omega",
    "Panerai",
    "Hublot",
    "Breitling",
    "Chopard",
    "Bulgari"
  ],
  "price": [
    "$10 - $20",
    "$21 - $30",
    "$31 - $40",
    "$41 - $50",
    "$51 - $60",
    "$61 - $99",
    "$100 - $200",
    "$200++"
  ],
  "color": [
    "Red",
    "Blue",
    "White", 
    "Gray",
    "Maroon",
    "Gold",
    "Navy"
  ],
  "material": [
    "Leather",
    "Steel",
    "Aluminium",
    "Artificial Leather"
  ]
}


const CategorySection = () => {
  return (
    <CategorySectionStyle>
      <Category title="Categories" list={categoryList.categories} />
      <Category title="Brands" list={categoryList.brands} />
      <Category title="Price" list={categoryList.price} />
      <Category title="Color" list={categoryList.color} />
      <Category title="Meterial" list={categoryList.material} />
    </CategorySectionStyle>
  );
};

export default CategorySection;

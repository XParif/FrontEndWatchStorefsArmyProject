import styled from "styled-components";
import Card from "./index";
import addtoCardhandeler from '../../../utils/addToCartFun';


const BaseCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

const CardGroup = ({ list }) => {
  const cards = list.map((item) => {
    const ImgUrl = typeof item.productImage.url == "string" ? item.productImage.url : item.productImage[0].url
    const forCartBosta = {
          product_ref : item.id  , 
          variantsId : -1,
          color : "defualt",
          price : item.defualtPrice,
          productImage :ImgUrl,
          product_quantity : 1,
          productName : item.productName,
          productBrand : item.brand?.brandName.toUpperCase()  
    }

    return <Card addtoCardhandeler={()=> addtoCardhandeler(forCartBosta)} ImgUrl={ImgUrl} key={item.id} item={item} />
  });

  return <BaseCardGroup>{cards}</BaseCardGroup>;
};

export default CardGroup;

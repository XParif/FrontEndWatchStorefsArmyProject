import InformationStyle from "./InformationStyle";
import BlockText from "../../../shared/texts/BlockText";
import InlineText from "../../../shared/texts/InlineText";
import Price from "./Price";
import Button from "../../../shared/buttons";
import { Rating } from "./../../../shared/cards/textBlock/Rating";
import SelectBox from "./../../../shared/selectBoxs/index";
import ColorBox from "./ColorBox";
import ActionButtonGroup from "./ActionButtonGroup";
import SocialButtons from "./SocialButtons";
import {
  FaCartPlus,
  FaHeart,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRedditSquare,
} from "react-icons/fa";


const ProductTittle = ({children}) =>{
  return(
    <>
      {children}
    </>
  )
}

const ProductCatagory= ({children}) =>{
  return(
    <>
      {children}
    </>
  )
}

const ProductBrand= ({children}) =>{
  return(
    <>
      {children}
    </>
  )
}

// const TensionForVariants = ({item})=>{
    
//   return (
//     <div>
      
//     </div>
//   )
// }

const ProductInformationSection = ({ addtoCardhandeler,pointedVariantIndex ,productInfo , variantsTensionReliefer , variants , price}) => {
    
  return (
    <InformationStyle>

      {/* Tittle Section  */}
      <ProductTittle>
        <BlockText size="lg" weight="regular">
          {productInfo.productName}
        </BlockText>
      </ProductTittle>

      {/* price Section  */}
      <Price>
        <InlineText size="lg" color="primary" weight="semiBold">
          ${price}
        </InlineText>
      </Price>


      <Rating rates="5" />

    {/* Catagory  */}
      <ProductCatagory>
        <BlockText>
          Category : <InlineText color="primary">{productInfo.catagories.map(v => `${(v.name).toUpperCase()}, `)}</InlineText>{" "}
        </BlockText>
      </ProductCatagory>
      

      <ProductBrand>
        <BlockText>
        Brand : <InlineText color="primary">{productInfo?.brand?.brandName.toUpperCase()}</InlineText>{" "}
        </BlockText>
      </ProductBrand>


      {/* <BlockText>
        Material : <InlineText color="primary">Artificial Leather</InlineText>{" "}
      </BlockText> */}


      {/* Variants Tension  */}
      <ColorBox>
        <InlineText>Color : </InlineText>
        <SelectBox>

          {variants.map((item , index ) => ( 
            <label htmlFor= {item.id} key={index} >
              <input onChange={() => variantsTensionReliefer(index , '🥵')} checked={pointedVariantIndex==index? true : false} name="😟" id={item.id} type="radio" /> 
              {item.color}
            </label>
        
          ))}

        </SelectBox>
      </ColorBox>
      <ActionButtonGroup>
        <Button onClick={addtoCardhandeler} fontSize="md" bg="primary">
          Add to Cart <FaCartPlus />
        </Button>
      </ActionButtonGroup>
      <BlockText>Share on : </BlockText>
      <SocialButtons>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaRedditSquare />
      </SocialButtons>
    </InformationStyle>
  );
};

export default ProductInformationSection;

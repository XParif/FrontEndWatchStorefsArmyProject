import ProductBlockStyle from "./ProductBlockStyle";
import ProductImageSection from './productImageSection';
import ProductInformationSection from './productInformationSection/index';
import DetailsSection from '../detailsSection/index';
import MainView from './productImageSection/MainView';
import SmallView from './productImageSection/SmallView';
import { useState } from 'react';
import addtoCardhandeler from '../../../utils/addToCartFun';

const ProductBlock = ({productInfo}) => {


  const [price , setPrice] = useState(productInfo?.defualtPrice)

  const [ProductimageUrl , setProductimageUrl] = useState(productInfo?.productImage?.url)
    
  const [forCartBosta , setforCartBosta] = useState({
    product_ref : productInfo.id  , 
    variantsId : -1  ,
    price : price,
    color : "defualt",
    productName : productInfo?.productName,
    productBrand : productInfo?.brand?.brandName.toUpperCase(),
    productImage :ProductimageUrl,
    product_quantity : 1,
  })

  const [pointedVariantIndex , setPointedVariantIndex] = useState(0)


    const variants = [{id : -1 , variantsImage : productInfo?.productImage?.url  , color : "default" , variantsId : -1, variantPrice :  productInfo?.defualtPrice}]

    productInfo.variants.map((item) => {
      const tempObj = {
        variantsId : item?.id,
        color : item?.color,
        variantPrice : item?.variantPrice,
        variantsImage : item?.ImageOfVariant?.url
      }
      variants.push(tempObj)
    })

    const variantsTensionReliefer = (index , mode) =>{
      const item = variants[index]
      setPrice(item.variantPrice)
      setProductimageUrl(item.variantsImage)
      setPointedVariantIndex(index)
      setforCartBosta((prv)=>{
        return {
          ...prv,
          variantsId : item.variantsId,
          color : item?.color,
          price : item?.variantPrice,
          productImage : item?.variantsImage,
          product_quantity : 1,
        }
      })
    }
  return (
    <>
      <ProductBlockStyle>
        <ProductImageSection >
          <MainView ProductimageUrl={ProductimageUrl} alterForImage = {productInfo?.productName} />
          <SmallView pointedVariantIndex={pointedVariantIndex}  variants = {variants} variantsTensionReliefer= {variantsTensionReliefer} />
      </ProductImageSection >
        <ProductInformationSection addtoCardhandeler={()=> addtoCardhandeler(forCartBosta)} pointedVariantIndex={pointedVariantIndex} productInfo={productInfo} variantsTensionReliefer = {variantsTensionReliefer} variants = {variants} price = {price} />
      </ProductBlockStyle>
      <DetailsSection productInfo={productInfo} />
     </>
  );
};

export default ProductBlock;

import { ItemTitle, ProductDetailTitle, ProductPriceTitle, ProductQuantityTitle, ProductTotalTitle } from "./CartComponents"

const ItemTittle = ()=>{
    return(
    <ItemTitle>
        <ProductDetailTitle>Product Details</ProductDetailTitle>
        <ProductQuantityTitle>Quantity</ProductQuantityTitle>
        <ProductPriceTitle>Rate</ProductPriceTitle>
        <ProductTotalTitle>Total</ProductTotalTitle>
    </ItemTitle>
    )
}

export default ItemTittle
import { FaTrash } from "react-icons/fa";
import Button from "../shared/buttons";
import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";
import CartItem from "./CartItem";

import {
  CartInfoWrap,
  CartItemCount,
  CartItemList,
  CartTitle,
  ClearAllContainer,
  Hader,
  ItemTitle,
  ProductDetailTitle,
  ProductPriceTitle,
  ProductQuantityTitle,
  ProductTotalTitle,
} from "./CartComponents";

const CartInfo = ({
  cartData,
  setCartData,
  quantityHandler,
  removeItemHandler,
}) => {
  const count = cartData.length ? cartData.length : 0;

  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Shopping Cart - Watch Store</CartTitle>
        <CartItemCount>
          {" "}
          {count > 1 ? `${count} Items` : `${count} Item`}{" "}
        </CartItemCount>
      </Hader>

      <Bar width="full" height="sm" />

      <ItemTitle>
        <ProductDetailTitle>Product Details</ProductDetailTitle>
        <ProductQuantityTitle>Quantity</ProductQuantityTitle>
        <ProductPriceTitle>Rate</ProductPriceTitle>
        <ProductTotalTitle>Total</ProductTotalTitle>
      </ItemTitle>

      <CartItemList>
        {cartData.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            unitePrice={item.unitePrice}
            quantity={item.initQuantity}
            quantityHandler={quantityHandler}
            removeItemHandler={removeItemHandler}
          />
        ))}
      </CartItemList>
      <ClearAllContainer>
        {" "}
        {count > 0 ? (
          <Button fontSize={"md"} onClick={() => setCartData([])}>
            Clear All <FaTrash />
          </Button>
        ) : (
          <BlockText size="lg" weight="bold">
            <br />
            <h3> Your Cart is Empty !</h3>
          </BlockText>
        )}
      </ClearAllContainer>
    </CartInfoWrap>
  );
};

export default CartInfo;

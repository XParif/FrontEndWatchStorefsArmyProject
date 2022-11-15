import { FaTrash } from "react-icons/fa";
import Button from "../shared/buttons";
import Bar from "../shared/texts/Bar";
import BlockText from "../shared/texts/BlockText";
import CartItem from "./CartItem";
import ItemTittle from './ItemTittle';
import {
  CartInfoWrap,
  CartItemList,
  CartTitle,
  ClearAllContainer,
  Hader,
} from "./CartComponents";
import { RedButton } from "../shared/buttons";

const CartInfo = ({
  cartData,
  cartItemsVar,
  quantityHandler,
  removeItemHandler,
}) => {
  const count = cartData.length ? cartData.length : 0;

  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Shopping Cart - Watch Store</CartTitle>
      </Hader>

      <Bar width="full" height="sm" />

      <ItemTittle/>

      <CartItemList>
        {cartData.map((item , index) => (
          <CartItem
            key={index}
            variantsId= {item.variantsId}
            product_ref={item.product_ref}
            productImage = {item.productImage}
            productName={item.productName}
            productBrand={item.productBrand}
            color = {item.color}
            price={item.price}
            product_quantity={item.product_quantity}
            quantityHandler={quantityHandler}
            removeItemHandler={removeItemHandler}
            index = {index}
          />
        ))}
      </CartItemList>
      <ClearAllContainer>
        {" "}
        {count > 0 ? (
          <Button fontSize={"md"} onClick={() => cartItemsVar([])}>
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

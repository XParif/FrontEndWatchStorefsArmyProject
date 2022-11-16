import { useQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { cartItemsVar, Loading2, message } from "../../../apolloClient";
import { client } from "../../../apolloClient/index";
import { getAddress, mutatedAddress, mutationOrder } from "../../../graphql";
import AddressForm from "../../modal/address";
import Modal2 from "../../modal/modal2";
import Button from "../../shared/buttons";
import Bar from "../../shared/texts/Bar";
import BlockText from "../../shared/texts/BlockText";
import {
  AddressHeader,
  CartItemList,
  Key,
  UserAddress,
  UserAddressGroup,
  Value,
} from "../CartComponents";
import CartItem from "../CartItem";
import ItemTittle from "../ItemTittle";

const InfoContainer2 = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme?.fontSizes?.md};
  }
`;
const CartInfoWrap = styled.div`
  flex: 3;
  padding: 2%;
  background-color: ${({ theme }) => theme?.color?.white};
`;

const Hader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CartTitle = styled.h3``;

const CheckoutForm = ({ children, pocketKhali }) => {
  const router = useRouter();
  const cartData = useReactiveVar(cartItemsVar);
  const userID = localStorage.getItem("logedInUserId");
  const [addressId, setAddressID] = useState("");
  const { data, loading, refetch } = useQuery(getAddress(userID));
  const [controleModal, setModalcontroleModal] = useState(false);
  const [addessFromData, setAddressFromData] = useState({});
  const [arektaOrderKor, setArektaOrderKor] = useState(false);

  const [createOrderResponse, setCreateOrderResponse] = useState("");
  useEffect(() => {
    if (loading) {
      Loading2(true);
    } else {
      setAddressID(data?.addresses[0]?.id);
      Loading2(false);
    }
  }, [loading]);

  const handleChange = (e) => {
    setAddressFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const addressSubmitHandle = async () => {
    try {
      Loading2(true);
      await client.mutate({
        mutation: mutatedAddress(addessFromData, userID),
      });
      Loading2(false);
      refetch();
      setModalcontroleModal(false);
      message({ type: "success", body: "Address Created SuccessFully" });
    } catch (error) {
      message({
        type: "failed",
        body: "Something went wrong , please type correctly",
      });
      Loading2(false);
      console.log(error);
    }
  };

  const placeOrder = async () => {
    if (!addressId) {
      message({ type: "alert", body: "Plz Select an Address" });
      return;
    }

    try {
      Loading2(true);
      const RefinedCartData = cartData.map((v) => {
        return {
          product_quantity: v.product_quantity,
          product_ref: v.product_ref,
          variantsId: v.variantsId,
        };
      });
      console.log("is here");
      const { data, error } = await client.mutate({
        mutation: mutationOrder(RefinedCartData, addressId, "cashon"),
      });

      message({ type: "success", body: "Order Created Successfuly" });
      cartItemsVar([]);
      setArektaOrderKor(true);
      setCreateOrderResponse(data);
      Loading2(false);
    } catch (error) {
      message({ type: "failed", body: "SomeThing Went Worng" });
      Loading2(false);
      setArektaOrderKor(false);
      console.log(error);
    }
  };
  if (arektaOrderKor) {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          backgroundColor: "white",
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Button
          onClick={() => {
            setArektaOrderKor(false);
            router.push("/");
          }}
        >
          {" "}
          Continue Shopping{" "}
        </Button>
        <h1>
          ধুর ও ফকিন্নি এত কম টাকা অর্ডার করলে তোর গালফ্রেন্ডকে স্কিনশট পাঠাই
          দিব
        </h1>
        <h3>
          ধন্যবাদ অর্ডার করার জন্য । জীবনে টাকা পয়সা দিয়ে কি হবে ?এত কম টাকার
          অর্ডার করলে চলে? আরেকটা অর্ডার কর তাইলে খুশি হবো ।
        </h3>

        <br />
        <BlockText>{JSON.stringify(createOrderResponse)}</BlockText>
      </div>
    );
  }

  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Heading Towards Checkout</CartTitle>
        <Button bg="primary" onClick={() => pocketKhali(false)}>
          Back to Cart
        </Button>
      </Hader>
      <Bar width="full" height="sm" />
      {/* <Form /> */}
      <InfoContainer2>
        <div>
          <ItemTittle />
          <CartItemList>
            {cartData.map((item, index) => (
              <CartItem
                key={index}
                variantsId={item.variantsId}
                product_ref={item.product_ref}
                productImage={item.productImage}
                productName={item.productName}
                productBrand={item.productBrand}
                color={item.color}
                price={item.price}
                product_quantity={item.product_quantity}
                index={index}
                isActionButton={true}
              />
            ))}
          </CartItemList>
        </div>
        {children}
      </InfoContainer2>
      <AddressHeader>
        <BlockText size="md" weight="medium">
          Select delivery location
        </BlockText>
        <Button onClick={() => setModalcontroleModal(true)} bg="primary">
          {" "}
          Add New Address{" "}
        </Button>
      </AddressHeader>
      <UserAddressGroup>
        {data?.addresses?.map((value, index) => {
          console.log(value);
          return (
            <>
              <UserAddress
                key={index}
                onClick={() => setAddressID(value.id)}
                primary={value.id == addressId}
                // style={{
                //   backgroundColor: `${value.id == addressId ? "red" : "gray"}`,
                // }}
              >
                <div>
                  <Key>Address:</Key> <Value>{value.address}</Value>
                </div>
                <div>
                  <Key>Street Address:</Key>{" "}
                  <Value>{value.streetAddress}</Value>
                </div>
                <div>
                  <Key>City:</Key> <Value>{value.city}</Value>
                </div>
                <div>
                  <Key>State:</Key> <Value>{value.state_Province_Region}</Value>
                </div>
                <div>
                  <Key>Zip Code:</Key> <Value>{value.zipCode}</Value>
                </div>
                <div>
                  <Key>Country:</Key> <Value>{value.country}</Value>
                </div>
                <div>
                  <Key>Phone Number:</Key> <Value>{value?.phoneNumber}</Value>
                </div>
              </UserAddress>
              {/* <div
              key={index}
              onClick={() => setAddressID(v.id)}
              style={{
                backgroundColor: `${v.id == addressId ? "red" : "gray"}`,
              }}
              >
            </div> */}
            </>
          );
        })}
      </UserAddressGroup>
      {controleModal && (
        <Modal2 modalController={setModalcontroleModal}>
          <AddressForm handleChange={handleChange} />
          <Button onClick={addressSubmitHandle}>Submit</Button>
        </Modal2>
      )}

      <BlockText>Only CashOn Delivary is Available</BlockText>

      <Button onClick={placeOrder}>Place Order</Button>
    </CartInfoWrap>
  );
};

export default CheckoutForm;

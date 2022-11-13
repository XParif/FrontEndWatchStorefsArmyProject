import { useQuery, useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { cartItemsVar , Loading2, message } from "../../../apolloClient";
import Bar from "../../shared/texts/Bar";
import { CartItemList } from "../CartComponents";
import CartItem from "../CartItem";
import ItemTittle from "../ItemTittle";
import Form from "./forms";
import { useEffect, useState } from 'react';
import { getAddress, mutatedAddress } from "../../../graphql";
import Button from "../../shared/buttons";
import Modal2 from '../../modal/modal2';
import AddressForm from '../../modal/address';
import { client } from '../../../apolloClient/index';

const InfoContainer2 = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
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

const CheckoutForm = ({children}) => {
  const cartData = useReactiveVar(cartItemsVar)
  const userID = localStorage.getItem("logedInUserId")
  const [addressId , setAddressID] = useState("")
  const {data , loading , refetch } = useQuery(getAddress(userID))
  const [ controleModal , setModalcontroleModal ] = useState(false)
  const [addessFromData ,setAddressFromData] = useState({})
  useEffect(()=>{
    if(loading){
      Loading2(true)
    }else{
      setAddressID(data?.addresses[0]?.id)
      Loading2(false)
    }
  },[loading])

  const handleChange = (e) => {
    setAddressFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const addressSubmitHandle = async ()=>{
    try {
      Loading2(true)
      const {data , error} = await client.mutate({
        mutation : mutatedAddress(addessFromData , userID)
      })
      console.log(data)
      Loading2(false)
      refetch()
      setModalcontroleModal(false)
      message({type : "success" ,body : "Address Created SuccessFully"})
    } catch (error) {
      message({type : "failed" ,body : "SomeThing Went Worng , Plz Type Correctly"})
      Loading2(false)
      console.log(error)
    }
  }

  return (
    <CartInfoWrap>
      <Hader>
        <CartTitle>Heading Towards Checkout</CartTitle>
      </Hader>
      <Bar width="full" height="sm" />
      {/* <Form /> */}
      <InfoContainer2>
        <div>
          <ItemTittle /> 
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
                index = {index}
                isActionButton={true}
              />
            ))}
          </CartItemList>
        </div>
        {children}
        </InfoContainer2>
        {data?.addresses?.map((v) => {
          return (
            <div onClick={()=> setAddressID(v.id)} style={{ cursor : "pointer",backgroundColor : `${v.id == addressId ? "green" : "gray"}` }}>
              {JSON.stringify(v)}
            </div>
          )
        })}
        
        <Button onClick={()=>setModalcontroleModal(true)} bg="primary"> Add New Address </Button>
        {controleModal && (
            <Modal2 modalController = {setModalcontroleModal} >
              <AddressForm handleChange = {handleChange}  />
              <Button onClick={addressSubmitHandle}>Submit</Button>
          </Modal2>
        )}
        
    </CartInfoWrap>
  );
};

export default CheckoutForm;

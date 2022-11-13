import CartBody from "./../components/cart";
import Container from "./../components/shared/container";
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {
  const [cartBody , setCartBody] = useState("")
  useEffect(()=>{
    if(typeof window !== "undefined"){
      setCartBody(<CartBody />)
    }
  },[])
  return <Container>{cartBody}</Container>
};

export default Cart;

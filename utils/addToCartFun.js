import { cartItemsVar, message } from '../apolloClient/index';

const addtoCardhandeler = (forCartBosta) =>{
    const prvCard = cartItemsVar()
    let flag = false;
    message({type : "primary" ,body : `Added To Cart ${forCartBosta.productName}`})
    const prvCardModified = prvCard.map((v) => {
      if(v.product_ref ==  forCartBosta.product_ref && v.variantsId == forCartBosta.variantsId ){
        v.product_quantity = v.product_quantity + 1;
        flag = true
      }
      return v       
    })
    if(flag){
      cartItemsVar([...prvCard])
      return;
    }
    cartItemsVar([...prvCard , forCartBosta])
    

  }

export default addtoCardhandeler
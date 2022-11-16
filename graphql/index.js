import {  gql } from '@apollo/client';
import objToGqlString from '../utils/objectToGqlString';

const productgqlString = `{
  data {
   id,
   attributes {
     productName,
     productCode,
     warrenty,
     youtubeReviewLInkSingle,
     description,
     defualtPrice,
     
     ...productImage,
     ...variants,
     ...catagories,
     ...sub_catgories,
     ...brand
   }
 }
 meta {
   pagination {
     page
     pageSize
     total
     pageCount
   }
 } 
}
}
fragment variants on AllProduct{
variants{
 id,
 variantCode,
 color,
 InStock,
 variantPrice,
 ImageOfVariant{
   data {
     id,
     attributes{
       formats
       url,
     }
   }
 }
}
}
fragment catagories on AllProduct{
catagories{
 data{
   attributes{
     name
   }
 }
}
}
fragment brand on AllProduct{
brand{
 data{
   attributes{
     brandName,
     brandDetails,
     brandLogo{
       data{
         attributes{
           formats,
           url
         }
       }
     }
   }
 }
}
}
fragment sub_catgories on AllProduct{
sub_catagories{
 data{
   attributes{
     name
   }
 }
}
}
fragment productImage on AllProduct{
productImage{
 data{
   attributes{
     formats,
     url
   }
 }
}
}`



const getProductByCatagoryFiterText = (selectedCatagory) =>{
  let orStr = ``
  selectedCatagory.forEach(v => {
    orStr+= `{catagories : {name : {eqi : "${v}"}}},`
  });
  return orStr.slice(0 , -1)
}
export const getProductByCatagory = (selectedCatagory ,page , sorting , pageSize  ) =>{
  if(!page){
    page = 1
  }
  if(!pageSize){
    pageSize = 10
  }
  if(!sorting){
    sorting = `asc`
  }

  return(
    gql`
    query GetProductByFilter{
      allProducts(filters : {or:[
        ${getProductByCatagoryFiterText(selectedCatagory)}
      ]},pagination : {page : ${page}, pageSize : ${pageSize} } , 
       sort : ["defualtPrice:${sorting}"]        
       ) 

      ${productgqlString}
    `
  )
}


export const GetProduct = gql`
query GetProduct{
  allProducts ${productgqlString}
`;




export const getSingleProduct = (id) =>{
  return (gql`query GetProduct{
    allProduct(id : ${id}){
       data {
        id,
        attributes {
          productName,
          productCode,
          warrenty,
          youtubeReviewLInkSingle,
          description,
          defualtPrice,
          
          ...productImage,
          ...variants,
          ...catagories,
          ...sub_catgories,
          ...brand
        }
      }
      
    }
  }
  fragment variants on AllProduct{
    variants{
      id,
      variantCode,
      color,
      InStock,
      variantPrice,
      ImageOfVariant{
        data {
          id,
          attributes{
            formats
            url,
          }
        }
      }
    }
  }
  fragment catagories on AllProduct{
    catagories{
      data{
        attributes{
          name
        }
      }
    }
  }
  fragment brand on AllProduct{
    brand{
      data{
        attributes{
          brandName,
          brandDetails,
          brandLogo{
            data{
              attributes{
                formats,
                url
              }
            }
          }
        }
      }
    }
  }
  fragment sub_catgories on AllProduct{
    sub_catagories{
      data{
        attributes{
          name
        }
      }
    }
  }
  fragment productImage on AllProduct{
    productImage{
      data{
        attributes{
          formats,
          url
        }
      }
    }
  }`)
}

export const getExtraCost = gql`
  query {
    extraCost
    {
      data{
        attributes{
          vat,
          shipingCost
        }
      }
    }
  }
`

export const getLogIn = (identifier , password)=>{
  return (
    gql`mutation {
      login( input : {identifier : "${identifier}", password : "${password}"}){
        jwt,
        user{
          id,
          username,
          email,  
        }
      }
    }`
  )
}

export const getRegister = (userState , addressState) =>{
  const userInfo =  objToGqlString(userState)

  if(addressState){
    const addresinfo = objToGqlString(addressState)
    return(
      gql`mutation{
        userReg(input : {${userInfo},  addressLine : {${addresinfo}}}
        ){
         jwt,
          user{
            id,
            username,
            email,
            gender,
          },
          message 
        }
      }`
    )
  }

  return(
    gql`mutation{
      userReg(input : {${userInfo}}
        ){
       jwt,
        user{
          id,
          username,
          email,
          gender,
        },
        message 
      }
    }`
  )
}

export const getAddress = (user_id)=>{
  return (
    gql`
    query{
      addresses(filters : {user_ref : {id : {eq : ${user_id}}}} ){
        data{
          id,
          attributes{
            address,
            streetAddress,
            city,
            state_Province_Region,
            zipCode,
            country,
            phoneNumber
          }
        }
      }
    }
    `
  )
}

export const mutatedAddress = (addressInfo , user_id )=>{
  const addressStr =  objToGqlString(addressInfo);
  return (
    gql`
    mutation{
      createAddress(data : {user_ref : ${user_id} ,${addressStr}
      }){
        data{
          id,
          attributes{
            address
          }
        }
      }
    }
    `
  )
}

export const mutationOrder = (ordersItem , delivaryAddressRef , paymentMethod) =>{
  const ordersItemStr =  (JSON.stringify(ordersItem)).replace( /"/g ,"")
  console.log(ordersItemStr)

  return(
    gql`
    mutation{
      MakeOrder(ordersItem: ${ordersItemStr}  , delivaryAddress : ${delivaryAddressRef} ,paymentMethod : "${paymentMethod}"){
        isSuccesfull,
        ordersInformation{
          data{
            id,
            attributes{
              totalPrice,
              totalVat,
              shipingCost,
              user_ref{
                data{
                  id,
                  attributes{
                    username,
                  }
                }
              }
              delivaryAddress{
                data{
                  id,
                  attributes{
                    zipCode,
                    phoneNumber,
                    city,
                    country,
                    address,
                    streetAddress,
                    state_Province_Region
                  }
                }
              }
              vatInPercentages,
              ordersItem{
                id,
                itemsTotalPrice,
                unitPrice,
                productId,
                variantsId,
                variantCode,
                variantColor,
                product_quantity,
                productName,
              }
              paymentMethod
            }
          }
        }
      }
    }
    `
  )

  
} 


export const getCategories = () => {
 
  return(
    gql`
    query{
      catagories{
        data{
          id,
          attributes{
            name
          }
        }
      }
    }
    `
  )
}
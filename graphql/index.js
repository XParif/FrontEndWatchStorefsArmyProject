import {  gql } from '@apollo/client';
export const GetProduct = gql`
query GetProduct{
  allProducts {
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
}
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

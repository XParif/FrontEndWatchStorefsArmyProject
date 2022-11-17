import React, { useState  , useEffect} from "react";
import { TabContainer, LeftSide, RightSide, Tab } from "./tab.styles";
import {
  BsArrowDownLeftCircleFill,
  BsChatRightQuoteFill,
  BsFillGearFill,
} from "react-icons/bs";
import { FaTruck, FaShoppingBag } from "react-icons/fa";
import Receive from "./tabComponent/receive";
import Return from "./tabComponent/return";
import Review from "./tabComponent/review";
import History from "./tabComponent/history";
import Settings from "./tabComponent/settings";
import { gql, useLazyQuery } from "@apollo/client";

const AllTabs = () => {
  const [calledOrderData , {data : ordeINfo , loading : orderFetchLoading }] = useLazyQuery(gql`query{
    orders{
      data{
        id,
        attributes{
          totalPrice,
          isConfirmed,
          shipingCost,
          ordersItem{
            id,
            productId
            ,productName,
            product_quantity,variantsId,variantCode,itemsTotalPrice,unitPrice,
          }
          vatInPercentages,
          delivaryAddress{
            data{
              id,
              attributes{
                address,
                streetAddress,
                state_Province_Region,zipCode,
                country,
                city
              }
            }
          },
          paymentMethod,
        }
      }
    }
  }`)
  const [active, setActive] = useState(()=>{calledOrderData() ; return 1});
  const [content, setContent] = useState(<Receive  ordeINfo = {ordeINfo}  />);
  useEffect(()=>{
    setContent(  <Receive ordeINfo={ordeINfo} />  );
  },[orderFetchLoading])

  const handleClick = (index) => {
    setActive(index);
    if (index === 1) {
      calledOrderData()
    
    } else if (index === 2) {
      setContent(Return);
    } else if (index === 3) {
      setContent(Review);
    } else if (index === 4) {
      setContent(History);
    } else if (index === 5) {
      setContent(Settings);
    }
  };

  

  return (
    <TabContainer>
      <LeftSide>
        <Tab onClick={() => {handleClick(1) ; handleClick(1)}} active={active === 1}>
          <FaTruck /> <div>Orders in Procces</div>
        </Tab>
        <Tab onClick={() => handleClick(2)} active={active === 2}>
          <BsArrowDownLeftCircleFill /> <div>Returns</div>
        </Tab>
        <Tab onClick={() => handleClick(3)} active={active === 3}>
          <BsChatRightQuoteFill /> <div>Review</div>
        </Tab>
        <Tab onClick={() => handleClick(4)} active={active === 4}>
          <FaShoppingBag /> <div>History</div>
        </Tab>
        <Tab onClick={() => handleClick(5)} active={active === 5}>
          <BsFillGearFill /> <div>Settings</div>
        </Tab>
      </LeftSide>

      <RightSide>{content}</RightSide>
    </TabContainer>
  );
};

export default AllTabs;

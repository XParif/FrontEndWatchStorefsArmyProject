import React, { useState } from "react";
import { TabContainer, LeftSide, RightSide, Tab, Content } from "./tab.styles";

function AllTabs() {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <TabContainer>
      {/*TODO: 
      Returns
      Review
      Order History
      Account Settings
      */}

      <LeftSide>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Returns
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Review
        </Tab>
      </LeftSide>

      <RightSide>
        <Content active={active === 0}>
          <h1>Hello Returns</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            molestias placeat inventore aspernatur magni quod doloremque,
            ratione quo veritatis ipsa voluptatem explicabo omnis culpa
            praesentium corrupti delectus nulla rem quibusdam eius repudiandae
            officiis iste eum saepe. Minus eligendi obcaecati tempore provident
            sequi architecto ad. Id nemo voluptas labore at quibusdam.
          </p>
        </Content>
        <Content active={active === 1}>
          <h1>Yo Yo Review</h1>
        </Content>
      </RightSide>
    </TabContainer>
  );
}

export default AllTabs;

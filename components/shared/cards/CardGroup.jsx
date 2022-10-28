import styled from "styled-components";
import Card from "./index";

const BaseCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardGroup = ({ list }) => {
  const cards = list.map((item) => <Card key={item.id} item={item} />);

  return <BaseCardGroup>{cards}</BaseCardGroup>;
};

export default CardGroup;

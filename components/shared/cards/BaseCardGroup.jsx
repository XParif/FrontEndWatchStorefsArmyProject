import styled from "styled-components";

const BaseCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardGroup = ({ cardCount }) => {
  const cards = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(<Card key={i} />);
  }
  return <BaseCardGroup>{cards}</BaseCardGroup>;
};

export default CardGroup;

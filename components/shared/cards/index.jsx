import styled from "styled-components";
import ImageBlock from "./imageBlock";
import TextBlock from "./textBlock";

const BaseCard = styled.div`
  margin: 1rem 0.5rem;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: scale(1.025);
  }
`;

const Card = ({item}) => {
  return (
    <BaseCard>
      <ImageBlock />
      <TextBlock item={item} />
    </BaseCard>
  );
};

export default Card
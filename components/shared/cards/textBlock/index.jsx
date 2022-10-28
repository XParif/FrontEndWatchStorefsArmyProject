import styled from "styled-components";
import BlockText from "../../texts/BlockText";
import {Rating} from "./Rating";
import PriceBlock from "./PriceBlock";
import CardButtonGroup from "./CardButtonGroup";

const TextBlockStyle = styled.div`
  padding: 1rem;
`;

const TextBlock = ({item}) => {
  return (
    <TextBlockStyle>
      <BlockText size="md">{item.title}</BlockText>
      <Rating rates={item.rating} />
      <PriceBlock price={item.price} offerPrice={item.offerPrice} />
      <CardButtonGroup />
    </TextBlockStyle>
  );
};

export default TextBlock;

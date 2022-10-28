import styled from "styled-components";
import { BlockText } from "../texts";
import { Rating } from "./Rating";
import PriceBlock from "./PriceBlock";
import CardButtonGroup from "./CardButtonGroup";

const TextBlockStyle = styled.div`
  padding: 1rem;
`;

const TextBlock = () => {
  return (
    <TextBlockStyle>
      <BlockText size="md">Lorem Ipsum is simply</BlockText>
      <Rating rates="5" />
      <PriceBlock />
      <CardButtonGroup />
    </TextBlockStyle>
  );
};

export default TextBlock;

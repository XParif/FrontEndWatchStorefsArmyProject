import styled from "styled-components";
import BlockText from "../../texts/BlockText";
import {Rating} from "./Rating";
import PriceBlock from "./PriceBlock";
import InlineText from '../../texts/InlineText';

const TextBlockStyle = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

const TextBlock = ({item}) => {
  const productTittle = item.productName.slice(0,20) + "...."
  return (
    <TextBlockStyle>
      <BlockText size="md" weight="semiBold">{productTittle}</BlockText>
      {/* <Rating rates={item.rating} /> */}
      <PriceBlock>
        <InlineText color="primary" size="md" weight="bold">
          ${item.defualtPrice}
        </InlineText>
      </PriceBlock>
    </TextBlockStyle>
  );
};

export default TextBlock;

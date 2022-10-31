import styled from "styled-components";
import InlineText from '../../texts/InlineText'

const PriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceBlock = ({price, offerPrice}) => {
  return (
    <PriceStyle>
      <InlineText size="md" color="primary" weight="semiBold">
        ${offerPrice}
      </InlineText>
      <InlineText size="md" cross>
        ${price}
      </InlineText>
    </PriceStyle>
  );
};

export default PriceBlock;

import styled from "styled-components";

const PriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceBlock = () => {
  return (
    <PriceStyle>
      <InlineText size="md" color="primary" weight="semiBold">
        $60.00
      </InlineText>
      <InlineText size="md" cross>
        $60.00
      </InlineText>
    </PriceStyle>
  );
};

export default PriceBlock;

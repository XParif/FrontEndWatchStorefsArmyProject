import styled from "styled-components";
const PriceStyle = styled.div`
  margin-top : .34rem;
  display: flex;
  justify-content: space-between;
`;

const PriceBlock = ({children}) => {
  return (
    <PriceStyle>
      {children}
    </PriceStyle>
  );
};

export default PriceBlock;

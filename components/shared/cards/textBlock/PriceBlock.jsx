import styled from "styled-components";
import { justifySpaceBetween } from './../../../../utils/display.styled';
const PriceStyle = styled.div`
  margin-top : .75rem;
  ${justifySpaceBetween}
`;

const PriceBlock = ({children}) => {
  return (
    <PriceStyle>
      {children}
    </PriceStyle>
  );
};

export default PriceBlock;

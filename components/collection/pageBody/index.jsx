import styled from "styled-components";
import Container from "../../shared/container/index";
import CategorySection from './categorySection'
import ProductSection from './productSection'
import { justifySpaceBetween } from './../../../utils/display.styled';

const PageBodyStyle = styled.div`
  & > div {
    ${justifySpaceBetween}
  }
`;

const PageBody = ({sorting ,qureParamsArray , list , filteredProduct , pagiNationINfo }) => {
  return (
    <PageBodyStyle>
      <Container>
        <CategorySection sorting = {sorting} list={list} qureParamsArray={qureParamsArray} />
        <ProductSection sorting = {sorting} qureParamsArray={qureParamsArray} pagiNationINfo ={pagiNationINfo}  filteredProduct= {filteredProduct} />
      </Container>
    </PageBodyStyle>
  );
};

export default PageBody;

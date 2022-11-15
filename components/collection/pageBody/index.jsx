import styled from "styled-components";
import Container from "../../shared/container/index";
import CategorySection from './categorySection'
import ProductSection from './productSection'

const PageBodyStyle = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const PageBody = ({qureParamsArray , list , filteredProduct }) => {
  return (
    <PageBodyStyle>
      <Container>
        <CategorySection list={list} qureParamsArray={qureParamsArray} />
        <ProductSection filteredProduct= {filteredProduct} />
      </Container>
    </PageBodyStyle>
  );
};

export default PageBody;

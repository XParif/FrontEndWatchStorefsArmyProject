import styled from "styled-components";
import CardGroup from '../../shared/cards/CardGroup'

const SectionBodyStyle = styled.div``;

const allProduct = [
  {
    id: 1,
    title: 'Watch 1',
    rating: 5,
    price: 200,
    offerPrice: 100
  },
  {
    id: 2,
    title: 'Watch 2',
    rating: 4,
    price: 250,
    offerPrice: 230
  },
  {
    id: 3,
    title: 'Watch 3',
    rating: 5,
    price: 150,
    offerPrice: 145
  },
  {
    id: 4,
    title: 'Watch 4',
    rating: 3,
    price: 120,
    offerPrice: 99
  },
]

const SectionBody = () => {
  return (
    <SectionBodyStyle>
      <CardGroup list={allProduct} />
    </SectionBodyStyle>
  );
};

export default SectionBody;

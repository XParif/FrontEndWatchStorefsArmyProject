import RelatedWatchStyle from "./RelatedWatchStyle";
import Title from './../../shared/texts/Title';
import ButtonBox from './../ButtonBox';
import Button from '../../shared/buttons'
import CardGroup from './../../shared/cards/CardGroup';



const allProduct = [
  {
    id: 1,
    title: "Watch 1",
    rating: 5,
    price: 200,
    offerPrice: 100,
  },
  {
    id: 2,
    title: "Watch 2",
    rating: 4,
    price: 250,
    offerPrice: 230,
  },
  {
    id: 3,
    title: "Watch 3",
    rating: 5,
    price: 150,
    offerPrice: 145,
  },
  {
    id: 4,
    title: "Watch 4",
    rating: 3,
    price: 120,
    offerPrice: 99,
  }
]

const RelatedWatch = () => {
  return (
    <RelatedWatchStyle>
      <Title size="lg" weight="semiBold">
        Related More Watches
      </Title>
      <CardGroup list={allProduct} />
      <ButtonBox>
        <Button fontSize="lg" bg="primary">
          Back to Collection
        </Button>
      </ButtonBox>
    </RelatedWatchStyle>
  );
};

export default RelatedWatch;

import Container from "../../shared/container";
import Background from "../../shared/backgrounds";
import SectionHeading from "../../shared/sectionHeaders";
import CardGroup from "../../shared/cards/CardGroup";
import TwoButtonPagination from "../../shared/twoButtonPagination";

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
  },
];

const Upcoming = () => {
  return (
    <Background bg="white">
      <Container>
        <SectionHeading size="lg" weight="semiBold" title="Upcoming">
          <TwoButtonPagination />
        </SectionHeading>
        <CardGroup list={allProduct} />
      </Container>
    </Background>
  );
};

export default Upcoming;

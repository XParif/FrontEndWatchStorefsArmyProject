import Background from "../../shared/backgrounds";
import Container from "../../shared/container";
import SectionHeading from "../../shared/sectionHeaders";
import CardGroup from "../../shared/cards/CardGroup";
import Button from "../../shared/buttons";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const ButtonList = ["All", "Classic", "Modern", "Smart Watch", "Men", "Women"];

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
  {
    id: 5,
    title: "watch 5",
    rating: 2,
    price: 120,
    offerPrice: 100,
  },
  {
    id: 6,
    title: "watch 6",
    rating: 5,
    price: 100,
    offerPrice: 99,
  },
  {
    id: 7,
    title: "watch 7",
    rating: 3,
    price: 150,
    offerPrice: 120,
  },
  {
    id: 8,
    title: "watch 8",
    rating: 4,
    price: 250,
    price: 210,
  },
];

const CustomButton = styled.div`
  display: flex;
  justify-content: center;
`;

const AllProduct = () => {
  return (
    <Background bg="white">
      <Container>
        <SectionHeading size="lg" weight="semiBold" title="All Products">
          <ButtonGroup list={ButtonList} />
        </SectionHeading>
        <CardGroup list={allProduct} />
        <CustomButton>
          <Button>
            Show More <FaChevronDown />{" "}
          </Button>
        </CustomButton>
      </Container>
    </Background>
  );
};

export default AllProduct;

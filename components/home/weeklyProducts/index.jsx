import Container from "../../shared/container";
import Title from "../../shared/title";
import styled from "styled-components";
import ProductItems from "./ProductItems";

const weeklyFiveViewProducts = [
  {
    id: 1,
    title: "Top View Watch 1",
    rating: 5,
    price: 10,
    offerPrice: 5,
  },
  {
    id: 2,
    title: "Top View Watch 2",
    rating: 4,
    price: 20,
    offerPrice: 15,
  },
  {
    id: 3,
    title: "Top View Watch 3",
    rating: 3,
    price: 30,
    offerPrice: 25,
  },
  {
    id: 4,
    title: "Top View Watch 4",
    rating: 5,
    price: 40,
    offerPrice: 35,
  },
  {
    id: 5,
    title: "Top View Watch 5",
    rating: 1,
    price: 50,
    offerPrice: 55,
  },
];
const weeklyFiveBestSellerProducts = [
  {
    id: 1,
    title: "Top BestSeller Watch 1",
    rating: 1,
    price: 200,
    offerPrice: 100,
  },
  {
    id: 2,
    title: "Top BestSeller Watch 2",
    rating: 2,
    price: 250,
    offerPrice: 230,
  },
  {
    id: 3,
    title: "Top BestSeller Watch 3",
    rating: 3,
    price: 150,
    offerPrice: 145,
  },
  {
    id: 4,
    title: "Top BestSeller Watch 4",
    rating: 5,
    price: 120,
    offerPrice: 99,
  },
  {
    id: 5,
    title: "Top BestSeller Watch 5",
    rating: 4,
    price: 220,
    offerPrice: 199,
  },
];

const WeeklyProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 5rem 0;
`;

const WeeklyProducts = () => {
  return (
    <>
      <Container>
        <WeeklyProductsContainer>
          <div className="viewProducts">
            <Title content="Weekly Top 5 View Products" />


            {weeklyFiveViewProducts.map((item , index) => (
              <div key={index}>

                <ProductItems
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  offerPrice={item.offerPrice}
                />
              </div>
            ))}
          </div>

          <div className="bestSellerProducts">
            <Title content="Weekly 5 Bestseller Products" />

            {weeklyFiveBestSellerProducts.map((item , index) => (

              <div key={index}>

                <ProductItems
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  offerPrice={item.offerPrice}
                />
              </div>
            ))}
          </div>
        </WeeklyProductsContainer>
      </Container>
    </>
  );
};

export default WeeklyProducts;

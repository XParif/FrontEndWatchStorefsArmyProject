import Background from "../../shared/backgrounds";
import Container from "../../shared/container";
import SectionHeading from "../../shared/sectionHeaders";
import CardGroup from "../../shared/cards/CardGroup";
import Button from "../../shared/buttons";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const ButtonList = ["All", "Classic", "Modern", "Smart Watch", "Men", "Women"];

const CustomButton = styled.div`
  display: flex;
  justify-content: center;
`;

const FeaturedProducts = ({list}) => {
  return (
    <Background bg="white">
      <Container>
        <SectionHeading size="lg" weight="semiBold" title="Featured Products" slug="Check & Get Your Desired Product !">
          {/* <ButtonGroup list={ButtonList} /> */}
        </SectionHeading>
        <CardGroup list={list} />
        <CustomButton>
          <Button>
            Show More <FaChevronDown />{" "}
          </Button>
        </CustomButton>
      </Container>
    </Background>
  );
};

export default FeaturedProducts;

import Background from "../../shared/backgrounds";
import Container from "../../shared/container";
import SectionHeading from "../../shared/sectionHeaders";
import CardGroup from "../../shared/cards/CardGroup";
import Button from "../../shared/buttons";
import ButtonGroup from "../../shared/buttons/ButtonGroup";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { justifySpaceCenter } from "../../../utils/display.styled";
import Link from "next/link";

const ButtonList = ["All", "Classic", "Modern", "Smart Watch", "Men", "Women"];

const CustomButton = styled.div`
  ${justifySpaceCenter}
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
          <Link href="/collections">
          <Button>
            Show More <FaChevronDown />{" "}
          </Button>
         </Link> 
        </CustomButton>
      </Container>
    </Background>
  );
};

export default FeaturedProducts;

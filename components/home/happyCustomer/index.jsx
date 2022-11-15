import styled from "styled-components";
import Container from "../../shared/container";
import SectionHeading from "../../shared/sectionHeaders";
import Background from "./../../shared/backgrounds";
import TwoButtonPagination from "./../../shared/twoButtonPagination";
import Review from "./Review";
import SectionBody from "./SectionBody";
import OurHappyCustomerStyle from "./OurHappyCustomerStyle";

const reviews = [
  {
    id: 1,
    profile: {
      name: "HM Azijul",
      image: "/images/review/profile.png",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: 2,
    profile: {
      name: "Elias Emon",
      image: "/images/review/profile.png",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: 3,
    profile: {
      name: "HM Nayem",
      image: "/images/review/profile.png",
    },
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const OurHappyCustomer = () => {
  return (
    <Background bg="white">
      <Container>
        <OurHappyCustomerStyle>
          <SectionHeading
            title="Our Happy Customer"
            size="lg"
            weight="semiBold"
          >
            <TwoButtonPagination />
          </SectionHeading>
          <SectionBody>
            {reviews.map((review) => <Review key={review.id} review={review} />)}
          </SectionBody>
        </OurHappyCustomerStyle>
      </Container>
    </Background>
  );
};

export default OurHappyCustomer;

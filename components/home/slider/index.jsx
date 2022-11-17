import { Carousel } from "react-responsive-carousel";
import Background from "../../shared/backgrounds";
import Container from "../../shared/container";

const handleClick = (index) => {
};

const Slider = () => {
  return (
    <Container>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          stopOnHover={false}
          showStatus={false}
          useKeyboardArrows={true}
          onClickItem={handleClick}
          >
          <img src="/images/slider/1.jpg" />
          <img src="/images/slider/2.webp" />
          <img src="/images/slider/3.webp" />
          <img src="/images/slider/4.webp" />
        </Carousel>

          </Container>
  );
};
export default Slider;

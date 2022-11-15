import styled from "styled-components";
import Image from "next/image";
import Title from "../../shared/title";
import Container from "../../shared/container";
import Button from "../../shared/buttons";
import { FaInfoCircle, FaHome } from "react-icons/fa";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 4.25rem;
`;

const Disclaimer = styled.span`
  color: ${({ theme }) => theme?.color?.primary};
  font-size: 0.94rem;
`;

const ImageContainer = styled.div`
  & img {
    max-width: 100%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 2rem 0 1rem 0;
`;

const MostPremiumWatch = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ImageContainer>
            {/* <Image src="/diamondWatch.jpg" alt="diamond-watch" layout="fill" />*/}
            {/* TODO: I face some size issue with next image component */}
            <Image src="/diamondWatch.jpg" alt="diamond-watch" />
          </ImageContainer>

          <div>
            <Title content="Most Premium Diamond Watch" />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <ButtonWrap>
              <Button>
                more details <FaInfoCircle />
              </Button>
              <Button bg="primary">
                want live try <FaHome />
              </Button>
            </ButtonWrap>

            <Disclaimer>
              *If You are Interested in our premium products. Click “Want Live
              Try” Button And Fill the form with your details, Our Sales person
              will knock your dour!!
            </Disclaimer>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default MostPremiumWatch;

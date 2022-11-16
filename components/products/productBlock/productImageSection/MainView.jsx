import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme?.color?.secondary};
  width: 500px;
  height: 500px;
  border-radius: 3px;
  margin: 0.5rem;

  /* @media screen and (min-width: 420px) and (max-width: 480px) {
    display: flex;
    position: absolute;
    bottom: 300px;
  } */
`;

const MainView = ({ ProductimageUrl, alterForImage }) => {
  return (
    <ImageContainer>
      <Image
        src={ProductimageUrl}
        alt={alterForImage}
        width="500"
        height="500"
      />
    </ImageContainer>
  );
};

export default MainView;

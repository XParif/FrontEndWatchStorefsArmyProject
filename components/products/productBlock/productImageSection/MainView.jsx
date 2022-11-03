import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme?.color?.secondary};
  width: 500px;
  height: 500px;
  border-radius: 3px;
  margin: 0.5rem;
`;

const MainView = () => {
  return (
    <ImageContainer>
      <Image src="/demo.png" alt="watch" width="500" height="500" />
    </ImageContainer>
  );
};

export default MainView;

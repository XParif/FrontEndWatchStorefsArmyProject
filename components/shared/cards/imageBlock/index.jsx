import styled from "styled-components";

const ImageBlockStyle = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme?.color?.secondary};
`;

const ImageBlock = () => {
  return (
    <ImageBlockStyle>
      <img src="/demo.png" alt="" />
    </ImageBlockStyle>
  );
};

export default ImageBlock;

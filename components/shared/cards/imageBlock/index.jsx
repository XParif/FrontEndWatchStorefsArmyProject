import styled from "styled-components";
import Image from "next/image";
const ImageBlockStyle = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme?.color?.secondary};
`;

const ImageBlock = ({url , productName}) => {
  return (
    <ImageBlockStyle>
      <Image width={300} height={300} src={`${url}`} alt={productName} />
    </ImageBlockStyle>
  );
};

export default ImageBlock;

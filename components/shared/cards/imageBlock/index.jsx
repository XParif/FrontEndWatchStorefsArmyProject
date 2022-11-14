import styled from "styled-components";
import Image from "next/image";
const ImageBlockStyle = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme?.color?.secondary};
  position: relative;
`;

const ImageBlock = ({url , productName}) => {
  return (
    <ImageBlockStyle>
      <Image layout="responsive" height={375} width={375} src={`${url}`} alt={productName} />
      {/* <Image layout="fill" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" src={`${url}`} alt={productName} /> */}
    </ImageBlockStyle>
  );
};

export default ImageBlock;

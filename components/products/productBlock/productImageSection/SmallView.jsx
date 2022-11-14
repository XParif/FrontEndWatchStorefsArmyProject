import styled from "styled-components";
import Image from "next/image";

const SmallViewStyle = styled.div`
  margin: 0.5rem;
  display: flex;
  gap: 0.6rem;
`;

const SingleImage = styled.div`
  background-color: ${({ bg, theme }) =>
    theme?.color[bg] ?? theme?.color?.secondary};
  border-radius: 3px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(0.9);
  }
`;

const SmallView = ({variants , variantsTensionReliefer}) => {
  return (
    <SmallViewStyle>

      {variants.map((item , index)=>{
        return (
          <SingleImage key={index} onClick={()=> variantsTensionReliefer(index , '🥵')} bg="primary">
            <Image src={item.variantsImage} alt="watch" width="160" height="160" />
          </SingleImage>
        )
      })}
    </SmallViewStyle>
  );
};

export default SmallView;

import Image from "next/image";
import styled from "styled-components";

const SmallViewStyle = styled.div`
  display: flex;
  gap: 0.6rem;
  height: 166px;

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    top: 0;
    /* display: block; */
  }
`;

const SingleImage = styled.div`
  /* background-color: ${({ bg, theme }) =>
    theme?.color[bg] ?? theme?.color?.secondary}; */
  border-radius: 3px;
  cursor: pointer;
  transition: 1s;
  border: ${((props) => props.border ? `3px solid ${props.theme?.color?.primary}` : '3px solid white')};
  /* border: 3px solid ${({theme}) => theme?.color?.primary}; */

  &:hover {
    transform: scale(0.9);
  }
`;

const SmallView = ({ variants, variantsTensionReliefer  , pointedVariantIndex}) => {
  return (
    <SmallViewStyle>
      {variants.map((item, index) => {
      console.log(pointedVariantIndex, index);
        return (
          <SingleImage
            key={index}
            onClick={() => variantsTensionReliefer(index, "🥵")}
            bg="primary"
            border={pointedVariantIndex === index}
          >
            <Image
              src={item.variantsImage}
              alt="watch"
              width="160"
              height="160"
            />
          </SingleImage>
        );
      })}
    </SmallViewStyle>
  );
};

export default SmallView;

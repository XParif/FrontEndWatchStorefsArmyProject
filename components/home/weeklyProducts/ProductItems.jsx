import styled from "styled-components";
import { FaCartPlus, FaInfo } from "react-icons/fa";
import Button from "../../shared/buttons";
import BlockText from "../../shared/texts/BlockText";
import { Rating } from "../../shared/cards/textBlock/Rating";
import PriceBlock from "../../shared/cards/textBlock/PriceBlock";
import Image from "next/image";

const Product = styled.div`
  display: grid;
  grid-template-columns: 9rem auto 9rem;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
`;

const ImageBox = styled.div`
  background-color: ${({ theme }) => theme?.color?.secondary};
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductItems = ({ title, rating, price, offerPrice }) => {
  return (
    <>
      <Product>
        <ImageBox>
          <Image src="/demo.png" height="150" width="150" />
        </ImageBox>

        <div>
          {/* <BlockText size="md">Lorem Ipsum is simply dummy...</BlockText> */}
          {/* <Rating rates={5} /> */}
          {/* <PriceBlock price={200} offerPrice={100} /> */}

          <BlockText size="md">{title}</BlockText>
          <Rating rates={rating} />
          <PriceBlock price={price} offerPrice={offerPrice} />
        </div>

        <ButtonWrap>
          <Button bg="primary">
            Add Card <FaCartPlus />
          </Button>
          <Button>
            Details <FaInfo />
          </Button>
        </ButtonWrap>
      </Product>
    </>
  );
};

export default ProductItems;

import styled from "styled-components";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from "../../shared/container";

const Wrap = styled.div`
  background-image: url("summerSale.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #333, #000);
    opacity: 0.5;
  }
`;

const Content = styled.div`
  grid-column: 4;
  z-index: 1;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme?.fontSizes?.lg};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  color: ${({ theme }) => theme?.color?.white};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Offer = styled.div`
  border: 3px solid ${({ theme }) => theme?.color?.white};
  border-radius: 0.5rem;
  display: inline-block;
  padding: 1.2rem;

  & p {
    color: ${({ theme }) => theme?.color?.white};
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    margin-bottom: 0.4rem;
  }
  & span {
    color: ${({ theme }) => theme?.color?.primary};
    font-size: ${({ theme }) => theme?.fontSizes?.lg};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
`;

// const Btn = styled.a`
//   color: #fff;
//   font-size: 1.4rem;
//   text-decoration: none;
// `;
const ShopBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  & * {
    color: ${({ theme }) => theme?.color?.white};
    font-size: ${({ theme }) => theme?.fontSizes?.md};
    text-decoration: none;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme?.color?.primary};
    }
  }
`;
// TODO: Have little issues with hover link

const SummerSale = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Content>
            <Title>Summer Sale</Title>
            <Offer>
              <p>
                up to <span>50%</span> off
              </p>
              <ShopBtn>
                <Link href="/collections">Shop Now</Link>
                <FaLongArrowAltRight />
              </ShopBtn>
            </Offer>
          </Content>
        </Wrap>
      </Container>
    </>
  );
};

export default SummerSale;

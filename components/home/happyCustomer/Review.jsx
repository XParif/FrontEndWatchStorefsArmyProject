import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import BlockText from "../../shared/texts/BlockText";
import Bar from "../../shared/texts/Bar";
import { alignItemsCenter } from './../../../utils/display.styled';

const ReviewStyle = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 10px;
  ${alignItemsCenter}
  flex-direction: column;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const FaQuoteLeftStyle = styled.div`
  color: ${({ theme }) => theme?.color?.primary};
  font-size: 2rem;
`;

const Reviewer = styled.div`
  ${alignItemsCenter}
  flex-direction: column;
  gap: .5rem;
  & > img {
    width: 70px;
    border-radius: 50%;
  }
`;

const Review = ({review}) => {
  return (
    <ReviewStyle>
      <FaQuoteLeftStyle>
        <FaQuoteLeft />
      </FaQuoteLeftStyle>
      <BlockText>
        {review.comment}
      </BlockText>
      <Bar />
      <Reviewer>
        <img src={review.profile.image} alt="Profile Picture" />
        <BlockText>{review.profile.name}</BlockText>
      </Reviewer>
    </ReviewStyle>
  );
};

export default Review;

import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Star = styled.span`
  color: #ffb61f;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export const SingleStar = () => {
  return (
    <Star>
      <FaStar />
    </Star>
  );
};

export const Multiple = styled.div`
  margin: 0.5rem 0;
  letter-spacing: 1rem;
`;

export const Rating = ({ rates }) => {
  const stars = [];
  let i = 0;
  while (i < rates) {
    stars.push(<SingleStar key={i} />);
    i++;
  }
  return <Multiple>{stars}</Multiple>;
};

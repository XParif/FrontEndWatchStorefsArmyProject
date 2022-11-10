import styled from "styled-components";
import Title from "../../shared/texts/Title";
import Slug from '../texts/Slug';

const SectionHeadingStyle = styled.div`
  margin: 1rem 0;
  // display: flex;
  // justify-content: space-between;
  align-items: baseline;
`;



const SectionHeading = ({ title , slug , size, weight, children }) => {
  return (
    <SectionHeadingStyle>
      <Title size={size} weight={weight}>
        {title}
      </Title>
      {slug ? (<Slug size="sm" weight="medium">
        {slug}
      </Slug>) : ""}
      {children}
    </SectionHeadingStyle>
  );
};

export default SectionHeading;

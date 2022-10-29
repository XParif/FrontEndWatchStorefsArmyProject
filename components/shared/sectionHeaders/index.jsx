import styled from "styled-components";
import Title from "../../shared/texts/Title";

const SectionHeadingStyle = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SectionHeading = ({ title, size, weight, children }) => {
  return (
    <SectionHeadingStyle>
      <Title size={size} weight={weight}>
        {title}
      </Title>
      {children}
    </SectionHeadingStyle>
  );
};

export default SectionHeading;

import styled from "styled-components";
import Title from "../../shared/texts/Title";
import Slug from "../texts/Slug";

const SectionHeadingStyle = styled.div`
  margin: 1rem 0;
  // display: flex;
  // justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: 720px) and (max-width: 976px) {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 420px) and (max-width: 480px) {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

const SectionHeading = ({ title, slug, size, weight, children }) => {
  return (
    <SectionHeadingStyle>
      <Title size={size} weight={weight}>
        {title}
      </Title>
      {slug ? (
        <Slug size="default" weight="medium">
          {slug}
        </Slug>
      ) : (
        ""
      )}
      {children}
    </SectionHeadingStyle>
  );
};

export default SectionHeading;

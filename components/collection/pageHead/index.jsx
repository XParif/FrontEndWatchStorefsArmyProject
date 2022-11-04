import styled from "styled-components";
import Background from "./../../shared/backgrounds/index";
import Container from "./../../shared/container/index";
import BlockText from "./../../shared/texts/BlockText";
import Breadcumb from "./../../shared/breadcumb/index";

const PageHeadStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PageHead = ({ title }) => {
  return (
    <Background bg="white">
      <Container>
        <PageHeadStyle>
          <BlockText size="lg" weight="semiBold">
            {title}
          </BlockText>
          <Breadcumb />
        </PageHeadStyle>
      </Container>
    </Background>
  );
};

export default PageHead;

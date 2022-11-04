import styled from "styled-components";

const SectionBar = styled.div`
  background: ${({ theme }) => theme?.color?.primary};
  border-radius: 0.1rem;
  width: 100%;
  height: 0.02rem;
  margin: 1rem 0;
`;

export default SectionBar;

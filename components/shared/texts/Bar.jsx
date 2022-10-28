import styled from "styled-components";

const Bar = styled.div`
  background: ${({ theme }) => theme?.color?.primary};
  border-radius: 0.3rem;
  width: ${({ width, theme }) => theme?.bar[width] ?? theme?.bar?.normal};
  height: 0.25rem;
  margin: 0.37rem 0 1.6rem 0;
  display: inline-block;
`;

export default Bar;

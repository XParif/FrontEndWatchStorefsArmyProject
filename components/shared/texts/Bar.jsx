import styled from "styled-components";

const Bar = styled.div`
  background: ${({ theme }) => theme?.color?.primary};
  border-radius: 0.3rem;
  width: ${({ width, theme }) =>
    theme?.bar.width[width] ?? theme?.bar?.width.normal};
  height: ${({ height, theme }) =>
    theme?.bar.height[height] ?? theme?.bar?.height?.md};
  margin: 0.37rem 0 0.2rem 0;
  display: inline-block;
`;

export default Bar;

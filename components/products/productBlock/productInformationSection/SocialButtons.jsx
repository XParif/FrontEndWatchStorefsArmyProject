import styled from "styled-components";

const SocialButtons = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme?.color?.primary};
  display: flex;
  gap: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export default SocialButtons;

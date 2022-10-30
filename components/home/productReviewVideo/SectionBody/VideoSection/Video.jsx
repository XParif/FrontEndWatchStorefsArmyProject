import styled from "styled-components";

const Video = styled.div`
  width: 190px;
  height: 100px;
  border-radius: 10px;
  margin: 1rem;
  background-color: ${({ theme }) => theme?.color?.primary};
`;

export default Video;

import styled from "styled-components";

const H3 = styled.h3`
  /* font-size: 1.6rem; */
  /* font-size: ${(props) => props.theme?.fontSizes?.lg}; */
  font-size: ${({ theme }) => theme?.fontSizes?.lg};
  /* font-weight: 600; */
  font-weight: ${({ theme }) => theme?.fontWeight.semiBold};
  /* color: #333; */
  color: ${({ theme }) => theme?.color?.textColor};
`;
const Bar = styled.div`
  background: ${({ theme }) => theme?.color?.primaryColor};
  border-radius: 0.3rem;
  width: 3.2rem;
  height: 0.25rem;
  margin: 0.37rem 0 1.6rem 0;
`;

const Title = ({ content }) => {
  return (
    <>
      <H3>{content}</H3>
      <Bar />
    </>
  );
};

export default Title;

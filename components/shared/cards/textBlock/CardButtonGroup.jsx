import styled from "styled-components";

const ButtonGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  padding : 0.5rem;
`;

const CardButtonGroup = ({children}) => {
  return (
    <ButtonGroupStyle>
      {children}
    </ButtonGroupStyle>
  );
};

export default CardButtonGroup;

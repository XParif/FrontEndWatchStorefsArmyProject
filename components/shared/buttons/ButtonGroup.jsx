import styled from "styled-components";
import Button from "./";

const ButtonGroupStyle = styled.div`
  & button {
    background-color: white;
    margin-left: 0.5rem;
  }

  & button:hover {
    background-color: ${({ theme }) => theme?.color?.primary};
  }
`;

const ButtonGroup = ({ children, fontSize, list }) => {
  const ButtonList = [];
  for (let i = 0; i < list.length; i++) {
    ButtonList.push(
      <Button fontSize={fontSize} key={i}>
        {list[i]}
        {children}
      </Button>
    );
  }
  return <ButtonGroupStyle>{ButtonList}</ButtonGroupStyle>;
};

export default ButtonGroup;

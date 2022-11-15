import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: ${({ bg, theme }) =>
    bg === "primary" ? theme?.color?.primary : theme?.color?.secondary};

  border: 1px solid
    ${({ bg, theme }) =>
      bg === "primary" ? theme?.color?.secondary : theme?.color?.primary};

  color: ${({ bg, theme }) =>
    bg === "primary" ? theme?.color?.secondary : theme?.color?.primary};

  font-size: ${({ fontSize, theme }) => theme?.fontSizes[fontSize] ?? "1rem"};

  padding: ${({ shape, theme }) =>
    shape === "square" ? "0.5rem" : "0.5rem 0.85rem"};

  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.5s;

  & > * {
    padding-top: 0.2em;
    margin-left: 0.2em;
  }

  &:hover {
    background-color: ${({ theme }) => theme?.color?.hover};
    color: ${({ theme }) => theme?.color?.white};
    border: 1px solid ${({ theme }) => theme?.color?.hover};
  }
`;

export const RedButton = styled.button`
background-color: transparent;
border: none;
color: ${({ theme }) => theme?.color?.red};
font-size: 25px;
transition: 0.5s;
opacity: 0.5;
cursor: pointer;
&:hover {
  opacity: 1;
}
`;

const Button = ({ children, bg, fontSize, shape, onClick, type }) => {
  return (
    <BaseButton bg={bg} fontSize={fontSize} shape={shape} onClick={onClick} type={type}>
      {children}
    </BaseButton>
  );
};

export default Button;

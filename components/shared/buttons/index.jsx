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

  border-radius: 10px;
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

const Button = ({ children, bg, fontSize, shape, onClick }) => {
  return (
    <BaseButton bg={bg} fontSize={fontSize} shape={shape} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;

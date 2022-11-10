import styled from "styled-components";

const SelectStyle = styled.div`
  & > select {
    position: relative;
    min-width: 200px;
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme?.color?.primary};
    border-radius: 5px;
    background: ${({ theme }) => theme?.color?.secondary};
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
  }
`;

const SelectBox = ({ children }) => {
  return (
    <SelectStyle>
      {children}
    </SelectStyle>
  );
};

export default SelectBox;

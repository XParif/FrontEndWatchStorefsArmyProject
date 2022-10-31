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

const SelectBox = ({ list }) => {
  return (
    <SelectStyle>
      <select required="required">
        <option value="" disabled="disabled" selected="selected">
          Select option
        </option>
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </SelectStyle>
  );
};

export default SelectBox;

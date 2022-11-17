import styled from "styled-components";

const CheckboxStyle = styled.div`
  display: flex;
  align-items: baseline;
  & > input {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    background-color: ${({ theme }) => theme?.color?.primary};
  }
`;



const Checkbox = ({ text, handleClick }) => {

  return (
    <CheckboxStyle >
      <input
        type="checkbox"
        id={text}
        name={text}
        value={text}
        onChange={handleClick} 
      />
      <label for={text} >{text}</label>
    </CheckboxStyle>
  );
};

export default Checkbox;

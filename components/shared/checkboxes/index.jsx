import styled from "styled-components";

const CheckboxStyle = styled.div`
  & > input {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Checkbox = ({ text }) => {
  return (
    <CheckboxStyle>
      <input type="checkbox" id={text} name={text} value={text} />
      <label for={text}>{text}</label>
    </CheckboxStyle>
  );
};

export default Checkbox;

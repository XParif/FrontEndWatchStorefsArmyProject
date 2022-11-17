import SelectStyle from './SelectBoxs.styled';

const SelectBox = ({ children }) => {
  return (
    <SelectStyle>
      {children}
    </SelectStyle>
  );
};

export default SelectBox;

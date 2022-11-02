import styled from "styled-components";
import Checkbox from "./../../../shared/checkboxes/index";
import Title from "./../../../shared/texts/Title";

const CheckboxGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryStyle = styled.div`
  margin-bottom: 2rem;
`;

const Category = ({ title, list }) => {
  return (
    <CategoryStyle>
      <Title size="md" weight="semiBold">
        {title}
      </Title>
      <CheckboxGroupStyle>
        {list.map((item) => (
          <Checkbox text={item} />
        ))}
      </CheckboxGroupStyle>
    </CategoryStyle>
  );
};

export default Category;

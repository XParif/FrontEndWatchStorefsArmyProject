import styled from "styled-components";
import Title from "../shared/texts/Title";

const FDetails = styled.p`
  font-size: ${({ theme }) => theme?.fontSizes?.default};
  margin-bottom: 5px;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
`;

const FBodyItem = (props) => {
  return (
    <div>
      <TitleContainer>
        <Title size="md" weight="semiBold">
          {" "}
          {props.title}
        </Title>
      </TitleContainer>
      <FDetails>{props.line1}</FDetails>
      <FDetails>{props.line2}</FDetails>
      <FDetails>{props.line3}</FDetails>
    </div>
  );
};

export default FBodyItem;

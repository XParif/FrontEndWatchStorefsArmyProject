import styled from "styled-components";
import { Title } from "../Shared/texts";

const FDetails = styled.p``;

const FBodyItem = (props) => {
  return (
    <div>
      <Title size="md" weight="medium">
        {" "}
        {props.title}
      </Title>
      <FDetails>{props.line1}</FDetails>
      <FDetails>{props.line2}</FDetails>
      <FDetails>{props.line3}</FDetails>
    </div>
  );
};

export default FBodyItem;

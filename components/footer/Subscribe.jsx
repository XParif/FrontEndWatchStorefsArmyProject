import { FaRegPaperPlane } from "react-icons/fa";
import styled from "styled-components";
import Search from "../shared/searchs";
import Title from "./../shared/texts/Title";

const SubscribeStyle = styled.div`
  & button {
    background-color: ${({ theme }) => theme?.color?.primary};
    color: ${({ theme }) => theme?.color?.white};
  }
`;
const Subscribe = (props) => {
  return (
    <SubscribeStyle>
      <Title size="md" weight="medium">
        {" "}
        {props.title}
      </Title>
      <Search placeholder="Subcribe for special discount">
        Subscribe &nbsp;
        <FaRegPaperPlane />
      </Search>
    </SubscribeStyle>
  );
};

export default Subscribe;

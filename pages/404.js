import Container from "../components/shared/container";
import NotFoundContainer from "./../components/404/NotFoundContainer";
import ErrorCode from "./../components/404/ErrorCode";
import BlockText from "./../components/shared/texts/BlockText";
import CustomButton from "./../components/404/CustomButton";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <BlockText size="lg">
          {`Oops, The Page you are looking for can't be found!`}
        </BlockText>
        <CustomButton bg="primary" color="white">
          <FaHome />
          <Link href="/">Return To Homepage </Link>
        </CustomButton>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;

// import { BsWatch } from "react-icons/bs";
import Link from "next/link";
import styled from "styled-components";
const LogoContainer = styled.h1`
  color: ${({ theme }) => theme?.color?.white};
`;
const LogoStyle = styled.img`
  width: 180px;
`;

const BrandLogo = (props) => {
  return (
    <Link href="/">
      <LogoContainer>
        {/* <BsWatch /> */}
        Watch Store
      </LogoContainer>
    </Link>
    //  <LogoStyle src="logo.png" alt="Logo" />
  );
};

export default BrandLogo;

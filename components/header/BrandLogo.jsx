// import { BsWatch } from "react-icons/bs";
import styled from "styled-components";
const LogoContainer = styled.h1`
  color: White;
`;
const LogoStyle = styled.img`
  width: 180px;
`;

const BrandLogo = (props) => {
  return (
    <LogoContainer>
      {/* <BsWatch /> */}
      Watch Store
    </LogoContainer>
    //  <LogoStyle src="logo.png" alt="Logo" />
  );
};

export default BrandLogo;

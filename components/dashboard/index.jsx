import Link from "next/link";
import styled from "styled-components";
import { BaseButton } from "../shared/buttons";
import Container from "../shared/container";
import SectionBar from "../shared/texts/SectionBar";

const Wrap = styled.div`
  padding: 2rem 0 4rem 0;
`;

const Top = styled.div``;
const Body = styled.div``;

const Breadcrumb = styled.ul`
  & li {
    display: inline;
    font-size: ${({ theme }) => theme?.fontSizes?.md};
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};

    :nth-child(2) {
      padding: 0 0.5rem;
    }
    :last-child {
      & a {
        color: ${({ theme }) => theme?.color?.primary};
      }
    }
    & a:hover {
      color: ${({ theme }) => theme?.color?.primary};
    }
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;
`;

const SignOutButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme?.fontSizes?.md};
  padding: 0.7rem 2.5rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const Picture = styled.div`
  height: 8rem;
  width: 8rem;

  & img {
    width: 100%;
    border-radius: 50%;
  }
`;
const Details = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    color: ${({ theme }) => theme?.color?.text};
  }
  p {
    color: ${({ theme }) => theme?.color?.text};
    font-size: ${({ theme }) => theme?.fontSizes?.md};
  }
`;

const Dashboard = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Top>
            <Breadcrumb>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </Breadcrumb>

            <TopContent>
              <Profile>
                <Picture>
                  <img src="/HM_Azijul.jpg" alt="Profile Picture" />
                </Picture>

                <Details>
                  <h3>HM Azijul</h3>
                  <p>
                    Madaripur sadar, Dhaka, <br />
                    Bangladesh
                  </p>
                </Details>
              </Profile>
              <div>
                <SignOutButton>Sign Out</SignOutButton>
              </div>
            </TopContent>
          </Top>
          <SectionBar />
          <Body></Body>
        </Wrap>
      </Container>
    </>
  );
};

export default Dashboard;

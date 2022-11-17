import Link from "next/link";
import styled from "styled-components";
import { BaseButton } from "../shared/buttons";
import Container from "../shared/container";
import SectionBar from "../shared/texts/SectionBar";
import AllTabs from "./allTabs";
import { alignItemsCenter } from './../../utils/display.styled';
import { gql, useQuery , useLazyQuery } from '@apollo/client';
import { Loading2 } from '../../apolloClient/index';

const Wrap = styled.div`
  padding: 1.5rem 0 5rem 0;
  background-color: #f5f6f8;
`;

const Top = styled.div``;
const Body = styled.div`
  padding-top: 2.5rem;
`;

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
      color: ${({ theme }) => theme?.color?.primaryDarkShade};
    }
  }
`;

const TopContent = styled.div`
  ${alignItemsCenter}
  justify-content: space-between;
  padding: 1.5rem 0 1rem 0;
`;

const SignOutButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme?.fontSizes?.md};
  padding: 0.5rem 2rem;
  :hover {
    background-color: ${({ theme }) => theme?.color?.red};
    border: 1px solid ${({ theme }) => theme?.color?.red};
  }
`;

const Profile = styled.div`
${alignItemsCenter}
  gap: 1.5rem;
`;
const Picture = styled.div`
  height: 6rem;
  width: 6rem;

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
   const {data : userData , loading , error} = useQuery(gql`query{
    me{
      id,
      email,
      username
    }
  }`)

  


  if(loading){
    Loading2(true)
  }else{
    Loading2(false)
  }

  return (
    <>
      <Wrap>
        <Container>
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
                  <img src="/useImage.png" alt="Profile Picture" />
                  {/* TODO:issues when i use nextjs image component, i faced some problem in design. so i use here html img tag. in future hope we can solve it */}
                </Picture>

                <Details>
                  <h3>{userData?.me?.username}</h3>
                  <p>
                  {userData?.me?.email}
                  </p>
                </Details>
              </Profile>
            </TopContent>
          </Top>
          <SectionBar />

          <Body>
            <AllTabs userID={userData?.me?.id} />
          </Body>
        </Container>
      </Wrap>
    </>
  );
};

export default Dashboard;

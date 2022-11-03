import styled from "styled-components";

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  grid-column: 1/3;
`;
export const RightSide = styled.div`
  grid-column: 3/-1;
  background-color: ${({ theme }) => theme?.color?.white};
  color: ${({ theme }) => theme?.color?.text};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  position: relative;

  font-size: ${({ theme }) => theme?.fontSizes?.md};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  background-color: ${(props) => (props.active ? "#7678ed" : "#f5f6f8")};
  color: ${(props) => (props.active ? "#fff" : "#333")};

  padding: 1rem 0;
  border-radius: 0.3rem;
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme?.color?.primary};
    color: ${({ theme }) => theme?.color?.white};
  }
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;

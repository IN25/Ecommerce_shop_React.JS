import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 80px;

  @media screen and (max-width: 800px) {
    margin: 1rem 0;
    margin-bottom: 4rem;
  }
`;

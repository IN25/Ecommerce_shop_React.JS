import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;

export const LogoContainer = styled(Link)`
  margin-left: 6.6rem;

  @media screen and (max-width: 800px) {
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5.5rem;

  @media screen and (max-width: 800px) {
    margin-right: 1.5rem;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;

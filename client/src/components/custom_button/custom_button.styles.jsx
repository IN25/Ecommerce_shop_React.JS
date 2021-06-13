import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background: #4285f4;
  color: white;

  &:hover {
    background: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.inverted) {
    return invertedButtonStyles;
  }

  return props.isGoogleSignIn ? googleSignInStyles : "";
};

export const CustomButtonContainer = styled.button`
  width: 180px;
  height: 55px;
  background: #000;
  color: white;
  border: none;
  margin-top: 1rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}

  @media screen and (max-width: 800px) {
    width: 8rem;
    height: 3rem;
    font-size: 0.7rem;
  }
`;

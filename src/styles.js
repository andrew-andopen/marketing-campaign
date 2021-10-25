import styled, { css, createGlobalStyle } from "styled-components";

export const OpacityFade = css`
  transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
`;

export const GlobalStyle = createGlobalStyle`
html, body {
  overflow-x: hidden;
}
`;

export const Overflow = styled.div`
  height: 250vh;

  @media only screen and (max-width: 768px) {
    height: 400vh;
  }
`;

export const AppContainer = styled.main`
  width: 100vw;
  display: flex;
`;

export const StyledH1 = styled.h1`
  font-family: "Saol", sans-serif;
  font-size: 4vw;
  line-height: 1;
  margin-bottom: ${({ $form }) => ($form ? "1.2rem" : "3rem")};
  opacity: ${({$visibility}) => ($visibility === 'hide' ? 0 : 1)};
  ${OpacityFade}

  @media only screen and (max-width: 1440px) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: ${({ $form }) =>
      $form ? "calc(1.8vw + 1vh + 0.8vmin)" : "3.2rem"};
  }

  @media only screen and (max-width: 500px) {
    font-size: ${({ $form }) => ($form ? "24px" : "40px")};
  }
`;

export const StyledP = styled.p`
  font-family: Leitura;
  font-size: 1.5rem;
  line-height: 2rem;
  opacity: ${({$visibility}) => ($visibility === 'hide' ? 0 : 1)};
  ${OpacityFade}

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledSmallP = styled.p`
  font-family: NittiLight;
  font-size: 16px;
  text-align: center;
`;

export const StyledPEmphasised = styled.span`
  font-family: LeituraMedium;
`

export const StyledButton = styled.button`
  font-family: NittiMedium;
  margin-top: ${({ $submit }) => ($submit ? "1rem" : "3rem")};
  padding: 16px 32px;
  background: #141414;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #32433a;
    transform: scale(1.02);
  }

  @media only screen and (max-width: 768px) {
    display: ${({ $formRelease }) => ($formRelease ? "none" : "block")};
  }
`;

export const StyledLink = styled.a`
  font-family: NittiMedium;
  margin-top: 3rem;
  display: inline-block;
  padding: 16px 32px;
  background: #141414;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    background: #32433a;
    transform: scale(1.02);
  }
`;

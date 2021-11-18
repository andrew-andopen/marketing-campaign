import React, { useState } from "react";

import styled from "styled-components";

import Logo from "../../images/ao_logo.svg";
import Arrow from "../../images/dropdown_arrow.png";

import {
  StyledH1,
  StyledP,
  StyledSmallP,
  StyledButton,
  OpacityFade,
} from "../../styles";

export const StyledPanel = styled.section`
  width: 50vw;
  margin-left: 50vw;
  height: 100vh;
  background: #faf7f3;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    height: 100vh;
    margin-top: 100vh;
  }
`;

export const StyledLogo = styled.img`
  filter: invert(1) brightness(2);

  max-width: 140px;
  margin-bottom: 5rem;

  ${OpacityFade}

  @media only screen and (max-width: 1440px) {
    max-width: 100px;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 768px) {
    visibility: ${({ $success }) => ($success ? "visiible" : "hidden")};
  }

  @media only screen and (max-width: 500px) {
    max-width: 80px;
  }
`;

export const StyledArrow = styled.img`
  width: 24px;
`;

// const scrollAnimation = keyframes`
//   0% {
//       transform: translate(0, 0)
//   }

//   50% {
//       transform: translate(0, 40%)
//   }
//   100% {
//       transform: translate(0, 0)
//   }
// `;

/* export const IndicatorContainer = styled.div`
  position: relative;
  bottom: 100px;
  right: 100px;
  display: flex;
  justify-content: flex-end;
  animation-name: ${scrollAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  opacity: ${({ $visibility }) => ($visibility === "hide" ? 0 : 1)};

  display: none;

  @media only screen and (max-width: 500px) {
    right: 3rem;
    bottom: 3rem;
  }
`; */

/* export const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 100px;
  right: 100px; 
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  opacity: ${({ $visibility }) => ($visibility === "hide" ? 0 : 1)};
  @media only screen and (max-width: 500px) {
    right: 3rem;
    bottom: 3rem;
  }
`; */

export const StyledSubscript = styled(StyledSmallP)`
  margin-top: 3rem;

  @media only screen and (max-width: 500px) {
    margin-top: 1.5rem;
  }
`;

export const StyledFixed = styled.div`
  position: relative;
  padding: 8rem;
  transition: opacity 0.5s;

  @media only screen and (max-width: 1440px) {
    padding: 6rem;
  }

  @media only screen and (max-width: 1200px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
  }

  @media only screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

const RightPanel = ({
  content,
  imageNumber,
  handleShowFormPanel,
  mobileBottom,
}) => {
  return (
    <StyledPanel>
      <StyledFixed>
        <StyledLogo src={Logo} $color={`${mobileBottom && "white"}`} />
        <StyledH1 $visibility={`${mobileBottom && "hide"}`}>
          {content.title}
        </StyledH1>
        <StyledP $visibility={`${mobileBottom && "hide"}`}>
          {content.body}
        </StyledP>

        <StyledButton $formRelease onClick={() => handleShowFormPanel(true)}>
        Get in touch
        </StyledButton>

        {/* {imageNumber === 4 && (
          <StyledSubscript>
            *Gifts are subject to timelines and availability.
          </StyledSubscript>
        )}

        {imageNumber === 5 && (
          <StyledButton $formRelease onClick={() => handleShowFormPanel(true)}>
            Care to learn more?
          </StyledButton>
        )} */}
      </StyledFixed>
      {/* {imageNumber === 5 ? null : (
        <IndicatorContainer>
          <Indicator $visibility={`${mobileBottom && "hide"}`}>
            <StyledSmallP>Scroll to read</StyledSmallP>
            <StyledArrow src={Arrow} />
          </Indicator>
        </IndicatorContainer>
      )} */}
    </StyledPanel>
  );
};

export default RightPanel;

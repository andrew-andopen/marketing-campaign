import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

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
  height: 300vh;
  background: #efeae1;
  padding: 8rem 8rem;
  position: relative;

  @media only screen and (max-width: 1200px) {
    padding: 3rem 3rem;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    height: 300vh;
  }

  @media only screen and (max-width: 500px) {
    padding: 3rem;
  }
`;

export const StyledLogo = styled.img`
  max-width: 140px;
  margin-bottom: 5rem;

  ${OpacityFade}

  @media only screen and (max-width: 500px) {
    max-width: 80px;
  }
`;

export const StyledArrow = styled.img`
  width: 24px;
`;

const scrollAnimation = keyframes`
  0% {
      transform: translate(0, 0)
  }

  50% {
      transform: translate(0, 40%)
  }
  100% {
      transform: translate(0, 0)
  }
`;

export const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 100px;
  right: 100px;
  animation-name: ${scrollAnimation};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 500px) {
    right: 3rem;
  }
`;

export const StyledFixed = styled.div`
  position: fixed;
  padding-right: 8rem;
  transition: opacity 0.5s;

  @media only screen and (max-width: 1200px) {
    padding-right: 3rem;
  }

  @media only screen and (max-width: 500px) {
    padding-right: 3rem;
  }
`;

export const StyledRelative = styled.div`
  position: relative;
`;

const RightPanel = ({
  content,
  imageNumber,
  handleShowFormPanel,
  mobileBottom,
}) => {
  console.log(mobileBottom);

  return (
    <StyledPanel>
      <StyledFixed>
        <StyledRelative>
          <StyledLogo
            src={Logo}
            className={`${mobileBottom ? "white" : null}`}
          />
          <StyledH1 className={`${mobileBottom ? "hide" : "display"}`}>
            {content.title}
          </StyledH1>
          <StyledP className={`${mobileBottom ? "hide" : "display"}`}>
            {content.body}
          </StyledP>

          {imageNumber === 5 && (
            <StyledButton
              $formRelease
              onClick={() => handleShowFormPanel(true)}
            >
              Care to have a chat?
            </StyledButton>
          )}
        </StyledRelative>
      </StyledFixed>
      {imageNumber === 5 ? null : (
        <Indicator className={`${mobileBottom ? "hide" : "display"}`}>
          <StyledSmallP>Scroll to read</StyledSmallP>
          <StyledArrow src={Arrow} />
        </Indicator>
      )}
    </StyledPanel>
  );
};

export default RightPanel;

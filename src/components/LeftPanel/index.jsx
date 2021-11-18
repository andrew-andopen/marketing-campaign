import React, { useState, useEffect, useRef } from "react";

import styled, { keyframes } from "styled-components";
import Arrow from "../../images/dropdown_arrow.png";
import { StyledButton, StyledSmallP } from "../../styles";

export const StyledPanel = styled.section`
  width: 50vw;
  height: 100vh;
  background-color: ${(props) => props.content.color};
  position: relative;
  transition: background-color 0.5s linear;
  position: fixed;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const StyledImage = styled.img`
  opacity: ${({ $opacity }) => ($opacity === "display" ? 1 : 0)};
  width: 80%;
  transition: 0.2s linear;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;
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

export const IndicatorContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  display: flex;
  justify-content: flex-end;
  animation-name: ${scrollAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  opacity: ${({ $visibility }) => ($visibility === "hide" ? 0 : 1)};

  @media only screen and (max-width: 500px) {
    right: 3rem;
    bottom: 5rem;
  }
`;

export const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 100px;
  right: 100px;
  animation-name: ${scrollAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  opacity: ${({ $visibility }) => ($visibility === "hide" ? 0 : 1)};

  color: #ffffff;
  font-family: NittiMedium;
`;

export const StyledSubscript = styled(StyledSmallP)`
  margin-top: 3rem;

  @media only screen and (max-width: 500px) {
    margin-top: 1.5rem;
  }
`;

// export const StyledMobileButton = styled(StyledButton)`
//   display: none;

//   &:hover {
//     background: #141414;
//     color: #fff;
//   }

//   @media only screen and (max-width: 768px) {
//     display: block;
//     font-size: 16px;
//     margin: 85vh auto;
//     width: 80%;
//     background: #faf7f3;
//     color: #141414;
//   }
// `;

const LeftPanel = ({
  data,
  imageNumber,
  content,
  handleShowFormPanel,
  mobileBottom,
}) => (
  <StyledPanel content={content}>
    {data.map((image, index) => (
      <StyledImage
        alt=""
        key={index}
        src={image.image}
        $opacity={imageNumber === index ? "display" : "hide"}
      />
    ))}

    {/* <StyledMobileButton onClick={() => handleShowFormPanel(true)}>
      Care to learn more?
    </StyledMobileButton> */}

    <IndicatorContainer>
      <Indicator $visibility={`${mobileBottom && "hide"}`}>
        <StyledSmallP>Scroll to read</StyledSmallP>
        <StyledArrow src={Arrow} />
      </Indicator>
    </IndicatorContainer>
  </StyledPanel>
);

export default LeftPanel;

// $opacity={imageNumber === index ? 1 : 0}

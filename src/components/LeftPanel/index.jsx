import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { StyledButton } from "../../styles";

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
  width: 80%;
  transition: 0.2s linear;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index:-1;
`;

export const StyledMobileButton = styled(StyledButton)`
  display: none;

  &:hover {
    background: #141414;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    font-size:16px;
    margin: 85vh auto;
    width: 80%;
    background: #faf7f3;
    color: #141414;
  }
`;

const LeftPanel = ({ data, imageNumber, content, handleShowFormPanel }) => (
  <StyledPanel content={content}>
    {data.map((image, index) => (
      <StyledImage
        alt=""
        key={index}
        src={image.image}
        className={imageNumber === index ? "display" : "hide"}
      />
    ))}

    <StyledMobileButton onClick={() => handleShowFormPanel(true)}>
      Care to have a chat?
    </StyledMobileButton>
  </StyledPanel>
);

export default LeftPanel;

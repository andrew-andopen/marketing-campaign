import React, { useState } from "react";

import styled from "styled-components";

import Form from "../Form";

import CloseButton from "../../images/close.png";
import Logo from "../../images/ao_logo.svg";

import { StyledH1, StyledP, StyledLink } from "../../styles";
import { StyledPanel, StyledLogo } from "../RightPanel";

export const StyledFormPanel = styled(StyledPanel)`
  position: fixed;
  top: 0;
  right: -100%;
  right: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 0 : "-100%"};
  margin-left: 50vw;
  padding: 2rem;
  z-index: 10;
  transition: right 1000ms;

  -webkit-transition: right 1000ms;
  -moz-transition: right 1000ms;
  -o-transition: right 1000ms;

  @media only screen and (max-width: 700px) {
    min-width: 100vw;
  }
`;

export const StyledLogoHidden = styled(StyledLogo)`
  visibility: hidden;
  display: none;
`;

export const StyledCloseButton = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${CloseButton});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: auto;
  cursor: pointer;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }

  @media only screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledContentWrapper = styled.div`
  padding: ${({ $success }) => ($success ? "12rem 8rem" : "6rem 8rem")};

  @media only screen and (max-width: 1440px) {
    padding: ${({ $success }) => ($success ? "8rem 4rem" : "6rem 4rem")};
  }

  @media only screen and (max-width: 1200px) {
    padding: ${({ $success }) => ($success ? "8rem 4rem" : "3rem 2rem")};
  }

  @media only screen and (max-width: 500px) {
    padding: ${({ $success }) => ($success ? "2rem 2rem" : "0rem 0rem")};
  }
`;

export const StyledFormSub = styled(StyledP)`
  font-size: 16px;
  line-height: 24px;

  @media only screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const FormPanel = ({ data, handleShowFormPanel, state }) => {
  const [submitForm, setSubmitForm] = useState(false);
  const handleFormSubmit = (value) => {
    setSubmitForm(value);
  };

  return (
    <StyledFormPanel $state={state}>
      {!submitForm && (
        <StyledCloseButton
          onClick={() => handleShowFormPanel(false)}
          $state={state}
        />
      )}

      {!submitForm && (
        <StyledContentWrapper>
          <StyledH1 $form>{data[6].title}</StyledH1>
          <StyledFormSub>{data[6].body}</StyledFormSub>
          <Form handleFormSubmit={handleFormSubmit} />
        </StyledContentWrapper>
      )}

      {submitForm && (
        <StyledContentWrapper $success>
          <StyledLogo src={Logo} />
          <StyledH1>{data[7].title}</StyledH1>
          <StyledP>{data[7].body}</StyledP>
          <StyledLink href="https://andopen.co/" target="blank">
            Visit &Open
          </StyledLink>
        </StyledContentWrapper>
      )}
    </StyledFormPanel>
  );
};

export default FormPanel;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { StyledButton, StyledSmallP } from "../../styles";

export const StyledFormContainer = styled.div`
  width: 100%;
  margin-top: 24px;

  @media only screen and (max-width: 500px) {
    margin-top: 0;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  top: -4px;
  font-size: 16px;
  font-family: NittiLight;
`;

export const StyledInput = styled.input`
  padding: 10px 16px;
  width: ${({ $half }) => ($half ? 49 + "%" : 100 + "%")};
  margin-left: ${({ $halfRight }) => ($halfRight ? 2 + "%" : 0)};
  border: 0;
  border-bottom: 1px solid #141414;
  font-size: 24px;
  outline: none;
  -webkit-border-radius: 0;

  @media only screen and (max-width: 1440px) {
    font-size: calc(0.5vw + 1vh + 1vmin);
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const StyledFlex = styled.div`
  display: flex;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledField = styled.div`
  position: relative;
  width: ${({ $half }) => ($half ? 49 + "%" : 100 + "%")};
  margin-left: ${({ $halfRight }) => ($halfRight ? 2 + "%" : null)};
  margin-top: 16px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Form = ({ handleFormSubmit, handleSetFirstName}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();


  const onSubmit = async (data) => {
    handleFormSubmit(true);

    const name = getValues("Firstname")
    handleSetFirstName(name)


    fetch("https://usebasin.com/f/500f6aa02e4c", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      reset();
    });
  };

  return (
    <StyledFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFlex>
          <StyledField $half>
            <StyledInput
              type="text"
              name="Firstname"
              placeholder="First name"
              {...register("Firstname", { required: true })}
            />
            {/* <StyledLabel htmlfor="Firstname">First name</StyledLabel> */}
            <div className="error">
              {errors.Firstname && "First name name is required"}
            </div>
          </StyledField>

          <StyledField $half $halfRight>
            <StyledInput
              placeholder="Last name"
              type="text"
              name="Lastname"
              {...register("Lastname", { required: true })}
            />
            {/* <StyledLabel htmlfor="Lastname">Last name</StyledLabel> */}
            <div className="error">
              {errors.Lastname && "Last name name is required"}
            </div>
          </StyledField>
        </StyledFlex>

        <StyledField>
          <StyledInput
            placeholder="Work email address"
            type="email"
            name="Email"
            {...register("Email", { required: true })}
          />
          {/* <StyledLabel htmlfor="Email">Work email address</StyledLabel> */}
          <div className="error">
            {errors.Email && "Email name is required"}
          </div>
        </StyledField>

        <StyledField>
          <StyledInput
            placeholder="Company name"
            type="text"
            name="CompanyName"
            {...register("CompanyName", { required: true })}
          />
          {/* <StyledLabel htmlfor="CompanyName">Comany name</StyledLabel> */}
          <div className="error">
            {errors.CompanyName && "Company name name is required"}
          </div>
        </StyledField>

        <StyledField>
          <label>
            <input
              placeholder="Company name"
              type="checkbox"
              name="OptIn"
              {...register("OptIn", { required: false })}
            />
            I agree to receive marketing communications from &Open every now and
            then
          </label>
        </StyledField>

        <StyledButton $submit typs="submit">
          Submit
        </StyledButton>
      </form>
    </StyledFormContainer>
  );
};

export default Form;

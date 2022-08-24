import React, {forwardRef} from 'react'
import styled from "styled-components";

const StyledRadioLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  
  ${props => props.filters && `
    @media (max-width: 1024px) {
      width: 100%;
    }
  
    &:not(:last-child) {
      margin-bottom: 10px;

      @media (max-width: 1024px) {
          margin-bottom: 0;
      }
    }
  `}
`

const StyledRadioSwitch = styled.span`
  display: block;
  position: relative;
  margin-right: 9px;
  width: 20px;
  height: 20px;

  &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border: 2px solid #e4e6ef;
      border-radius: 100%;
      width: 100%;
      height: 100%;
      transition: border 0.3s, background-color 0.3s;
  }

  &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 100%;
      width: 11px;
      height: 11px;
      background-color: ${props => props.backgroundColor || props.theme.colors.white};
      opacity: 0;
      visibility: hidden;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s, visibility 0.3s;
  }
`

const StyledRadioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 0;
  outline: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;

  &:checked + ${StyledRadioSwitch}::before {
      border-color: ${props => props.borderColor || props.theme.colors.primary};
      background-color: ${props => props.backgroundColor || props.theme.colors.primary};
  }
  
  &:checked + ${StyledRadioSwitch}::after {
        opacity: 1;
        visibility: visible;
    }
`

const StyledRadioCaption = styled.span`
  
`

export const Radio = forwardRef(({label, ...props}, ref) => {

  return (
    <StyledRadioLabel {...props}>
      <StyledRadioInput
        ref={ref}
        type="radio"
        {...props}
      />
      <StyledRadioSwitch/>
      <StyledRadioCaption>{label}</StyledRadioCaption>
    </StyledRadioLabel>
  )
})

Radio.displayName = 'Radio'
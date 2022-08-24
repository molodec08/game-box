import React, {forwardRef} from 'react'
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  
  ${props => props.search && `
    width: 400px;

    @media (max-width: 1280px) {
      width: 370px;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: inherit;
    }
    input {
      height: 40px;
      padding-right: 40px;

      @media (max-width: 768px) {
        height: inherit;
        border-radius: 0;
        color: ${props.theme.colors.white};
        padding-left: 40px;
        font-size: 16px;
        line-height: 16px;
        background-color: ${props.theme.colors.lightDark};
      }
    }
  `}
  
  ${props => props.sliderInput && `
    width: 100%;
    margin-right: 10px;
  `}
`;

const SpanLabel = styled.span`
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const StyledTextField = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background-color: ${props => props.backgroundColor || props.theme.colors.white};
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 5px;
  padding: 0 15px;
  height: 44px;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.color || props.theme.colors.black};

  ${props => props.error && `
    border: 1px solid var(--color-red);
    box-shadow: 0 0 0 1px var(--color-red);
    &::placeholder {
      color: ${props => props.color || props.theme.colors.red};
    }
  `}
  
  ${props => props.dark && `
    padding: 0 15px;
    background-color: #333;
    font-weight: 300;
    color: ${props.theme.colors.white};
    border-color: transparent;

    &::placeholder {
      color: rgba(#fff, 0.5);
    }
  `}

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    color: #a5a5ad;
    opacity: 1;
  }
  
  ${props => props.sliderInput && `
    width: 100%;
    &:not(:last-child) {
        margin-right: 10px;
    }
  `}
`;

const StyledError = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: var(--color-red);
  margin-top: 5px;
`;

export const TextField = forwardRef(({value, error = false, errorMessage, variant, label, onChange, ...props}, ref) => {
  return (
    <StyledLabel {...props}>
      {label && <SpanLabel>{label}</SpanLabel>}
      <StyledTextField
        dark={variant === 'dark'}
        small={variant === 'small'}
        ref={ref}
        value={value}
        onChange={onChange}
        {...props}
      />
      {errorMessage && <StyledError {...props}>{errorMessage}</StyledError>}
    </StyledLabel>
  );
})

TextField.displayName = 'TextField'
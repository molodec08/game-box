import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  color: ${props => props.color || props.theme.colors.lightDark};

  @media (max-width: 1024px) {
      margin-bottom: 15px;
  }

  @media (max-width: 576px) {
      margin-bottom: 12px;
      font-size: 28px;
      line-height: 38px;
  }
`

export const Title = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};
import React from 'react';
import styled from "styled-components";

const StyledSubtitle = styled.h2`
  margin: 0;
  padding: 90px 0;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.color || props.theme.colors.lightDark};

  @media (max-width: 576px) {
      font-size: 20px;
      line-height: 30px;
  }
`

export const Subtitle = (props) => {
  return (
    <StyledSubtitle {...props}/>
  );
};
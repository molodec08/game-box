import React from 'react';
import styled from "styled-components";

const StyledBody = styled.div`
  display: grid;
  column-gap: 60px;
  grid-template-columns: 270px auto;

  @media (max-width: 1024px) {
      display: block;
  }
`

export const Body = (props) => {
  return <StyledBody {...props}></StyledBody>
};
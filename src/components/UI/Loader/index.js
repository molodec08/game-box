import React from 'react';
import styled from "styled-components";
import {Spinner} from "../Spinner";

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1024px) {
      padding: 100px 0;
  }
`

export const Loader = () => {
  return (
    <StyledLoader>
      <Spinner size={'48px'}  />
    </StyledLoader>
  )
};
import React from 'react';
import styled from "styled-components";
import {GameItem} from "../../GameItem";

const StyledGrid = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media (max-width: 1024px) {
    display: grid;
    row-gap: 30px;
  }

  @media (max-width: 576px) {
    row-gap: 25px;
  }
`

const Grid = ({data}) => {
  return (
    <StyledGrid>
      {data?.results?.map(el => (
        <GameItem key={el.id} item={el} />
      ))}
    </StyledGrid>
  );
};

export default Grid;
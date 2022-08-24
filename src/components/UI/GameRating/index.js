import React from 'react';
import styled from "styled-components";

const StyledGameRating = styled.span`
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  top: 13px;
  left: 14px;
  color: ${props => props.color || props.theme.colors.white};
  padding: 2px 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  background-color: ${props => props.backgroundColor || props.theme.colors.primary};
  border-radius: 5px;

  @media (max-width: 1024px) {
    left: 10px;
  }

  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  @media (max-width: 576px) {
    top: 11px;
    left: 12px;
  }
  
  ${props => props.red && `
    background-color: ${props.theme.colors.red};
  `}
  
  ${props => props.green && `
    background-color: ${props.theme.colors.green};
  `}
`

export const GameRating = ({rating, className}) => {
  const isHighRating = Math.floor(Number(rating)) > 3 ? 'green' : 'red'

  return (
    <>
      {rating &&
        <StyledGameRating red={isHighRating === 'red' && isHighRating} green={isHighRating === 'green' && isHighRating}>
            {rating}
        </StyledGameRating>
      }
    </>
  )
}
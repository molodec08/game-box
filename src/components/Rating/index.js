import React from "react";
import styled from "styled-components";

const StyledRating = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  padding-top: 2px;
  margin-left: 5px; 
  
  ${props => props.gameItem && `
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    margin-right: 25px;
    margin-left: 5px;

    @media (max-width: 576px) {
        margin-right: 15px;
    }
  `}

  ${props => props.red && `
    color: #f00;
  `}
  
  ${props => props.green && `
    color: #00a340;
  `}
`

export const Rating = ({rating, gameItem, ...props}) => {
  const color = Math.floor(Number(rating ? rating : 0)) > 3 ? 'green' : 'red'

  return (
    <StyledRating gameItem={gameItem} red={color === 'red' && color} green={color === 'green' && color} {...props}>
      {rating ? rating : 0}
    </StyledRating>
  )
}

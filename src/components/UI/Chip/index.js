import React from 'react'
import styled from "styled-components";

const StyledChip = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 14px;
  
  ${props => props.choice && `
    margin-bottom: 8px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  `}
`

export const Chip = ({children, ...props}) => {
  return (
    <StyledChip {...props}>{children}</StyledChip>
  )
}

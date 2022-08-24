import React from 'react';
import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'

const StyledLogo = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
  color: ${props => props.color || props.theme.colors.white};
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding-top: 22px;
    padding-bottom: 22px;
  }
`

export const Logo = (props) => {
  return (
    <Link href='/'>
      <StyledLogo {...props}>GAMEBOX</StyledLogo>
    </Link>
  )
}
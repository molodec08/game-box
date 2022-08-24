import React, {memo} from 'react'
import styled from "styled-components";

const StyledSpinner = styled.svg`
  animation: rotate-keyframes 1s linear infinite;
  
  @keyframes rotate-keyframes {
    100% {
      transform: rotate(360deg);
    }
  }
  
  ${props => props.dark && `
    circle {
      stroke-width: 1.5;
      stroke-opacity: 1;
      stroke: ${props.theme.colors.lightDark};
    }
  
    path {
      stroke-width: 1.5;
      stroke: rgba(#fff, 1);
    }
  `}
`

export const Spinner = memo(({size, variant}, props) => {
  return (
    <StyledSpinner
      {...props}
      dark={variant}
      height={size}
      width={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle
        cx='8'
        cy='8'
        r='7'
        stroke='currentColor'
        strokeOpacity='0.25'
        strokeWidth='3'
        vectorEffect='non-scaling-stroke'
      />
      <path
        d='M15 8a7.002 7.002 0 00-7-7'
        stroke='#005382'
        strokeWidth='3'
        strokeLinecap='round'
        vectorEffect='non-scaling-stroke'
      />
    </StyledSpinner>
  )
})

Spinner.displayName = 'Spinner'
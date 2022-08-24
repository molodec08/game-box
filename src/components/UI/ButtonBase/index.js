import React, {useRef, forwardRef} from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  
  ${props => props.hideSearch && `
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-left: -9px;

    @media (min-width: 769px) {
        display: none;
    }

    svg {
        width: 22px;
        height: 22px;
        stroke: #fff;
    }
  `}
  
  ${props => props.closeBtn && `
    position: absolute;
    top: 50%;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    color: ${props => props.color || props.theme.colors.white};
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;

    @media (max-width: 768px) {
        right: 10px;
    }

    svg {
        width: 17px;
        height: 17px;
        stroke: #fff;
    }
  `}
  
  ${props => props.active && `
    opacity: 1;
    visibility: visible;
  `}
  
  ${props => props.searchBtn && `
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    top: 50%;
    right: -42px;
    transform: translateY(-50%);
    color: #fff;

    @media (max-width: 768px) {
      display: none;
    }

    svg {
      width: 17px;
      height: 17px;
      stroke: currentColor;
    }
  `}
  
  ${props => props.openSearch && `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: -8px;
    flex-shrink: 0;
    order: 1;

    @media (min-width: 769px) {
      display: none;
    }

    svg {
      width: 16px;
      height: 16px;
      stroke: #fff;
    }
  `}
  
  ${props => props.more && `
    color: #fff;
    padding: ${props.theme.containerOffset};
    text-align: left;
    display: block;
    background-color: ${props.theme.colors.dark};
    font-size: 13px;
    line-height: 16px;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
      background-color: ${props.theme.colors.dark};

      &:hover {
        background-color: ${props.theme.colors.lightDark};
      }
    }

    &:hover {
      background-color: ${props.theme.colors.black};
    }
  `}
  
  ${props => props.btn && `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: ${props.theme.colors.white};
    font-weight: 500;
    padding: 13px 15px;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid transparent;
    overflow: hidden;
    border-radius: 5px;
    background-color: ${props.theme.colors.primary};
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s;
    }

    @media (max-width: 576px) {
      padding: 8px 9px;
      font-size: 13px;
      line-height: 13px;
    }

    &:hover {
      background-color: ${props.theme.colors.primaryDark};

      svg {
        transform: translateX(2px);
      }
    }
  `}
  
  ${props => props.sm && `
    padding: 8px;
    font-size: 13px;
    line-height: 13px;
  `}
  
  ${props => props.stroke && `
    border: 1px solid ${props.theme.colors.primary};
    color: ${props.theme.colors.primary};
    background-color: transparent;

    &:hover {
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.primary};
    }
  `}
  
  ${props => props.close && `
    width: 25px;
    height: 25px;

    svg {
      width: 100%;
      height: 100%;
    }
  `}
  
  ${props => props.filterControl && `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;

    span {
      margin-left: 0;
    }

    svg {
      display: block;
      width: 20px;
      height: 20px;
      transition: transform 0.3s;
    }
  `}
  
  ${props => props.filterBtn && `
    width: 100%;
    padding-left: 0;
    padding-right: 0;

    &:not(:first-child) {
      margin-top: 15px;

      @media (max-width: 1024px) {
          margin-top: 0;
          margin-left: ${props.theme.containerOffset};
      }
    }

    @media (max-width: 1024px) {
      min-height: 50px;
    }

    @media (max-width: 576px) {
      min-height: 45px;
    }
  `}
  
  ${props => props.filterToggle && `
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 50;
    margin-bottom: 30px;

    &:hover {
      svg {
          transform: none;
      }
    }

    @media (max-width: 1024px) {
      border-radius: 8px;
      display: flex;
    }

    @media (max-width: 576px) {
      margin-bottom: 30px;
    }

    &:hover {
      background-color: ${props.theme.colors.primaryDark};
    }
  `}
  
  ${props => props.btnPagination && `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 100%;
    color: ${props.theme.colors.dark};
    transition: background-color 0.3s, color 0.3s, border 0.3s;
  
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
  
    &:not([disabled]) {
      &:hover {
        color: ${props.theme.colors.white};
        border-color: transparent;
        background-color: ${props.theme.colors.primary};
      }
    }
  `}
  
  ${props => props.leftPagination && `
    border-right: 1px solid #d3d3d3;
  `}
  
  ${props => props.rightPagination && `
    border-left: 1px solid #d3d3d3;
  `}
  
  ${props => props.backButton && `
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: ${props.theme.colors.lightDark};

    &:hover {
      svg {
        transform: translateX(-1px);
      }
    }
    
    svg {
      display: block;
      width: 20px;
      height: 20px;
      stroke: currentColor;
      transition: transform 0.3s;
    }

    span {
      margin-right: 5px;
    }
  `}
  
  ${props => props.sliderBtn && `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid rgba(#000, 0.1);
    background-color: ${props.theme.colors.white};
    color: ${props.theme.colors.dark};
    transition: color 0.3s, background-color 0.3s, border 0.3s;

    @media (max-width: 576px) {
      width: 35px;
      height: 35px;
    }
    
    &[disabled] {
      color: rgba(#000, 0.3);
      pointer-events: none;
    }

    &:hover {
      color: var(--color-white);
      background-color: ${props.theme.colors.primary};
      border: 1px solid transparent;
    }

    svg {
      width: 20px;
      height: 20px;

      @media (max-width: 576px) {
        width: 18px;
        height: 18px;
      }
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  `}
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  @media (max-width: 576px) {
    margin-right: 7px;
  }
  
  ${props => props.filterActive && `
    svg {
      transform: rotate(180deg);
    }
  `}
`;

export const ButtonBase = forwardRef(({startIcon = null, endIcon = null, variant, animationDuration = 500,  children, ...props},  ref) => {

  const buttonRef = useRef(null);
  const commonRef = ref || buttonRef

  return (
    <StyledButton
      ref={commonRef}
      sm={variant === 'sm' && variant}
      stroke={variant === 'stroke' ? variant : undefined}
      {...props}
    >
      {startIcon && <StyledIcon {...props}>{startIcon}</StyledIcon>}
      {children}
      {endIcon && <StyledIcon {...props}>{endIcon}</StyledIcon>}
    </StyledButton>
  )
})

ButtonBase.displayName = 'ButtonBase'
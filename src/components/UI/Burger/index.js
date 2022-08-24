import React from 'react';
import styled from "styled-components";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {FiMenu, FiX} from "react-icons/fi";

const StyledBurger = styled.button`
  border: none;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  opacity: 0.6;
  background: transparent;
  color: ${props => props.color || props.theme.colors.white};
  transition: opacity 0.3s;
  
  &:hover {
      opacity: 1;
  }
  
  svg {
      width: 100%;
      height: 100%;
      fill: ${props => props.color || props.theme.colors.white};
  }

  @media (min-width: 768px) {
      display: none;
  }
`

export const Burger = () => {

  const {openedMenu} = useTypedSelector(state => state.toggleReducer)
  const {toggleMenu} = useActions()

  const handleOpen = () => toggleMenu(!openedMenu)

  return (
    <StyledBurger
      onClick={handleOpen}
    >
      {openedMenu ? <FiX /> : <FiMenu /> }
    </StyledBurger>
  )
}

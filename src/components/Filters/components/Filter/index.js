import React, {useState} from 'react';
import styled from "styled-components";
import {FiChevronDown} from 'react-icons/fi';
import {ButtonBase} from "../../../UI/ButtonBase";

const StyledFilter = styled.div`
  width: 100%;
  outline: none;

  &:not(:first-child) {
    margin-top: 35px;
  }
`

const StyledFilterContent = styled.div`
  display: none;
  margin-top: 20px;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  
  ${props => props.filterActive && `
    display: flex;
  `}
`

export const Filter = ({name, children, ...props}) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(!open);

  return (
    <StyledFilter>
      <ButtonBase
        type='button'
        filterControl
        filterActive={open}
        aria-label={open ? 'Закрыть фильтр' : 'Открыть фильтр'}
        aria-expanded={open}
        onClick={handleOpen}
        endIcon={<FiChevronDown />}
      >
        {name}
      </ButtonBase>
      <StyledFilterContent filterActive={open} aria-hidden={open}>
        {children}
      </StyledFilterContent>
    </StyledFilter>
  )
};
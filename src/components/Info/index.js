import React from "react";
import styled from "styled-components";

const StyledInfoUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledInfoLi = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const StyledInfoCaption = styled.span`
  display: block;
  font-size: 15px;
  line-height: 18px;
  color: rgba(#000, 0.5);
  flex: 0 0 170px;

  @media (max-width: 576px) {
    flex: 0 0 150px;
  }
`

const StyledInfoValue = styled.span`
  position: relative;
  font-size: 15px;
  line-height: 18px;

  a {
    color: ${props => props.color || props.theme.colors.dark};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
      color: ${props => props.color || props.theme.colors.primary};
    }
  }
`

export const Info = ({items}) => {

  return (
    <StyledInfoUl>
      {items?.map((el) => (
        <StyledInfoLi key={el.caption}>
          <StyledInfoCaption>{el.caption}</StyledInfoCaption>
          {el.condition ? (
            <StyledInfoValue>{el.value}</StyledInfoValue>
          ) : (
            '—'
          )}
        </StyledInfoLi>
      ))}
    </StyledInfoUl>
  )
}
import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  padding-left: ${props => props.paddingLeft || props.theme.containerOffset};
  padding-right: ${props => props.paddingRight || props.theme.containerOffset};
  max-width: ${props => props.maxWidth || props.theme.contentWidth};
  margin: ${props => props.margin || '0'};
  
  ${props => props.headerContainer && `
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
      padding: 17px 15px;
    }
  `}
`

const Container = (props) => {
  return <StyledContainer {...props}/>
};

export default Container;
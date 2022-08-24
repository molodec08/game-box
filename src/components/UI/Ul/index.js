import React from 'react';
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  ${props => props.list && `
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 65vh;

    &::-webkit-scrollbar {
      width: 4px;
    }
      
    &::-webkit-scrollbar-thumb {
      background-color: rgba(#fff, 0.4);

      @media (max-width: 576px) {
          background-color: rgba(#fff, 0.3);
      }

      &:hover {
        background-color: rgba(#fff, 0.5);
      }
    }

    @media (max-height: 600px) {
      max-height: 45vh;
    }

    @media (max-width: 576px) and (max-height: 700px) {
      max-height: 45vh;
    }
  `}
`

const Ul = (props) => {
  return <StyledList {...props}/>
};

export default Ul;
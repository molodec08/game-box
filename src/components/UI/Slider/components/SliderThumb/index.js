import React, {useMemo} from 'react';
import styled from "styled-components";

const StyledSliderThumb = styled.div`
  height: 17px;
  width: 17px;
  border-radius: 100%;
  background-color: ${props => props.backgroundColor || props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 3px rgba(#000, 0.5);
  }
  
  ${props => props.changed && `
    
  `}
`

export const SliderThumb = ({value, initialValue, props,}) => {
  const isChanged = useMemo(() => initialValue !== value, [initialValue, value]);

  return (
    <StyledSliderThumb
      changed={isChanged}
      {...props}
    />
  );
};
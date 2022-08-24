import React, {useMemo} from "react";
import styled from "styled-components";
import {getTrackBackground} from "react-range";

const StyledSliderTrack = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 3px;
`

export const SliderTrack = ({children, values, props, min, max}) => {

  const backgroundStyle = useMemo(
    () =>
      getTrackBackground({
        values,
        colors: ["rgba(0,0,0,.2)", "#005382", "rgba(0,0,0,.2)"],
        min: min,
        max: max,
      }),
    [values]
  );

  return (
    <StyledSliderTrack
      ref={props.ref}
      style={{background: backgroundStyle}}
    >
      {children}
    </StyledSliderTrack>
  )
}
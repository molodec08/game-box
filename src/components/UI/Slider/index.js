import React, {useRef} from 'react';
import styled from "styled-components";
import {SliderTrack} from './components/SliderTrack';
import {SliderThumb} from './components/SliderThumb';
import {TextField} from '../TextField';
import {Range} from 'react-range';

const StyledSliderContainer = styled.div`
  width: 100%;
`

const StyledSliderInputs = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;
`

export const Slider = ({values, onChange, step, min, max}) => {
  const initialValueRef = useRef(values);

  const sanitizeValues = (value) => {

    if (value > max) {
      return max;
    }

    return value;
  }

  const handleRenderTrack = ({props, children}) => {
    return (
      <SliderTrack
        min={min}
        max={max}
        values={values}
        props={props}
      >
        {children}
      </SliderTrack>
    );
  }

  const handleRenderThumb = ({props, value, index}) => {
    return (
      <SliderThumb
        key={index}
        props={props}
        value={value}
        initialValue={initialValueRef.current?.[index]}
      />
    );
  }

  return (
    <StyledSliderContainer>
      <StyledSliderInputs>
        <TextField
          type="number"
          label='От'
          min={min}
          max={max}
          sliderInput
          value={values[0]}
          onChange={(e) => {
            const sanitizedValue = sanitizeValues(parseInt(e?.target.value || String(min)));
            onChange([sanitizedValue, values[1]]);
          }}
        />
        <TextField
          type="number"
          label='До'
          min={min}
          max={max}
          sliderInput
          value={values[1]}
          onChange={(e) => {
            const sanitizedValue = sanitizeValues(parseInt(e?.target.value || String(max)));
            onChange([values[0], sanitizedValue]);
          }}
        />
      </StyledSliderInputs>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderThumb={handleRenderThumb}
        renderTrack={handleRenderTrack}
      />
    </StyledSliderContainer>
  );
};
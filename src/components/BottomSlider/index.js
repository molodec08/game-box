import {FC} from 'react';
import styled from "styled-components";
import {Carousel} from '../Carousel';
import {SwiperSlide} from 'swiper/react';

const StyledBottomSliderContainer = styled.div`
  padding-top: 10px;

  @media (max-width: 576px) {
      padding-top: 5px;
  }
`

const StyledBottomSliderImage = styled.img`
  position: relative;
  width: 300px;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 3 / 3;
  background-color: ${props => props.backgroundColor || props.theme.colors.white};

  @media (max-width: 576px) {
    width: 250px;
  }
`

export const BottomSlider = (({images}) => {
  return (
    <StyledBottomSliderContainer>
      <Carousel title='Скриншоты игры' quantity={images?.length}>
        {images?.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <StyledBottomSliderImage src={item?.image} alt={item?.id}/>
            </SwiperSlide>
          )
        })}
      </Carousel>
    </StyledBottomSliderContainer>
  )
})
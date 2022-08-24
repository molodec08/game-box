import React, {useRef} from "react";
import styled from "styled-components";
import {Swiper} from 'swiper/react';
import {SliderBtn} from '../UI/SliderBtn';
import {Navigation} from 'swiper';
import 'swiper/css';

const StyledCarouselTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 576px) {
      margin-bottom: 25px;
  }
`

const StyledCarouselTitle = styled.h2`
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
  }

  @media (max-width: 576px) {
      font-size: 22px;
      line-height: 26px;
  }
`

const StyledCarouselBtns = styled.div`
  display: flex;
  align-items: center;
`

const breakpoints = {
  577: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 15
  },
  769: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30
  },
  1025: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30
  },
  1200: {
    slidesPerGroup: 5,
    slidesPerView: 5,
    spaceBetween: 30
  },
}

export const Carousel = ({children, quantity, title}) => {

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const navigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  }

  const onSwiper = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;

    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()
  }

  return (
    <>
      <StyledCarouselTop>
        <StyledCarouselTitle>{title}</StyledCarouselTitle>
        <StyledCarouselBtns>
          <SliderBtn dir='left' ref={navigationPrevRef}/>
          <SliderBtn dir='right' ref={navigationNextRef}/>
        </StyledCarouselBtns>
      </StyledCarouselTop>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={15}
        navigation={navigation}
        onSwiper={onSwiper}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </>
  )
}

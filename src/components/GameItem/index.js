import React, {FC} from 'react';
import styled from "styled-components";
import {Rating} from '../Rating';
import Image from 'next/image';
import Link from 'next/link';
import {getYear} from "../../helpers/getCurrentYear/getCurrentYear";

const StyledGamesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  
  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (min-width: 1025px) {

    &:hover {
      box-shadow: 0 2px 25px rgba(#000, 0.1);

    &:before {
      opacity: 0;
      visibility: hidden;
    }
  }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 20px;
      right: 20px;
      height: 1px;
      background-color: rgba(#000, 0.1);
      transition: opacity 0.3s, visibility 0.3s;
    }
  }
}
`

const StyledGameLeft = styled.div`
  display: flex;
`

const StyledGameImage = styled.a`
  position: relative;
  width: 64px;
  height: 96px;
  flex-shrink: 0;
  display: block;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 20px;
  background-color: ${props => props.backgroundColor || props.theme.colors.dark};
`

const StyledGameText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.color || props.theme.colors.dark};
`

const StyledGameTitle = styled.div`
  margin: 0;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${props => props.color || props.theme.colors.dark};
  transition: color 0.3s;

  @media (max-width: 576px) {
      margin-right: 80px;
  }

  &:hover {
      color: ${props => props.color || props.theme.colors.primary};
  }
`

const StyledGameInfo = styled.span`
  display: block;
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
      margin-bottom: 5px;
  }
`

const StyledGameDesc = styled.a`
  display: block;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: rgba(#000, 0.5);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const StyledGameRight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 90px;

  @media (max-width: 576px) {
    position: absolute;
    top: 0;
    right: 0;
    padding-left: 0;
  }
`

export const GameItem = ({ item }) => {

  const {background_image, description, name, slug, released, rating, shortDescription, id} = item;

  return (
    <StyledGamesContainer>
      <StyledGameLeft>
        <Link href={`/games/${id}`}>
          <StyledGameImage>
            <Image
              unoptimized
              layout='fill'
              src={background_image ? background_image : '/no-image.jpg'}
              alt={description}
            />
          </StyledGameImage>
        </Link>
        <StyledGameText>
          <Link href={`/games/${id}`}>
            <StyledGameTitle>{name ? name : slug}</StyledGameTitle>
          </Link>
          <StyledGameInfo>{getYear(released)}</StyledGameInfo>
          <Link href={`/games/${id}`}>
            <StyledGameDesc>{shortDescription ? shortDescription : description}</StyledGameDesc>
          </Link>
        </StyledGameText>
      </StyledGameLeft>
      <StyledGameRight>
        <Rating gameItem rating={rating} />
      </StyledGameRight>
    </StyledGamesContainer>
  )
}

import React from "react";
import styled from "styled-components";
import {Rating} from "../../../Rating";
import Link from "next/link";
import Image from "next/image";
import {getYear} from '../../../../helpers/getCurrentYear/getCurrentYear';

const StyledSearchItem = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: ${props => props.padding || props.theme.containerOffset};
  color: ${props => props.color || props.theme.colors.white};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.background || props.theme.colors.lightDark};
  }
`

const StyledLeft = styled.div`
  display: flex;
`

const StyledImage = styled.div`
  position: relative;
  width: 32px;
  height: 48px;
  flex-shrink: 0;
  display: block;
  border-radius: 5px;
  overflow: hidden;
  margin-right: ${props => props.marginRight || props.theme.containerOffset};
  background-color: ${props => props.background || props.theme.colors.dark};
`

const StyledTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.color || props.theme.colors.dark};
`

const StyledTitle = styled.span`
  margin: 0;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${props => props.color || props.theme.colors.white};
  transition: color 0.3s;
`

const StyledInfo = styled.span`
  display: block;
  color: ${props => props.color || props.theme.colors.white};
`

export const SearchItem = ({item, ...props}) => {
  const {name, id, background_image, slug, released, rating} = item;

  return (
    <Link href={`/games/${id}`}>
      <StyledSearchItem {...props}>
        <StyledLeft {...props}>
          <StyledImage {...props}>
            <Image
              unoptimized
              layout='fill'
              src={background_image ? background_image : '/no-image.jpg'}
              alt={slug}
            />
          </StyledImage>
          <StyledTextContainer {...props}>
            <StyledTitle {...props}>{name ? name : slug}</StyledTitle>
            <StyledInfo {...props}>{getYear(released)}</StyledInfo>
          </StyledTextContainer>
        </StyledLeft>
        <Rating rating={rating} />
      </StyledSearchItem>
    </Link>
  )
}
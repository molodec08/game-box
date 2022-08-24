import React from 'react';
import styled from "styled-components";
import {Chip} from '../../../UI/Chip'

const StyledChoices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    margin-bottom: 17px;
  }
`

export const FiltersChoices = ({choices}) => {
  const {sortByRelease, sortByRating, platforms} = choices;

  return (
    <StyledChoices>
      <Chip choice>Дата релиза: {sortByRelease === 'released' ? 'Сначала новые' : 'Сначала старые'}</Chip>
      <Chip choice>Рейтинг: {sortByRating === 'rating' ? 'Сначала высокий рейтинг' : 'Сначала низкий рейтинг'}</Chip>
      <Chip choice>Платформа: {platforms.label}</Chip>
    </StyledChoices>
  );
};
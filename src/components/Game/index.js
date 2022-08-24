import {Fragment, useMemo} from "react";
import styled from "styled-components";
import {BackButton} from "../UI/BackButton";
import {GameRating} from "../UI/GameRating";
import {BottomSlider} from "../BottomSlider";
import {useRouter} from "next/router";
import {useGetGameByIdQuery, useGetGameScreensByIdQuery} from "../../services/GameboxService";
import {Info} from "../Info";
import {convertTimestampToDate} from "../../helpers/convertTimestampToDate/convertTimestampToDate";
// import {convertNumbers} from "@/helpers/convertNumbers/convertNumbers";
// import {convertTimestampToDate} from "@/helpers/convertTimestampToDate/convertTimestampToDate";

const StyledGameSection = styled.section`
  background-color: #f4f4f4;
  height: 100%;
`

const StyledGameContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.containerWidth};
  padding: 40px;
  padding-bottom: 100px;
  background-color: ${props => props.backgroundColor || props.theme.colors.white};
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 35px 15px;
    padding-bottom: 70px;
  }

  @media (max-width: 576px) {
    padding-bottom: 50px;
  }
  
`

const StyledGameTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  @media (max-width: 576px) {
    margin-bottom: 25px;
  }
`

const StyledGameContent = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`

const StyledGameLeft = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-right: 50px;
  width: fit-content;

  @media (max-width: 1024px) {
    margin-right: 40px;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const StyledGameImage = styled.img`
  position: relative;
  width: 300px;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  background-color: ${props => props.backgroundColor || props.theme.colors.white};

  @media (max-width: 576px) {
    width: 250px;
  }
`

const StyledGameRight = styled.div`
  width: 100%;
`

const StyledGameTitle = styled.h1`
  margin: 0;
  max-width: 650px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: ${props => props.color || props.theme.colors.lightDark};

  @media (max-width: 576px) {
      font-size: 26px;
      line-height: 33px;
      margin-bottom: 15px;
  }
`

const StyledGameOriginalTitle = styled.h1`
  display: block;
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
  color: rgba(#000, 0.5);
  margin-bottom: 25px;
`

const StyledGameSubTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: ${props => props.color || props.theme.colors.lightDark};

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 30px;
  }
`

const StyledGameSite = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: var(--offset);
  color: var(--color-white);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-light-dark);
  }
`;

export const Game = () => {
  const {push, query: {id}} = useRouter();
  const {data, isLoading} = useGetGameByIdQuery(id)
  const {data: dataScreens, isLoading: isLoadingScreens} = useGetGameScreensByIdQuery(id)
  const {
    name_original,
    name,
    rating,
    publishers,
    parent_platforms,
    released,
    website,
    description_raw,
    genres
  } = {...data};

  const items = [
    {caption: 'Издатель', value: publishers?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: publishers?.length},
    {caption: 'Жанр', value: genres?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.name}</Fragment>), condition: genres?.length},
    {caption: 'Платформы', value: parent_platforms?.map((el, idx) => <Fragment key={idx}>{idx ? ', ' : ''}{el.platform.name}</Fragment>), condition: parent_platforms},
    {caption: 'Сайт', value: <StyledGameSite href={website} target={'_blank'}>{website}</StyledGameSite>, condition: website},
    {caption: 'Дата релиза' , value: convertTimestampToDate(released, "D MMMM YYYY"), condition: released},
    {caption: 'Описание' , value: description_raw, condition: description_raw},
  ]

  const gameTitle = name ? name : (isLoading || isLoadingScreens) ? 'Загрузка' : 'Без названия'

  return (
    <StyledGameSection>
      <StyledGameContainer>
        <StyledGameTop>
          <BackButton/>
        </StyledGameTop>
        <StyledGameContent>
          <StyledGameLeft>
            <StyledGameImage src={data?.background_image} alt={name_original}/>
            <GameRating rating={rating}/>
          </StyledGameLeft>
          <StyledGameRight>
            <StyledGameTitle>{gameTitle}</StyledGameTitle>
            <StyledGameOriginalTitle>{name_original}</StyledGameOriginalTitle>
            <StyledGameSubTitle>Об игре</StyledGameSubTitle>
            <Info items={items}/>
          </StyledGameRight>
        </StyledGameContent>
        {dataScreens &&
          <BottomSlider images={dataScreens.results}/>
        }
      </StyledGameContainer>
    </StyledGameSection>
  );
}
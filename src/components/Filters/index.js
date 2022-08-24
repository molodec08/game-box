import React, {useEffect} from 'react';
import styled from "styled-components";
import {Controller, useForm} from 'react-hook-form';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ButtonBase} from "../UI/ButtonBase";
import {Slider} from "../UI/Slider";
import {FiltersChoices} from './components/FiltersChoices'
import {getYear} from '../../helpers/getCurrentYear/getCurrentYear';
import Flex from "../UI/Flex";
import {Select} from '../UI/Select'
import {Filter} from "./components/Filter";
import {FiX} from "react-icons/fi";
import {Radio} from "../UI/Radio";
import {Device} from "../Device";
import {useActions} from "../../hooks/useActions";

const StyledFormFilter = styled.form`
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10001;
    background-color: ${props => props.backgroundColor || props.theme.colors.white};
    transition: transform 0.3s;
    transform: translateX(-100%);
    min-width: 360px;
    overflow-x: hidden;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    
    ${props => props.openedFilters && `
      transform: translateX(0);
    `}
  }
`

const StyledTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px ${props => props.padding || props.theme.containerOffset};
  background-color: ${props => props.backgroundColor || props.theme.colors.white};
  border-bottom: 1px solid rgba(0,0,0,.2);

  @media (min-width: 1025px) {
    display: none;
  }
`

const StyledTitleFilters = styled.h3`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  line-height: 26px;

  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`

const StyledFilterContainer = styled.div`
  @media (max-width: 1024px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 45px 20px 50px;
  }

  @media (max-width: 576px) {
    padding: 25px 20px 40px;
  }
`

const StyledFilterContent = styled.div`

`

const StyledFilterRadios = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
      flex-direction: row;
      align-items: center;
  }
`

const StyledFilterBtns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  @media (max-width: 1024px) {
    --offset: 20px;
    align-items: flex-end;
    flex-direction: row;
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    padding: 0 20px 45px;
    background-color: #fff;
  }

  @media (max-width: 576px) {
    padding-bottom: 25px;
  }
`

const Filters = (props) => {
  const {
    setSortByRelease,
    setSortByRating,
    setFilterPlatform,
    setPage,
    toggleFilters,
    resetFilters
  } = useActions();
  const {openedFilters} = useTypedSelector(state => state.toggleReducer);

  const handleClose = () => {
    toggleFilters(false)
  }

  const platforms = [
    {label: "PC", value: "4"},
    {label: "PlayStation 4", value: "18"},
    {label: "Xbox One", value: "1"},
    {label: "Nintendo Switch", value: "7"},
    {label: "iOS", value: "3"},
    {label: "Android", value: "21"}
  ]

  const {handleSubmit, control, getValues, reset} = useForm({
    defaultValues: {
      platforms: platforms[0],
      sortByRelease: '-released',
      sortByRating: '-rating',
    }
  })

  const onSubmit = handleSubmit((data) => {
    const {sortByRelease, sortByRating, platforms} = data

    setPage(1)
    setSortByRelease(sortByRelease)
    setSortByRating(sortByRating)
    setFilterPlatform(platforms)
    handleClose()
  })

  const handleReset = () => {
    resetFilters()
    reset()
  }

  useEffect(() => {
    handleReset()
  }, [])

  return (
    <StyledFormFilter
      action="#"
      onSubmit={onSubmit}
      noValidate
      openedFilters={openedFilters}
      {...props}
    >
      <StyledTop {...props}>
        <ButtonBase
          type="button"
          onClick={handleReset}
          variant="sm"
          btn
        >
          Сбросить
        </ButtonBase>
        <StyledTitleFilters>Фильтры</StyledTitleFilters>
        <ButtonBase
          type="button"
          Close
          onClick={handleClose}
        >
          <FiX />
        </ButtonBase>
      </StyledTop>
      <StyledFilterContainer>
        <FiltersChoices choices={getValues()} />
        <Flex direction={'column'}>
          <Filter name="Платформы">
            <Controller
              name="platforms"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <Select
                    value={value}
                    onChange={onChange}
                    name="platforms"
                    options={platforms}
                  />
                );
              }}
            />
          </Filter>
          <Filter name="Релиз">
            <StyledFilterRadios>
              <Controller
                name="sortByRelease"
                control={control}
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <Radio
                        filters
                        label='Сначала новые'
                        value='-released'
                        defaultChecked
                        name="sortByRelease"
                        onChange={onChange}
                      />
                      <Radio
                        filters
                        label='Сначала старые'
                        value='released'
                        name="sortByRelease"
                        onChange={onChange}
                      />
                    </>
                  );
                }}
              />
            </StyledFilterRadios>
          </Filter>
          <Filter name="Рейтинг">
            <StyledFilterRadios>
              <Controller
                name="sortByRating"
                control={control}
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <Radio
                        filters
                        label='Сначала высокий'
                        value='-rating'
                        defaultChecked
                        name="sortByRating"
                        onChange={onChange}
                      />
                      <Radio
                        filters
                        label='Сначала низкий'
                        value='rating'
                        name="sortByRating"
                        onChange={onChange}
                      />
                    </>
                  );
                }}
              />
            </StyledFilterRadios>
          </Filter>
        </Flex>
      </StyledFilterContainer>
      <StyledFilterBtns>
        <ButtonBase filterBtn btn>Применить</ButtonBase>
        <Device desktop>
          <ButtonBase type="button" onClick={handleReset} variant="stroke" filterBtn btn>Сбросить</ButtonBase>
        </Device>
        <Device mobile>
          <ButtonBase type="button" onClick={handleClose} variant="stroke" filterBtn btn>Закрыть</ButtonBase>
        </Device>
      </StyledFilterBtns>
    </StyledFormFilter>
  );
};

export default Filters;